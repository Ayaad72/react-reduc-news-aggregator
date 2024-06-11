import React, { useContext } from "react";
import { Input } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import ArticlesContext from "../contexts/articles_contexts";

const { Search } = Input;

const CustomSearch = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";
  const { setSearchValue, setFilterButtonValue } = useContext(ArticlesContext);

  const handleSearch = (value) => {
    setSearchValue(value);
    setFilterButtonValue(value);
    navigate("/search");
  };

  return (
    <SearchWrapper isHome={isHome}>
      <StyledSearch
        placeholder="Search for free news"
        onSearch={handleSearch}
      />
    </SearchWrapper>
  );
};

export default CustomSearch;

const StyledSearch = styled(Search)`
  input {
    padding: 15px;
    &::placeholder {
      color: #0000009e;
      font-size: 18px;
      font-weight: 500;
      @media (max-width: 768px) {
        font-size: 14px;
        font-weight: 500;
      }
    }
    @media (max-width: 768px) {
      padding: 8px;
      font-size: 16px;
    }
  }
  .ant-input-group-addon {
    button {
      padding: 10px;
      box-sizing: content-box;
      height: 52px !important;
      @media (max-width: 768px) {
        height: 41px !important;
        padding: 2px;
      }
    }
  }
`;

const SearchWrapper = styled.div`
  width: ${(props) => (props.isHome ? "100%" : "50%")};
`;
