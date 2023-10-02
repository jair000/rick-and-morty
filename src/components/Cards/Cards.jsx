import Card from "../Card/Card";
import style from "./Cards.module.css";

export default function Cards({ characters, onClose }) {
  return (
    <div className={style.contenedorCards}>
      {characters.map(pj => {
        return <Card key={pj.id} pj={pj} onClose={onClose} />;
      })}
    </div>
  );
}
