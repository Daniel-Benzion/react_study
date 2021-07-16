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

class Button extends React.Component {
  scream() {
    alert('AAAAAAAAHHH!!!!!');
  }

  render() {
    return <button onClick={this.scream}>AAAAAH!</button>;
  }
}

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: 'swordfish',
      authorized: false
    };
    this.authorize = this.authorize.bind(this);
  }

  authorize(e) {
    const password = e.target.querySelector(
      'input[type="password"]').value;
    const auth = password == this.state.password;
    this.setState({
      authorized: auth
    });
  }

  render() {

    const login = (
      <form action="#">
        <input type="password" placeholder="password"></input>
        <input type="submit"></input>
      </form>
    );

    const contactInfo = (
      <ul>
          <li>
            client@example.com
          </li>
          <li>
            555.555.5555
          </li>
        </ul>
    );

    return (
      <div id="authorization">
        <h1>{this.state.authorized ? "Contact" : "Enter the Password"}</h1>
        
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PrimaryBox></PrimaryBox>
        <TonightsPlan />
        <Button />
        <Contact />
        <Friend />
      </header>
      
    </div>
  );
}

export default App;
