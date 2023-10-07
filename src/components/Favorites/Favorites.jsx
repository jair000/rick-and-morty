import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../Card/Card";
import { removeFav } from "../../redux/actions";
import { orderCards, filterCards } from "../../redux/actions";

const Favorites = () => {
  const dispatch = useDispatch();
  const myFavorites = useSelector((state) => state.myFavorites);
  const [order, setOrder] = useState("A"); 
  const [filter, setFilter] = useState("");
  const [aux, setAux] = useState(false);

  const removeFromFavorites = (id) => {
    dispatch(removeFav(id));
  };

  const handleOrder = (e) => {
    const selectedOrder = e.target.value;
    setOrder(selectedOrder);
    dispatch(orderCards(selectedOrder));
    setAux(!aux);
  };

  const handleFilter = (e) => {
    const selectedFilter = e.target.value;
    setFilter(selectedFilter);

    if (selectedFilter === "") {
      dispatch(filterCards(null));
    } else {
      dispatch(filterCards(selectedFilter));
    }
  };

  return (
    <div>
      <h1>Mis Personajes Favoritos</h1>
      {/* Selectores de ordenamiento y filtro */}
      <div>
        <label>Ordenar por:</label>
        <select value={order} onChange={handleOrder}>
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>
      </div>
      <div>
        <label>Filtrar por género:</label>
        <select value={filter} onChange={handleFilter}>
          <option value="">Todos</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>

      {/* Lista de personajes favoritos */}
      {myFavorites.map((favorite) => (
        <Card
          key={favorite.id}
          pj={favorite}
          removeFromFavorites={removeFromFavorites}
        />
      ))}
    </div>
  );
};

export default Favorites;
