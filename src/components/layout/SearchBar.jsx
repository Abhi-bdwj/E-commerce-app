import React from "react";
import { Input } from "../ui/input";
import { Search } from "lucide-react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = React.useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query);
    }
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="relative w-96 max-w-lg mx-auto focus:outline-none">
      <Input
        type="text"
        value={query}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder="Search for products..."
        className="pl-10 pr-4 py-2 border rounded-lg shadow-sm focus:outline-none "
      />
      <Search
        name="search"
        onClick={handleSearch}
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
        size={18}
      />
    </div>
  );
};

export default SearchBar;
