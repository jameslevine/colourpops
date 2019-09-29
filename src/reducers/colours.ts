const initialState = {
  list: []
};

function addColour(state, action) {
  return {
    list: [...state.list, action.payload]
  };
}

const actions = {
  ADD_COLOUR: addColour
};

export default {
  initialState,
  actions
};
