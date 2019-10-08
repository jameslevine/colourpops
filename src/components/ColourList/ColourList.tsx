import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const ColourList = props => {
  const [data, setData] = useState([
    { id: 1, colour_name: "Blue", hex_name: "0000ff" }
  ]);
  const { dispatch } = props;
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/search");
      res
        .json()
        .then(res => {
          dispatch({
            type: "ADD_SEARCH_RESPONSE",
            payload: [...res]
          });
          setData([...res]);
        })
        .catch(err => console.log(err));
    }
    fetchData();
  }, [dispatch]);
  return (
    <>
      <StyledRule />
      <Subheading>{data.length} results</Subheading>
      {data.map(t => (
        <Container key={Math.random().toString()}>
          <TextDisplay>{t.colour_name}</TextDisplay>
          <ColourDisplay style={{ backgroundColor: "white" }}>
            {t.hex_name}
          </ColourDisplay>
          <StyledButton>-</StyledButton>
        </Container>
      ))}
    </>
  );
};

export default connect(state => state)(ColourList);

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
`;

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: white;
`;

const Subheading = styled.h3`
  font-weight: 600;
`;
