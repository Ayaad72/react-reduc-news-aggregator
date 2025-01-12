import React from "react";

const ArticlesContext = React.createContext({
  searchValue: "",
  setSearchValue: () => {},
  filterButtonValue: "",
  setFilterButtonValue: () => {},
  apiName: "",
  setApiName: () => {},
});

dda default ArticlesContext;
