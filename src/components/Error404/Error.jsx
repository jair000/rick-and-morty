import { Link } from "react-router-dom";
import style from "./Error.module.css";

export default function Error() {
  return (
    <div className="background-img">
      <div className={style.wrapper}>
        <div className="img-wrapper">
          <span>44</span>
        </div>
        <p>
          La página que estás intentando buscar <br /> se mudó a otro universo.
        </p>
        <Link to={"/"} className={style.btn}>
          VAMOS A CASA
        </Link>
      </div>
    </div>
  );
}
