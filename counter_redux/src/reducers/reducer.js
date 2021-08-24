import * as actionTypes from "../actions/actions";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case actionTypes.DECREMENT:
      return { ...state, counter: state.counter - 1 };
    case actionTypes.RESET:
      return { ...state, counter: 0 };
    case actionTypes.INCREMENTFIVE:
      return { ...state, counter: state.counter + action.value };
    case actionTypes.DECREMENTFIVE:
      return { ...state, counter: state.counter - action.value };
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: state.counter }),
      };
    case actionTypes.DELETE_RESULT:
      const updatedArray = state.results.filter(
        (item) => item.id !== action.item
      );
      return {
        ...state,
        results: updatedArray,
      };
  }
  return state;
};

const initialState = {
  counter: 0,
  results: [
    {
      id: 1,
      value: 10,
    },
    {
      id: 2,
      value: 15,
    },
    {
      id: 3,
      value: 20,
    },
  ],
};

export default reducer;
