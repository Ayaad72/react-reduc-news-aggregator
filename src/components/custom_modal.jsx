import React from "react";
import { Divider, Modal } from "antd";
import styled from "styled-components";
import NewsImage from "../assets/news-image.jpg";

const CustomModal = ({
  isVisible,
  title,
  content,
  url,
  description,
  imageUrl,
  onOk,
  onCancel,
}) => {
  return (
    <StyledModal
      //   title={title}
      open={isVisible}
      onOk={onOk}
      onCancel={onCancel}
      footer={null}
    >
      <StyledContent>
        <a className="title-link" href={url} target="_blank" rel="noreferrer">
          <h2>{title}</h2>
        </a>
        <Divider />
        <img
          src={imageUrl || NewsImage}
          alt={title}
          style={{ width: "100%" }}
        />
        <Divider />
        <p>{description}</p>
        <p>
          {content}
          &nbsp;{" "}
          <a href={url} target="_blank" rel="noreferrer">
            Read more...
          </a>
        </p>
      </StyledContent>
    </StyledModal>
  );
};

export default CustomModal;

const StyledModal = styled(Modal)`
  width: 70% !important;
  .ant-modal-body {
    width: 90%;
    margin: 0 auto;
  }
  @media (max-width: 600px) {
    width: 90% !important;
  }
`;
const StyledContent = styled.div`
  .title-link {
    color: #000;
    h2 {
      font-size: 20px;
      font-weight: 600;
    }
  }
  img {
    display: flex;
    width: 80% !important;
    margin: 0 auto;
    text-align: center;
    padding: 1rem 0 2rem 0;
    @media (max-width: 600px) {
      width: 100% !important;
    }
  }
`;
