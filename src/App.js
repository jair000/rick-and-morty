import { useState } from "react";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import About from "./components/About/About.jsx";
import Details from "./components/Details/Details.jsx";
import Error from "./components/Error404/Error.jsx";

function App() {
  const [characters, setCharacters] = useState([]);

  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
        if (data.name) {
          const buscarPersonaje = characters.find(
            character => character.id === data.id
          );
          if (!buscarPersonaje) setCharacters(oldChars => [...oldChars, data]);
          else window.alert("¡El personaje ya existe!");
        }
      })
      .catch(() => {
        return window.alert("No hay personajes con esta ID!");
      });
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
      <Routes>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Details />} />
        {/* Error 404 */}
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
