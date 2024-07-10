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
import { Items } from '@/types';


interface DialogProps {
  showDialog: boolean;
  setShowDialog: (open: boolean) => void;
  modifiers: Items | undefined;
  selectedValue: string | undefined;
  setSelectedValue: (value: string) => void;
  meatQuantity: number;
  setMeatQuantity: (quantity: number) => void;
  handleAddToCart: () => void;
  webSettings: { primaryColour: string };
}

export default function Dialog({ showDialog,
  setShowDialog,
  modifiers,
  selectedValue,
  setSelectedValue,
  meatQuantity,
  setMeatQuantity,
  handleAddToCart,
  webSettings
}: DialogProps) {
  return (
    <DialogComponent open={showDialog} onOpenChange={setShowDialog}>
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
                onValueChange={setSelectedValue}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value={id} id={id} />
                  <Label htmlFor={id}>{modifierItem.name} - {modifierItem.price}</Label>
                </div>
              </RadioGroup>
            );
          })}
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
              <Button
                variant="outline"
                size="sm"
                onClick={() => setMeatQuantity(meatQuantity + 1)}>
                +
              </Button>
            </div>
          </div>
          <Button
            style={{ backgroundColor: webSettings.primaryColour }}
            onClick={handleAddToCart}>Add to Cart</Button>
        </div>
      </DialogContent>
    </DialogComponent>
  );
}
