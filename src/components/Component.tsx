"use client"

import { useState } from "react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useAppContext } from "@/context/AppContext"
import { SearchBar } from "@/components/SearchBar";
import { Cart, Items } from "@/types"
import { ChevronUp } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export default function Component() {
  const { state } = useAppContext();
  const [activeCategory, setActiveCategory] = useState<string | undefined | null>('burgers')
  const [cart, setCart] = useState<Cart[]>([])
  const [subtotal, setSubtotal] = useState(0)
  const [total, setTotal] = useState(0)
  const [showDialog, setShowDialog] = useState(false)
  const [meatQuantity, setMeatQuantity] = useState(1)
  const [modifiers, setModifiers] = useState<Items>();

  const handleAvatarClick = (category: string | null) => {
    setActiveCategory(category === activeCategory ? null : category)
  }

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
    const existingItem = cart.find((i) => i.id === item.id)
    if (existingItem) {
      const updatedCart = cart.map((i) => (i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i))
      setCart(updatedCart)
    } else {
      setCart([...cart, { ...item }])
    }
    // Call updateSubtotalAndTotal here
    updateSubtotalAndTotal()
  }

  const removeFromCart = (item: Items) => {
    const updatedCart = cart
      .map((i) => (i.id === item.id ? { ...i, quantity: i.quantity - 1 } : i))
      .filter((i) => i.quantity > 0)
    setCart(updatedCart)
    // Call updateSubtotalAndTotal here
    updateSubtotalAndTotal()
  }

  const updateSubtotalAndTotal = () => {
    const newSubtotal = cart.reduce((acc, item: Items) => acc + item.price * item.quantity, 0)
    setSubtotal(newSubtotal)
    setTotal(newSubtotal)
  }

  const handleAddToCart = () => {
    // const item = {
    //   id: 2,
    //   name: "Smash Burger",
    //   price: 33,
    //   category: "burgers",
    // }
    // addToCart(item)
    setShowDialog(false)
  }

  const webSettings = {
    "backgroundColour": state.venue?.webSettings.backgroundColour || "",
    "primaryColour": state.venue?.webSettings.primaryColour || "",
    "primaryColourHover": state.venue?.webSettings.primaryColourHover || "",
    "navBackgroundColour": state.venue?.webSettings.navBackgroundColour || ""
  }

  return (
    <div className="flex min-h-screen p-4 bg-gray-50">
      <div className="flex w-full max-w-7xl mx-auto">
        <div className="flex-1">
          <div className="flex items-center mb-4">
            <div className="relative w-full">
              <SearchBar setSearch={() => alert('')} search=""/>
            </div>
          </div>
          <div className="flex items-center mb-4 space-x-4">
            {state.menuItems.map(avatar => {
              const lowerName = String(avatar.name).toLowerCase();
              return (
                <div key={avatar.id} className="text-center cursor-pointer" onClick={() => handleAvatarClick(lowerName)}>
                  <Avatar style={{ border: `${activeCategory === lowerName ? `2px solid ${webSettings.primaryColour}` : "none"}` }} className={"mx-auto rounded-full"}>
                    <AvatarImage src={avatar.images[0].image} />
                    <AvatarFallback>AF</AvatarFallback>
                  </Avatar>
                  <p className={`${activeCategory === lowerName ? "font-bold border-gray-800 underline" : ""}`}>{avatar.name}</p>
                </div>
              )
            })}
          </div>
          <div className="space-y-4">
            {state.menuItems.map(menuSection => {
              const lowerName = String(menuSection.name).toLowerCase();
              return (
                activeCategory === lowerName && (
                  <div key={menuSection.id}>
                    <div
                      className="flex justify-between items-center mb-2 cursor-pointer"
                      onClick={() => handleAvatarClick(lowerName)}
                    >
                      <h2 className={`text-lg font-semibold`}>{menuSection.name}</h2>
                      <ChevronUp className="h-5 w-5 text-gray-400" />
                    </div>
                    <div className="space-y-2">
                      {
                        menuSection.items.map(item => {
                          return (
                            <div key={item.id}
                              className="flex items-center cursor-pointer"
                              onClick={() => handleItemClick({ ...item, category: lowerName, quantity: 1, })}
                            >
                              <div className="flex-1">
                                <div className="flex gap-1">
                                  <div style={{ backgroundColor: webSettings.primaryColour }} className={`${cart.find((cartItem) => cartItem.id === item.id)?.quantity ? `text-white flex justify-center font-bold w-6 h-6` : ""}`}>{cart.find((cartItem) => cartItem.id === item.id)?.quantity
                                    ? `${cart.find((cartItem) => cartItem.id === item.id)?.quantity}`
                                    : ``}
                                  </div>
                                  <h3 className="font-semibold">{item.name}</h3>
                                </div>
                                <p>{item.description}</p>
                                <p className="font-bold">{state.venue?.currency}{item.price.toFixed(2)}</p>
                              </div>
                              {item.images && <img src={item.images[0].image} alt={item.name} className="w-16 h-16 rounded-md" />}
                            </div>
                          )
                        })
                      }
                    </div>
                  </div>
                )
              )
            })}
          </div>
        </div>
        <div className="w-72 ml-8">
          <Card>
            <CardHeader className="bg-[#F8F9FA]">
              <CardTitle>Carrinho</CardTitle>
            </CardHeader>
            <CardContent>
              {cart.length === 0 ? (
                <p>Seu carrinho está vazio</p>
              ) : (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="font-bold">{state.venue?.currency}{item.price.toFixed(2)}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm" onClick={() => removeFromCart(item)}>
                          -
                        </Button>
                        <span>{item.quantity}</span>
                        <Button variant="outline" size="sm" onClick={() => addToCart(item)}>
                          +
                        </Button>
                      </div>
                    </div>
                  ))}
                  <div className="">
                    <div className="flex justify-between">
                      <p>Subtotal:</p>
                      <p className="font-bold">{state.venue?.currency}{subtotal.toFixed(2)}</p>
                    </div>
                    <div className="flex justify-between">
                      <p>Total:</p>
                      <p className="font-bold">R${total.toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
            <CardHeader className="bg-[#F8F9FA] border-b">
              <CardTitle>Subtotal</CardTitle>
            </CardHeader>
            <CardHeader className="bg-[#F8F9FA]">
              <CardTitle>Total</CardTitle>
            </CardHeader>
          </Card>
        </div>
      </div>
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="sm:max-w-[500px]">
        <img src={modifiers?.images[0].image} />
          <DialogHeader>
            <DialogTitle>{modifiers?.name}</DialogTitle>
            <DialogDescription>{modifiers?.description}</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            {
              modifiers?.modifiers?.map(it => it.items).flat().map((modifierItem, index) => {
                return (
                  <RadioGroup defaultValue={undefined}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value={String(index)} id={String(modifierItem.id)} />
                      <Label htmlFor={String(modifierItem.id)}>{modifierItem.name} - {modifierItem.price}</Label>
                    </div>
                  </RadioGroup>
                )
              })
            }
            <div className="grid grid-cols-[1fr_auto] items-center gap-4">
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setMeatQuantity(meatQuantity - 1)}
                  disabled={meatQuantity === 1}
                >
                  -
                </Button>
                <span>{meatQuantity}</span>
                <Button variant="outline" size="sm" onClick={() => setMeatQuantity(meatQuantity + 1)}>
                  +
                </Button>
              </div>
            </div>
            <Button onClick={handleAddToCart}>Add to Cart</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}


