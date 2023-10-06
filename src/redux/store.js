/* eslint-disable import/first */

const { createStore, applyMiddleware, compose } = require("redux");
import rootReducer from "./reducer"
import thunk from "redux-thunk"

const composeEnhancers = (typeof window!== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))