import React from "react";
import NavBar from "./NavBar";
import Routes from "./routes";
import { Container } from "reactstrap";

function App() {
  return (
    <Container className="App">
      <NavBar></NavBar>
      <Routes></Routes>
    </Container>
  );
}

export default App;
