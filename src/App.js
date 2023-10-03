/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import axios from "axios";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import About from "./components/About/About.jsx";
import Details from "./components/Details/Details.jsx";
import Error from "./components/Error404/Error.jsx";
import Form from "./components/Form/Form.jsx";

import "./app.css";
import { useEffect } from "react";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

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

  // TODO: BASE DE DATOS ARTIFICIAL----------
  const [access, setAccess] = useState(false);
  const [errLogin, setErrLogin] = useState(false);
  const email = "jairoo.andrea1204@gmail.com";
  const pass = "jairo123";

  function Login(register) {
    if (register.email === email && register.password === pass) {
      setErrLogin(false);
      setAccess(true);
      navigate("/home");
    } else {
      setErrLogin(true);
    }
  }

  useEffect(() => {
    !access && navigate("/");
  }, [access]);
  // TODO:----------------------------------

  return (
    <div className="App">
      {location.pathname !== "/" && (
        <Nav onSearch={onSearch} setAccess={setAccess} />
      )}
      <Routes>
        <Route path="/" element={<Form Login={Login} errLogin={errLogin} />} />
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
