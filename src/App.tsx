import React from "react";
import Header from "./components/Header/Header";
import AddColourForm from "./components/AddColourForm/AddColourForm";
import SearchColours from "./components/SearchColours/SearchColours";
import ColourList from "./components/ColourList/ColourList";

function App(): JSX.Element {
  return (
    <>
      <Header />
      <AddColourForm />
      <SearchColours />
      <ColourList />
    </>
  );
}

export default App;
