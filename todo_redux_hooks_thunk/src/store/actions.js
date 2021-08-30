import { getAll, createNew } from "../services/notes";

export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const INIT_NOTES = "INIT_NOTES";
export const REMOVE_TODO = "REMOVE_TODO";

export const initializeNotes = () => {
  return async (dispatch) => {
    const notes = await getAll();
    dispatch({
      type: INIT_NOTES,
      data: notes,
    });
  };
};

export const createNote = (text) => {
  return async (dispatch) => {
    const newNote = await createNew(text);
    dispatch({
      type: ADD_TODO,
      data: newNote,
    });
  };
};

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id: id,
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  id: id,
});
