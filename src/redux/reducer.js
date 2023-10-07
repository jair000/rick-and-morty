/* eslint-disable array-callback-return */
/* eslint-disable import/no-anonymous-default-export */
import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action-types"; // Asegúrate de importar FILTER y ORDER

const initialState = {
  myFavorites: [],
  allCharacters: [], // Agrega una propiedad para almacenar todos los personajes
};

export default (state = initialState, { type, payload }) => {
  const numPayload = Number(payload);

  switch (type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.myFavorites, payload],
        allCharacters: [...state.allCharacters, payload],
      };
    case REMOVE_FAV:
      const newArray = state.myFavorites.filter((char) => {
        return char.id !== numPayload;
      });
      return {
        ...state,
        myFavorites: newArray,
        allCharacters: newArray, // Actualiza allCharacters al eliminar un favorito
      };
    case FILTER:
      const genderToFilter = payload;
      const filteredCharacters = state.allCharacters.filter(
        (character) => character.gender === genderToFilter
      );
      return {
        ...state,
        myFavorites: filteredCharacters,
      };
    case ORDER:
      const orderType = payload;
      const sortedCharacters = [...state.myFavorites].sort((a, b) => {
        if (orderType === "A") {
          return a.id - b.id; // Orden ascendente
        } else if (orderType === "D") {
          return b.id - a.id; // Orden descendente
        }
        return 0;
      });
      return {
        ...state,
        myFavorites: sortedCharacters,
      };
    default:
      return state;
  }
};