import React from "react";

const ArticlesContext = React.createContext({
  searchValue: "",
  setSearchValue: () => {},
  filterButtonValue: "",
  setFilterButtonValue: () => {},
  apiName: "",
  isdfn: () => {},
});

export default ArticlesContext;
