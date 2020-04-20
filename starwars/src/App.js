import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Character from "./Character";
import { CardDeck } from "reactstrap";
import './App.css';

const App = () => {

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