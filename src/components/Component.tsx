import { useState, useEffect } from "react";
import SearchBar from "@/components/SearchBar";
import { useAppContext } from "@/context/AppContext";
import { Cart as CartType, Items } from "@/types";
import CategoryList from "@/components/CategoryList";
import ItemList from "@/components/ItemList";
import Cart from "@/components/Cart";
import Dialog from "@/components/Dialog";

export default function Component() {
  const { state } = useAppContext();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [cart, setCart] = useState<CartType[]>([])
  const [subtotal, setSubtotal] = useState(0)
  const [total, setTotal] = useState(0)
  const [showDialog, setShowDialog] = useState(false)
  const [meatQuantity, setMeatQuantity] = useState(1)
  const [modifiers, setModifiers] = useState<Items>();
  const [search, setSearch] = useState('');
  const [selectedValue, setSelectedValue] = useState<string>('');

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
      updateSubtotalAndTotal(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const handleAvatarClick = (categoryName: string | null) => {
    setActiveCategory(prevCategory => (prevCategory === categoryName ? null : categoryName));
  };

  const handleItemClick = (item: Items) => {
    if (item.modifiers) {
      setShowDialog(true)
      setModifiers(item);
    } else {
      setActiveCategory(item.category)
      addToCart(item)
    }
  }

  const addToCart = (item: Items) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((i) => i.id === item.id);
      let updatedCart;
      
      if (existingItem) {
        updatedCart = prevCart.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        updatedCart = [...prevCart, { ...item, quantity: 1 }];
      }
      
      updateSubtotalAndTotal(updatedCart);
      handleAddToCart();
      return updatedCart;
    });
  };
  
  const removeFromCart = (item: Items) => {
    setCart((prevCart) => {
      const updatedCart = prevCart
        .map((i) => (i.id === item.id ? { ...i, quantity: i.quantity - 1 } : i))
        .filter((i) => i.quantity > 0);
      
      updateSubtotalAndTotal(updatedCart);
      return updatedCart;
    });
  };
  
  const updateSubtotalAndTotal = (cart: CartType[]) => {
    const newSubtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setSubtotal(newSubtotal);
    setTotal(newSubtotal); // Assumindo que total é igual a subtotal, ajuste se necessário
  };

  const handleAddToCart = () => {
    setShowDialog(false)
  }

  const webSettings = {
    "backgroundColour": state.venue?.webSettings.backgroundColour || "",
    "primaryColour": state.venue?.webSettings.primaryColour || "",
    "primaryColourHover": state.venue?.webSettings.primaryColourHover || "",
    "navBackgroundColour": state.venue?.webSettings.navBackgroundColour || ""
  }

  function getFiltered(items: Items[], search: string) {
    return items.flat(Infinity).filter(it => it.name.includes(search));
  }

  return (
    <div className="flex min-h-screen p-4 bg-gray-50">
      <div className="flex w-full max-w-7xl mx-auto">
        <div className="flex-1">
          <div className="flex items-center mb-4">
            <div className="relative w-full">
              <SearchBar setSearch={setSearch} search={search} />
            </div>
          </div>
          <CategoryList
            state={state}
            activeCategory={activeCategory}
            handleAvatarClick={handleAvatarClick}
            webSettings={webSettings}
          />
          <ItemList
            state={state}
            activeCategory={activeCategory}
            handleItemClick={handleItemClick}
            search={search}
            getFiltered={getFiltered}
            cart={cart}
            webSettings={webSettings}
            handleAvatarClick={handleAvatarClick}
          />
        </div>
        <Cart
          cart={cart}
          state={state}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          subtotal={subtotal}
          total={total}
        />
      </div>
      <Dialog
        showDialog={showDialog}
        setShowDialog={setShowDialog}
        modifiers={modifiers}
        selectedValue={selectedValue}
        setSelectedValue={setSelectedValue}
        meatQuantity={meatQuantity}
        setMeatQuantity={setMeatQuantity}
        handleAddToCart={addToCart}
        webSettings={webSettings}
      />
    </div>
  )
}
