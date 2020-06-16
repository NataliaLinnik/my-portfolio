import React from "react";
import "./App.css";
import styled from "styled-components";

let styles = {};

styles.Title = styled.div`
  font-size: 4rem;
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <styles.Title>About me</styles.Title>
        <styles.Title>Education</styles.Title>
        <styles.Title>Work expirience</styles.Title>
        <styles.Title>Skills</styles.Title>
        <styles.Title>Hobbies</styles.Title>
        <styles.Title>Let's talk</styles.Title>
      </header>
    </div>
  );
}

export default App;
