import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <StyledNavbar>
      <Title>Coco Ulors</Title>
    </StyledNavbar>
  );
};

const StyledNavbar = styled.nav`
  padding: 20px;
  font-size: 20px;
  background-color: #ffb5b5;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 20px;
  color: #525252;
`;

export default Header;
