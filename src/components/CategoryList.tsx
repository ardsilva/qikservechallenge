import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { CSSProperties } from 'react';

interface CustomCSSProperties extends CSSProperties {
  '--tw-ring-shadow'?: string;
}

interface Category {
  id: number;
  name: string;
  images: { image: string }[];
}

interface CategoryListProps {
  state: { menuItems: Category[] };
  activeCategory: string | null;
  handleAvatarClick: (categoryName: string | null) => void;
  webSettings: { primaryColour: string };
}

export default function CategoryList({ state, activeCategory, handleAvatarClick, webSettings }: CategoryListProps) {
  return (
    <div className="flex items-center mb-4 space-x-4 gap-6">
      {state.menuItems.map(avatar => {
        const lowerName = String(avatar.name).toLowerCase();
        const ringShadowStyle: CustomCSSProperties = {
          '--tw-ring-shadow': `var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) ${webSettings.primaryColour}`
        };
        return (
          <div
            key={avatar.id}
            className="text-center cursor-pointer"
            onClick={() => handleAvatarClick(lowerName)}
          >
            <div
              className={`relative mx-auto rounded-full overflow-hidden ${
                activeCategory === lowerName ? 'ring-2 ring-offset-2' : ''
              }`}
              style={{
                width: '80px',
                height: '80px',
                ...ringShadowStyle,
              }}
            >
              <Avatar className="w-full h-full">
                <AvatarImage
                  src={avatar.images[0].image}
                  className="w-full h-full object-cover"
                  alt={avatar.name}
                />
                <AvatarFallback>AF</AvatarFallback>
              </Avatar>
            </div>
            <p className={`${activeCategory === lowerName ? 'font-bold border-gray-800 underline' : ''}`}>
              {avatar.name}
            </p>
          </div>
        );
      })}
    </div>
  );
}
