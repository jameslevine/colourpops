import React from "react";
import Header from "./components/Header/Header";
import AddColourForm from "./components/AddColourForm/AddColourForm";
import SearchColours from "./components/SearchColours/SearchColours";

function App(): JSX.Element {
  return (
    <>
      <Header />
      <AddColourForm />
      <SearchColours />
    </>
  );
}

export default App;
