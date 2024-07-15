import { useTranslation } from "react-i18next";
import { Input } from "./ui/input";
import { SearchIcon } from "lucide-react";

interface SearchBarProps {
  setSearch: (value: string) => void;
  search: string;
}

export default function SearchBar({ setSearch, search }: SearchBarProps) {
  const { t } = useTranslation();
  return (
    <div className="my-2">
      <Input
        icon={<SearchIcon />}
        className="pr-4 py-2 w-full border rounded-md"
        name="search"
        type="text"
        placeholder={t("Search menu items")}
        onChange={e => setSearch(e.target.value)}
        value={search}
      />
    </div>
  )
}