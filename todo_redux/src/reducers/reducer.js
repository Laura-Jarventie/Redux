import * as actionTypes from "../actions/actions";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TASK:
      return {
        ...state,
        todo_list: state.todo_list.concat({
          id: new Date(),
          text: action.text,
          completed: action.completed,
        }),
      };
    case actionTypes.DONE_TASK:
      const striked = state.todo_list.map((item) => {
        return item.id === action.strikedID
          ? { ...item, complete: !item.complete }
          : { ...item };
      });
      return {
        ...state,
        todo_list: striked,
      };
    case actionTypes.REMOVE_TASK:
      const updateArray = state.todo_list.filter(
        (item) => item.id !== action.item
      );
      return {
        ...state,
        todo_list: updateArray,
      };
    default:
      return state;
  }
};
const initialState = {
  todo_list: [
    /* {
      id: 1,
      text: "some",
    },
    {
      id: 2,
      text: "text",
    },
    {
      id: 3,
      text: "from",
    }, */
  ],
};

export default reducer;
