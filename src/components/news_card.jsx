import React, { useState } from "react";
import { Card, Tooltip } from "antd";
import styled from "styled-components";
import NewsImage from "../assets/news-image.jpg";

const { Meta } = Card;

const NewsCard = ({
  imageUrl,
  title,
  description,
  onClick,
  url,
  sourceName,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => setIsLoading(false);
  return (
    <StyledCard
      hoverable
      cover={
        <StyledImage
          style={{ visibility: isLoading ? "hidden" : "visible" }}
          alt="new-image"
          src={imageUrl || NewsImage}
          onLoad={handleImageLoad}
        />
      }
      onClick={onClick}
    >
      <p className="source">{sourceName}</p>
      <Meta
        title={<Tooltip title={title}>{title}</Tooltip>}
        description={<EllipsisText>{description}</EllipsisText>}
      />
    </StyledCard>
  );
};

export default NewsCard;

const StyledCard = styled(Card)`
  .ant-card {
    width: 100%;
  }
  .ant-card-cover {
    max-height: 200px;
    overflow: hidden;
  }
  .source {
    margin-bottom: 5px;
    font-size: 12px;
    font-weight: 600;
    color: #2c343e;
  }
`;

const EllipsisText = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 4.5em;
  line-height: 1.5em;
`;
const StyledImage = styled.img``;
