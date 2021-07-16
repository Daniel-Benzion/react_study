import React from "react";
import logo from './logo.svg';
import './App.css';
import PrimaryBox from './PrimaryBox.jsx'

const friends = [
  {
    title: "Yummmmmmm",
    src: "https://content.codecademy.com/courses/React/react_photo-monkeyweirdo.jpg"
  },
  {
    title: "Hey Guys!  Wait Up!",
    src: "https://content.codecademy.com/courses/React/react_photo-earnestfrog.jpg"
  },
  {
    title: "Yikes",
    src: "https://content.codecademy.com/courses/React/react_photo-alpaca.jpg"
  }
];

class Friend extends React.Component {

  render() {
    let friend = friends[0];
    return (
      <div>
        <h1>{friend.title}</h1>
        <img src={friend.src} alt={friend.title}/>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <PrimaryBox></PrimaryBox>
        <Friend />
      </header>
      
    </div>
  );
}

export default App;
