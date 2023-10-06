import { REMOVE_FAV, ADD_FAV } from "./action-types";

export const addFav = payload => {
  return {
  type: ADD_FAV,
  payload,
}};

export const removeFav = payload => ({
  type: REMOVE_FAV,
  payload,
});
