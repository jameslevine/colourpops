import React from "react";
import styled from "styled-components";

const ColourList = () => {
  return (
    <>
      <StyledRule />
      <Subheading>42 results for blue</Subheading>
      <Container>
        <TextDisplay />
        <ColourDisplay />
        <StyledButton>-</StyledButton>
      </Container>
    </>
  );
};

export default ColourList;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  width: 100%;
  height: 150px;
  background-color: grey;
`;

const StyledRule = styled.hr`
  width: 50%;
  border-top: 2px solid black;
`;

const TextDisplay = styled.div`
  width: 150px;
  height: 25px;
  margin-right: 10px;
  padding: 10px;
  font-size: 15px;
  border: 0;
  background-color: white;
`;

const ColourDisplay = styled.div`
  width: 150px;
  height: 25px;
  margin-right: 10px;
  padding: 10px;
  font-size: 15px;
  border: 0;
  background-color: white;
`;

const StyledButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: white;
`;

const Subheading = styled.h3`
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: white;
`;
