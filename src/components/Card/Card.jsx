import { Link } from "react-router-dom";
import { Carta, BtnX, Live, Img, NameStyle } from "./CardCss";
import style from "./Card.module.css";

export default function Card({ pj, onClose }) {
  return (
    <Carta id={pj.id}>
      <BtnX onClick={() => onClose(pj.id)}>X</BtnX>
      <div className={style.imgContainer}>
        <Img src={pj.image} alt={pj.name} />
      </div>
      <div className={style.details}>
        <Live>{pj.status}</Live>
        <NameStyle>
          <Link to={`/detail/${pj.id}`}>{pj.name}</Link>
        </NameStyle>
        <div className={style.description}>
          <h4>{pj.species}</h4>
          <h4>{pj.gender}</h4>
          <h4>{pj.origin.name}</h4>
        </div>
      </div>
    </Carta>
  );
}
