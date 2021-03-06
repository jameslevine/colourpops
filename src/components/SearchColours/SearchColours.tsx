import React from "react";
import styled from "styled-components";

const SearchColours = () => {
  return (
    <>
      <StyledRule />
      <Container>
        <InputContainer>
          <StyledLabel htmlFor="search-bar">Search</StyledLabel>
          <StyledInput placeholder="Search here..." id="search-bar" />
        </InputContainer>
        <StyledButton>&#128269;</StyledButton>
      </Container>
      <StyledDropdownContainer>
        <StyledDropdown>
          <option>Select:</option>
          <option>Hello</option>
          <option>Hello</option>
          <option>Hello</option>
          <option>Hello</option>
          <option>Hello</option>
        </StyledDropdown>
        <StyledDropdown>
          <option>Select:</option>
          <option>Hello</option>
          <option>Hello</option>
          <option>Hello</option>
          <option>Hello</option>
          <option>Hello</option>
        </StyledDropdown>
        <StyledDropdown>
          <option>Select:</option>
          <option>Hello</option>
          <option>Hello</option>
          <option>Hello</option>
          <option>Hello</option>
        </StyledDropdown>
      </StyledDropdownContainer>
    </>
  );
};

export default SearchColours;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  width: 100%;
  height: 150px;
  background-color: grey;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledLabel = styled.label`
  font-size: 15px;
`;

const StyledRule = styled.hr`
  width: 50%;
  border-top: 2px solid black;
`;

const StyledInput = styled.input`
  width: 300px;
  height: 25px;
  margin-right: 10px;
  padding: 10px;
  font-size: 15px;
  border: 0;
`;

const StyledButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: white;
`;

const StyledDropdown = styled.select`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 40px;
  margin-right: 20px;
  background-color: white;
`;

const StyledDropdownContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-bottom: 50px;
  background-color: grey;
`;
