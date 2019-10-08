const initialState = {
  list: [],
  response: "",
  searchString: ""
};

function addColour(state, action) {
  return {
    list: [...state.list, action.payload]
  };
}

function addSearchResponse(state, action) {
  return {
    response: action.payload
  };
}

function searchString(state, action) {
  return {
    searchString: action.payload
  };
}

const actions = {
  ADD_COLOUR: addColour,
  ADD_SEARCH_RESPONSE: addSearchResponse,
  SEARCH_STRING: searchString
};

export default {
  initialState,
  actions
};
