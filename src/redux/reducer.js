/* eslint-disable array-callback-return */
/* eslint-disable import/no-anonymous-default-export */
import { ADD_FAV, REMOVE_FAV } from "./action-types";

const initialState = {
  myFavorites: [],
};

export default (state = initialState, { type, payload }) => {
  const numPayload = Number(payload);

  switch (type) {
    case ADD_FAV:
      return { myFavorites: [...state.myFavorites, payload] };
    case REMOVE_FAV:
      const newArray = state.myFavorites.filter(char => {
        return char.id !== numPayload;
      });
      return { myFavorites: newArray };
    default:
      return state;
  }
};
