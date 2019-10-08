import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const SearchColours = props => {
  const fetchDataFunc = async () => {
    try {
      const res = await fetch(`/query?search=${props.colours.searchString}`);
      if (res.ok) {
        const okResponse = await res.json();
        props.dispatch({
          type: "ADD_SEARCH_RESPONSE",
          payload: [...okResponse]
        });
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <StyledRule />
      <Container>
        <InputContainer>
          <StyledLabel htmlFor="search-bar">Search</StyledLabel>
          <StyledInput
            placeholder="Search here..."
            id="search-bar"
            value={props.colours.searchString}
            onChange={e => {
              props.dispatch({
                type: "SEARCH_STRING",
                payload: e.target.value
              });
            }}
          />
        </InputContainer>
        <StyledButton onClick={fetchDataFunc}>&#128269;</StyledButton>
      </Container>
    </>
  );
};

export default connect(state => state)(SearchColours);

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

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: white;
`;
