import React from "react";
import style from "./About.module.css";
import { Link } from "react-router-dom";
import aboutimg from "./about.png";

export default function About() {
  return (
    <div className={style.About}>
      <Link to={"https://github.com/jair000"} target="_blank">
        <img src={aboutimg} alt="img-about" />
      </Link>
    </div>
  );
}
