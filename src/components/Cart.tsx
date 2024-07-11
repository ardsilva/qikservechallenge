import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Items, State } from '@/types';
import { MinusIcon, PlusIcon } from 'lucide-react';
import QuantityButton from './QuantityButton';


interface CartProps {
  cart: Items[];
  state: State;
  addToCart: (arg0: Items | number) => void;
  removeFromCart: (arg0: Items | number) => void;
  subtotal: number;
  total: number;
}

export default function Cart({
  cart,
  state,
  addToCart,
  removeFromCart,
  subtotal,
  total
}: CartProps) {
  const primaryColor = state.venue?.webSettings?.primaryColour || '#a2f';
  return (
    <div className="w-72 ml-8">
      <Card>
        <CardHeader className="bg-[#F8F9FA]">
          <CardTitle>Carrinho</CardTitle>
        </CardHeader>
        {cart.length === 0 ? (
          <CardContent>
            <p>Seu carrinho está vazio</p>
          </CardContent>
        ) : (
          <div className="space-y-4">
            {cart.map(item => (
              <CardContent key={item.id}>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="font-bold">{state.venue?.currency}{item.price?.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <QuantityButton
                      primaryColor={primaryColor}
                      handleClick={removeFromCart}
                      icon={<MinusIcon />}
                      item={item} 
                      testId={'minus'}/>
                    <span>{item.quantity}</span>
                    <QuantityButton
                      primaryColor={primaryColor}
                      handleClick={addToCart}
                      icon={<PlusIcon />}
                      item={item} 
                      testId={'plus'}/>
                  </div>
                </div>
              </CardContent>
            ))}
            <div>
              <CardHeader className="bg-[#F8F9FA] border-b">
                <CardTitle>Subtotal</CardTitle>
                <p>{state.venue?.currency}{subtotal.toFixed(2)}</p>
              </CardHeader>
              <CardHeader className="bg-[#F8F9FA]">
                <CardTitle>Total</CardTitle>
                <p>{state.venue?.currency}{total.toFixed(2)}</p>
              </CardHeader>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
}
