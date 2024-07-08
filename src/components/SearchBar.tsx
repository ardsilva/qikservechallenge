import { Input } from "./ui/input";
import { SearchIcon } from "lucide-react";

interface SearchBarProps {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  search: string;
}

export function SearchBar({ setSearch, search }: SearchBarProps) {
  return (
    <div className="my-2">
      <Input
          icon={<SearchIcon/>}
          className="pr-4 py-2 w-full border rounded-md"
          name="search"
          type="text"
          placeholder="Search menu items"
          onChange={e => setSearch(e.target.value)}
          value={search}
          />
      </div>
  )
}