import { Link } from "react-router-dom";
import { Carta, BtnX, Live, Img, NameStyle } from "./CardCss";
import style from "./Card.module.css";
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addFav, removeFav} from '../../redux/actions';

export default function Card({ pj, onClose, isFavoriteProp, removeFromFavorites }) {
  const dispatch = useDispatch()
  const myFavorites = useSelector((state) => state.myFavorites);
  const [isFavorite, setIsFavorite] = useState(isFavoriteProp);


  const handleFav = () => {
    if(isFavorite) {removeFromFavorites(pj.id)
    setIsFavorite(false)}
    else {dispatch(addFav(pj))
    setIsFavorite(true)}
  }

  useEffect(() => {
    // Comprueba si el personaje está en favoritos al cargar el componente
    const isPjFavorite = myFavorites.some((fav) => fav.id === pj.id);
    setIsFavorite(isPjFavorite);
  }, [myFavorites, pj.id]);

  return (
    <Carta id={pj.id}>
      <BtnX onClick={() => onClose(pj.id)}>X</BtnX>
      <button onClick={handleFav}>
        {isFavorite ? "❤️" : "🤍"}
      </button>
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
