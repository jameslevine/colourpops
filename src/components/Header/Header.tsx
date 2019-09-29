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
  margin: 0;
  font-size: 20px;
`;

const Title = styled.h1`
  font-size: 20px;
`;

export default Header;
