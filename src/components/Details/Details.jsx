import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./details.module.css";

export default function Details() {
  const [character, setCharacter] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  return (
    <div className={style.detailsContenedor}>
      <div className={style.descriptionCharacter}>
        <h1>👻 {character.name} 🤠</h1>
        <h3>STATUS | {character.status} 🤍</h3>
        <h3>GENDER | {character.gender} 🧐</h3>
        <h3>SPECIE | {character.species} 🤖</h3>
        <h3>ORIGIN | {character.origin && character.origin.name} 🐱‍🐉</h3>
      </div>
      <div className={style.imgCharacter}>
        <img src={character.image} alt={character.name} />
      </div>
    </div>
  );
}
