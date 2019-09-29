import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import colourStoreConfig from "./reducers/colours";

//creates a new reducer
// Requires the initial state, and the list of actions

const createReducer = (initialState, handlers) => {
  return (state = initialState, action) => {
    return (
      (handlers[action.type] && handlers[action.type](state, action)) || state
    );
  };
};

// Creating the cat reducer

const colourReducers = createReducer(
  colourStoreConfig.initialState,
  colourStoreConfig.actions
);

// combines reducers into one

const rootReducer = combineReducers({
  colours: colourReducers
});

// create Redux store and export
export default createStore(rootReducer, composeWithDevTools());
