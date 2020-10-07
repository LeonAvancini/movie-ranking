import React, { createContext, useState } from "react";

const SearchContext = createContext(
  {} as {
    search: string;
    setSearch: (value: string) => void;
    searchFormatted: string;
  }
);

interface SearchProviderProps {
  children: React.ReactNode;
}
const SearchProvider = ({ children }: SearchProviderProps) => {
  const [search, setSearch] = useState("");

  const formatSearch = (value: string) => {
    const toLower = value.toLowerCase();
    const trimText = toLower.trim();
    const deleteSpaces = trimText.replace(/\s+/g, " ");
    return deleteSpaces;
  };

  const searchFormatted = formatSearch(search);
  const data = { search, setSearch, searchFormatted };
  return (
    <SearchContext.Provider value={data}>{children}</SearchContext.Provider>
  );
};

export { SearchProvider };
export default SearchContext;
