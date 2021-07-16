import React from "react";
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

const fiftyFifty = Math.random() < 0.5;

class TonightsPlan extends React.Component {
  
  render() {
    let plan;
    if (fiftyFifty) {
      plan = "out";
    } else {
      plan = "to bed"
    }
  
    return <h1>Tonight I'm going {plan} WOOO</h1>;
  }  
}

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
        <PrimaryBox></PrimaryBox>
        <TonightsPlan />
        <Friend />
      </header>
      
    </div>
  );
}

export default App;
