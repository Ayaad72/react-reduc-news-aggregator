import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import NewsCard from "./news_card";
import { Card } from "antd";
import CustomModal from "../components/custom_modal";

const CardsGrid = ({ title }) => {
  const articles = useSelector((state) => state.articles.items);

  const status = useSelector((state) => state.articles.status);

  const placeholderCount = 20;
  const [visible, setVisible] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const showModal = (item) => {
    setModalContent(item);
    setVisible(true);
  };

  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <GridContainer>
      <h2>{title}</h2>
      <StyledGrid>
        {status === "loading"
          ? Array.from({ length: placeholderCount }, (_, index) => (
              <StyledCard
                key={index}
                style={{ width: "100%", marginTop: 16 }}
                loading={true}
              />
            ))
          : articles?.map((item) => (
              <NewsCard
                key={item.key}
                imageUrl={item.urlToImage}
                url={item.url}
                title={item.title}
                description={item.description}
                sourceName={item.source}
                onClick={(event) => {
                  event.stopPropagation();
                  showModal(item);
                }}
              />
            ))}
      </StyledGrid>
      <CustomModal
        isVisible={visible}
        title={modalContent.title}
        imageUrl={modalContent.urlToImage}
        url={modalContent.url}
        content={modalContent.content}
        description={modalContent.description}
        onOk={handleOk}
        onCancel={handleCancel}
      />
    </GridContainer>
  );
};

export default CardsGrid;

const GridContainer = styled.div`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 0;
  color: #2c343e;
  fill: #2c343e;
  line-height: 53px;
  text-transform: capitalize;
  @media (max-width: 768px) {
    font-size: 28px;
    line-height: 43px;
  }
  h2 {
    @media (max-width: 768px) {
      font-size: 32px;
      line-height: 28px;
      font-weight: 500;
    }
  }
`;
const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 20px;
  padding: 20px 0;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;
const StyledCard = styled(Card)`
  width: 100%;
  height: 300px;
  padding-top: 7rem;
  margin-top: 16px;
`;
