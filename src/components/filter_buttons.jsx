import React, { useContext, useRef } from "react";
import styled from "styled-components";
import { CaretRightOutlined, CaretLeftOutlined } from "@ant-design/icons";
import { Button } from "antd";
import ArticlesContext from "../contexts/articles_contexts";

const FilterButtons = () => {
  const { filterButtonValue, setFilterButtonValue } =
    useContext(ArticlesContext);
  const scrollRef = useRef(null);

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 1000;
    }
  };
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 1000;
    }
  };

  return (
    <StyledButtonsWrapper>
      <div className="scroll-arrow left-arrow" onClick={scrollLeft}>
        <CaretLeftOutlined />
      </div>
      <div className="scrollable-buttons" ref={scrollRef}>
        {[
          { key: 0, title: "All" },
          { key: 1, title: "Business" },
          { key: 2, title: "Entertainment" },
          { key: 3, title: "General" },
          { key: 4, title: "Health" },
          { key: 5, title: "Science" },
          { key: 6, title: "Sports" },
          { key: 7, title: "Technology" },
          { key: 8, title: "Press releases" },
        ].map((item) => (
          <Button
            key={item.key}
            type="primary"
            onClick={() => setFilterButtonValue(item.title)}
            style={{
              backgroundColor:
                filterButtonValue.toLowerCase() === item.title.toLowerCase()
                  ? "#ffc864"
                  : "#fff",
              borderColor:
                filterButtonValue.toLowerCase() === item.title.toLowerCase()
                  ? "#ffc864"
                  : "#00000030",
              color:
                filterButtonValue.toLowerCase() === item.title.toLowerCase()
                  ? "#000"
                  : "#000",
            }}
          >
            {item.title}
          </Button>
        ))}
      </div>
      <div className="scroll-arrow right-arrow" onClick={scrollRight}>
        <CaretRightOutlined />
      </div>
    </StyledButtonsWrapper>
  );
};

export default FilterButtons;

const StyledButtonsWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 1.5rem;

  .scrollable-buttons {
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 12px;
    overflow-x: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  .scroll-arrow {
    display: none;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    align-items: center;
    justify-content: center;
    padding: 0 0 0 8px;
    font-size: 24px;
    color: #ccc;
    cursor: pointer;
    @media (max-width: 1300px) {
      display: flex;
    }
  }
  .right-arrow {
    right: 0;
    top: 0;
    bottom: 0;
    background: linear-gradient(270deg, #fff 0, hsla(0, 0%, 100%, 0));
  }
  .left-arrow {
    left: -10px;
    top: 0;
    right: auto;
    bottom: 0;
    z-index: 2;
    background: linear-gradient(90deg, #fff 0, hsla(0, 0%, 100%, 0));
  }

  button {
    border: 1px solid #00000030;
    box-shadow: none;
    transition: background-color 0.3s, color 0.3s;
    height: 44px;
    padding: 4px 28px;
    font-weight: 600;
  }

  :where(.css-dev-only-do-not-override-kghr11).ant-btn-primary:not(
      :disabled
    ):hover {
    background: #ffc864 !important;
    border-color: #ffc864 !important;
  }
`;
