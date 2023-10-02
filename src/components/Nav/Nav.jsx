import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import style from "./nav.module.css";

export default function Nav({ onSearch }) {
  return (
    <div className={style.navbar}>
      <div className={style.links}>
        <Link to={"/home"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <button
          className={style.btnrd}
          onClick={() => {
            const charactersMax = 826 + 1;
            const numRandom = Math.floor(Math.random() * charactersMax);
            onSearch(numRandom);
          }}
        ></button>
      </div>
      <SearchBar onSearch={onSearch} />
    </div>
  );
}
