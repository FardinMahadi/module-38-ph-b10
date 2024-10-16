import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./Todo";

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Todo task="Learn React" isDone={true} />
      <Todo task="Explore Core Concepts" isDone={false} />
      <Todo task="Try JSX" isDone={true} />
      {/* <Device name="Laptop" price="55" />
      <Device name="Mobile" price="32" />
      <Device name="Tablet" price="98" />
      <Person />
      <Student grade="7" score="99" />
      <Student grade="8" score="44" />
      <Student grade={12} score="33" />
      <Student />
      <Developer /> */}
    </>
  );
}

function Device({ name, price }) {
  return (
    <h2>
      This device: {name} <br /> Price: {price}
    </h2>
  );
}

function Person() {
  const age = 25;
  const money = 20;
  const person = { name: "Fardin", age: 20 };
  return (
    <h3>
      I am {person.name} with age: {age + money}
    </h3>
  );
}

function Student({ grade = 1, score = 0 }) {
  return (
    <div className="student">
      <h3>This is a student</h3>
      <p>Class: {grade}</p>
      <p>Score: {score}</p>
    </div>
  );
}

function Developer() {
  const deveploperStyle = {
    margin: "20px",
    padding: "20px",
    border: "2px solid purple",
    borderRadius: "20px",
  };

  return (
    <div style={deveploperStyle}>
      <h5>Devo devo</h5>
      <p>Coding: </p>
    </div>
  );
}

export default App;
