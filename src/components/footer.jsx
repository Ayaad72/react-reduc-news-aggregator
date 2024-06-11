import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  return (
    <StyledFooterWrapper>
      <div className="container footer">
        <StyledLogo>
          <Link to="/">TNA</Link>
        </StyledLogo>
        <p>© 2024 TNA. All rights reserved | Privacy Policy</p>

        <StyledList>
          {[
            {
              key: "1",
              name: "All Filters",
              link: "/search",
            },
            {
              key: "2",
              name: isHome ? "More" : "Home",
              link: isHome ? "/search" : "/",
            },
          ].map((item) => (
            <StyledLink key={item.key}>
              <Link className={`link-${item.key}`} to={item.link}>
                {item.name}
              </Link>
            </StyledLink>
          ))}
        </StyledList>
      </div>
    </StyledFooterWrapper>
  );
};

export default Footer;

const StyledFooterWrapper = styled.div`
  background: #000;
  .footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0;
    @media (max-width: 420px) {
      justify-content: center;
    }
  }
  p {
    text-align: center;
    color: #fff;
    font-size: 12px;
    font-weight: 600;
    line-height: 30px;
    margin: 0;
    @media (max-width: 420px) {
      font-size: 10px;
      line-height: 18px;
    }
  }
`;

const StyledLogo = styled.div`
  color: #fff;
  font-weight: 600;
  font-size: 26px;
  a {
    color: #fff;
  }
  @media (max-width: 768px) {
    font-size: 20px;
  }
  @media (max-width: 420px) {
    display: none;
  }
`;
const StyledList = styled.ul`
  display: flex;
  gap: 20px;
  list-style-type: none;
  font-size: 16px;
  font-weight: 600;
  @media (max-width: 420px) {
    display: none;
  }
`;
const StyledLink = styled.li`
  a {
    color: #fff;
  }
  .link-1 {
    @media (max-width: 768px) {
      display: none;
    }
  }
`;
