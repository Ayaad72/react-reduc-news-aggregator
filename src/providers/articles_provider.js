import React, { useState } from "react";
import ArticlesContext from "../contexts/articles_contexts";

const ArticlesProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");
  const [filterButtonValue, setFilterButtonValue] = useState("All");
  const [apiName, setApiName] = useState("newYorkTimes");

  return (
    <ArticlesContext.Provider
      value={{
        searchValue,
        setSearchValue,
        filterButtonValue,
        setFilterButtonValue,
        apiName,
        setApiName,
      }}
    >
      {children}
    </ArticlesContext.Provider>
  );
};

export default ArticlesProvider;
