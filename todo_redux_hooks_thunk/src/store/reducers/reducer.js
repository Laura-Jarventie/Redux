import * as actionTypes from "../actions";

const initialState = {
  notes: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INIT_NOTES:
      return action.data;

    case actionTypes.ADD_TODO:
      return [...state, action.data];

    case actionTypes.TOGGLE_TODO:
      const noteToChange = state.find((n) => n.id === action.id);
      const changeNote = {
        ...noteToChange,
        completed: !noteToChange.completed,
      };
      return state.map((note) => (note.id !== action.id ? note : changeNote));

    case actionTypes.REMOVE_TODO:
      //const updateArray = state.filter((note) => note.id !== action.id);
      return state.filter((note) => note.id !== action.id);
    //return [...state, action.data];
    //return [updateArray];

    default:
      return state;
  }
};

export default reducer;
