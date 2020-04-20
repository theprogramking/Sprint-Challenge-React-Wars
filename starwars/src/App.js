import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Character from "./Character";
import { cardDeck, CardDeck } from "reactstrap";
import './App.css';

const App = () => {

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characters, setCharactersData ] = useState([]);

  useEffect(() => {axios
      .get("https://swapi.py4e.com/api/people/")
      .then(res => setCharactersData(res.data.results))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <CardDeck>
        {characters.map((i) => {
          return <Character name={i.name} height={i.height} mass={i.mass} skinColor={i.skin_color} />
        })}
      </CardDeck>
    </div>
  );

}

export default App;