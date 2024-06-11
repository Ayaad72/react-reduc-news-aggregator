// src/contexts/ArticlesContext.js
import React from "react";

const ArticlesContext = React.createContext({
  searchValue: "",
  setSearchValue: () => {},
  filterButtonValue: "",
  setFilterButtonValue: () => {},
  apiName: "",
  setApiName: () => {},
});

export default ArticlesContext;
