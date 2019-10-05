import React from "react";
import styled from "styled-components";

const AddColourForm = () => {
  return (
    <>
      <StyledRule />
      <form action="/postcolour" method="post">
        <Container>
          <InputContainer>
            <StyledLabel htmlFor="colour-name">Colour Name</StyledLabel>
            <StyledInput
              placeholder="Enter Colour Name"
              name="colour-name"
              id="colour-name"
            />
          </InputContainer>
          <InputContainer>
            <StyledLabel htmlFor="hex-name">Hex Code</StyledLabel>
            <StyledInput
              placeholder="Enter HEX Code"
              name="hex-name"
              id="colour-name"
            />
          </InputContainer>
          <StyledButton type="submit">+</StyledButton>
        </Container>
      </form>
    </>
  );
};

export default AddColourForm;

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
  width: 150px;
  height: 25px;
  margin-right: 10px;
  padding: 10px;
  font-size: 15px;
  border: 0;
`;

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: white;
`;
