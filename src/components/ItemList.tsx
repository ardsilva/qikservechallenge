import { ChevronUp } from 'lucide-react';
import { Items, ModifiersItems, State } from '@/types';
import { useTranslation } from 'react-i18next';

interface ItemListProps {
  state: State;
  activeCategory: string | null;
  handleItemClick: (item: ModifiersItems) => void;
  search: string;
  getFiltered: (items: Items[], search: string) => Items[];
  cart: Items[];
  webSettings: { primaryColour: string };
  handleAvatarClick: (categoryName: string | null) => void;
}

export default function ItemList({
  state,
  activeCategory,
  handleItemClick,
  search,
  getFiltered,
  cart,
  webSettings,
  handleAvatarClick
}: ItemListProps) {
  const { t } = useTranslation();
  return (
    <div className="space-y-4">
      {state.menuItems.map(menuSection => {
        const lowerName = String(menuSection.name).toLowerCase();
        const isActive = activeCategory === null || activeCategory === lowerName;
        return (
          <div key={menuSection.id} onClick={() => handleAvatarClick(lowerName)}>
            <div className="flex justify-between items-center mb-2 cursor-pointer">
              <h2 className="text-lg font-semibold">{t(`${menuSection.name}`)}</h2>
              <ChevronUp
                className={`h-5 w-5 text-gray-400 transition-transform ${isActive ? '' : 'rotate-180'}`} />
            </div>
            {isActive && (
              <div className="space-y-2">
                {getFiltered(menuSection.items, search).map(item => (
                  <div
                    key={item.id}
                    className="flex items-center cursor-pointer"
                    onClick={() => handleItemClick({ ...item, category: lowerName, quantity: 1, maxChoices: 1 })}>
                    <div className="flex-1">
                      <div className="flex gap-1">
                        <div style={{ backgroundColor: webSettings.primaryColour }}
                          className={`${cart.find(cartItem => cartItem.id === item.id)?.quantity ? `text-white flex justify-center font-bold w-6 h-6` : ""}`}>
                          {cart.find(cartItem => cartItem.id === item.id)?.quantity ?? ''}
                        </div>
                        <h3 className="font-semibold">{item.name}</h3>
                      </div>
                      <p>{item.description}</p>
                      <p className="font-bold">{`${t(state.venue?.currency as string)}${item.price.toFixed(2)}`}</p>
                    </div>
                    {item.images && <img src={item.images[0].image} alt={item.name} className="w-16 h-16 rounded-md" />}
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  )
}

