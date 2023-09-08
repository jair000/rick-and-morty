/* eslint-disable eqeqeq */
/* eslint-disable array-callback-return */
import { useState } from "react";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav.jsx";
import axios from "axios";

function App() {
  const [characters, setCharacters] = useState([]);

  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          characters.map(character => {
            if (character.id == id) {
              return window.alert("personaje repetido");
            }
          });
          setCharacters(oldChars => [...oldChars, data]);
        } else {
          window.alert("No hay personajes con esta ID!");
        }
      }
    );
  }

  const onClose = id => {
    const numID = parseInt(id);
    const charactersUpdated = characters.filter(
      character => character.id !== numID
    );
    setCharacters(charactersUpdated);
  };

  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      <Cards characters={characters} onClose={onClose} />
    </div>
  );
}

export default App;
