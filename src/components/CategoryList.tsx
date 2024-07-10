import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

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
    <div className="flex items-center mb-4 space-x-4">
      {state.menuItems.map(avatar => {
        const lowerName = String(avatar.name).toLowerCase();
        return (
          <div key={avatar.id} className="text-center cursor-pointer" onClick={() => handleAvatarClick(lowerName)}>
            <Avatar style={{ border: `${activeCategory === lowerName ? `2px solid ${webSettings.primaryColour}` : "none"}` }} className="mx-auto rounded-full">
              <AvatarImage src={avatar.images[0].image} />
              <AvatarFallback>AF</AvatarFallback>
            </Avatar>
            <p className={`${activeCategory === lowerName ? "font-bold border-gray-800 underline" : ""}`}>{avatar.name}</p>
          </div>
        );
      })}
    </div>
  )
}

