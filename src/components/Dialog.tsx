import {
  Dialog as DialogComponent,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from '@/components/ui/dialog';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Items, ModifiersItems } from '@/types';
import { useState } from 'react';
import { useAppContext } from '@/context/AppContext';
import QuantityButton from './QuantityButton';
import { MinusIcon, PlusIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';


interface DialogProps {
  showDialog: boolean;
  setShowDialog: (open: boolean) => void;
  modifiers?: Items | undefined;
  selectedValue: string;
  setSelectedValue: (value: string) => void;
  meatQuantity: number;
  setMeatQuantity: (arg0: Items | number) => void;
  handleAddToCart: (item: Items) => void;
  children?: React.ReactNode;
}

export default function Dialog({
  showDialog,
  setShowDialog,
  modifiers,
  selectedValue,
  setSelectedValue,
  meatQuantity,
  setMeatQuantity,
  handleAddToCart,
  children,
}: DialogProps) {
  const { state } = useAppContext();
  const { t } = useTranslation();

  const currency: string | undefined = state.venue?.currency;
  const primaryColor: string | undefined = state.venue?.webSettings?.primaryColour;

  const [itemSelected, setItemSelected] = useState<ModifiersItems>();

  function addOrder(handleAddToCart: (item: Items) => void, modifiers: Items): void {
    const newItem: Items = {
      ...modifiers,
      quantity: meatQuantity,
      price: (itemSelected?.price as number),
    }
    handleAddToCart(newItem);
  }

  function getPrice(modifierPrice: number | undefined, meatQuantity: number, currency: string) {
    if (modifierPrice && modifierPrice > 0) {
      return `${t(currency)}${modifierPrice * meatQuantity}`
    }
    return '';
  }

  return (
    <DialogComponent open={showDialog} onOpenChange={setShowDialog}>
      {modifiers ? (
        <DialogContent className="sm:max-w-[350px]">
          <img src={modifiers?.images[0].image} alt={modifiers?.name} />
          <DialogHeader>
            <DialogTitle>{modifiers?.name}</DialogTitle>
            <DialogDescription>{modifiers?.description}</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            {modifiers?.modifiers?.map(it => it.items).flat().map(modifierItem => {
              const id = String(modifierItem.id);
              return (
                <RadioGroup
                  key={id}
                  value={selectedValue}
                  onValueChange={(value) => { setItemSelected(modifierItem); setSelectedValue(value); }}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value={id} id={id} />
                    <Label htmlFor={id}>{`${t(modifierItem.name)} - ${t(currency as string)}${modifierItem.price}`}</Label>
                  </div>
                </RadioGroup>
              );
            })}
            <div className="grid grid-cols-[1fr_auto] items-center gap-4">
              <div className="flex items-center space-x-2">
                <QuantityButton
                  handleClick={setMeatQuantity}
                  icon={<MinusIcon />}
                  item={meatQuantity - 1}
                  primaryColor={primaryColor}
                  disabled={!selectedValue || itemSelected?.maxChoices === meatQuantity}
                />
                <span>{meatQuantity}</span>
                <QuantityButton
                  handleClick={setMeatQuantity}
                  icon={<PlusIcon />}
                  item={meatQuantity + 1}
                  primaryColor={primaryColor}
                  disabled={!selectedValue || itemSelected?.maxChoices === meatQuantity}
                />
              </div>
            </div>
            <Button
              style={{ backgroundColor: primaryColor }}
              onClick={() => addOrder(handleAddToCart, (modifiers as Items))}
              disabled={!selectedValue}>
              {`Add to order - ${getPrice(itemSelected?.price, meatQuantity, (currency as string))}`}
            </Button>
          </div>
        </DialogContent>
      ) : (
        <div className='h-full'>
          <DialogContent className="sm:max-w-[350px] h-full">
            {children}
          </DialogContent>
        </div>
      )}
    </DialogComponent>
  );
}
