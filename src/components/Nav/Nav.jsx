import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import style from "./nav.module.css";

export default function Nav({ onSearch, setAccess }) {
  return (
    <div className={style.navbar}>
      <div className={style.links}>
        <Link to={"/home"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/favorites"}>Favorites</Link>
        <button
          className={style.logout}
          onClick={() => {
            setAccess(false);
          }}
        >
          🚪 Logout
        </button>
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
