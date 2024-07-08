import { Items } from "@/types";
import { Button } from "@/components/ui/button";
import { MinusCircleIcon, PlusCircleIcon } from "lucide-react";

interface CartProps {
  cart: Items[];
  setCart: React.Dispatch<React.SetStateAction<Items[]>>;
}

export function Cart({ cart, setCart }: CartProps){
  function handleClearCart(){
    setCart([]);
  }
  return (
    <div className="">
        <div className="scroll-m-20 text-2xl font-semibold">Carrinho</div>
        {cart.length > 0
          ? (
          <div>
            <div key={Math.random()}> 
            {
              cart.map((cartItem: Items) => (
                <div className="">
                  <div key={cartItem.id}>{cartItem.name} <span>{cartItem.price}</span></div>
                  <div className="flex flex-row gap-6">
                    <PlusCircleIcon />
                      {cartItem.quantity || 1}
                    <MinusCircleIcon />
                  </div>
                </div>
              ))
            }
            </div>
            <div>Subtotal: </div>
            <div>Total: </div>
            <Button onClick={handleClearCart}>Limpar carrinho</Button>
          </div>
          )
          : (<p className="text-sm text-muted-foreground">Seu carrinho esta vazio</p>)
        }
      </div>
  )
}