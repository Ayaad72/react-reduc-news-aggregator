import React, { useContext } from "react";
import { Tabs } from "antd";
import CardsGrid from "./cards_grid";
import styled from "styled-components";
import ArticlesContext from "../contexts/articles_contexts";

const CustomTabs = () => {
  const { setApiName, apiName } = useContext(ArticlesContext);
  const items = [
    {
      key: "newsApi",
      label: "News Api",
      children: <CardsGrid title="New API" />,
    },
    {
      key: "newYorkTimes",
      label: "New York Times",
      children: <CardsGrid title="New York Times" />,
    },
    {
      key: "gNews",
      label: "Google News",
      children: <CardsGrid title="Google News" />,
    },
  ];
  const onChange = (key) => {
    setApiName(key);
  };
  return (
    <StyledTabs
      defaultActiveKey={apiName}
      onChange={onChange}
      type="card"
      items={items}
    />
  );
};
export default CustomTabs;

const StyledTabs = styled(Tabs)`
  .ant-tabs-nav {
    &::before {
      display: none !important;
    }
  }
  .ant-tabs-nav-wrap {
    display: flex;
    justify-content: center;
    margin: 2rem 0 1rem 0;
    .ant-tabs-nav-list {
      width: 100%;
      display: flex;
      justify-content: center;
      gap: 1rem;
      @media (max-width: 420px) {
        gap: 4px;
      }
    }
  }

  .ant-tabs-tab {
    border-radius: 20px !important;
    background: #fff;
    border: 1px solid #0000009e;
    .ant-tabs-tab-btn {
      font-size: 16px;
      font-weight: 600;
      color: #0000009e !important;
      @media (max-width: 420px) {
        font-size: 10px;
      }
    }
  }
  .ant-tabs-tab.ant-tabs-tab-active {
    background-color: #000;
    .ant-tabs-tab-btn {
      color: #fff !important;
    }
  }
`;
