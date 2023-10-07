import { REMOVE_FAV, ADD_FAV, FILTER, ORDER } from "./action-types";

export const addFav = payload => {
  return {
  type: ADD_FAV,
  payload,
}};

export const removeFav = payload => ({
  type: REMOVE_FAV,
  payload,
});

export const filterCards = (gender) => {
  return {
    type: FILTER,
    payload: gender,
  };
};

export const orderCards = (order) => {
  return {
    type: ORDER,
    payload: order,
  };
};