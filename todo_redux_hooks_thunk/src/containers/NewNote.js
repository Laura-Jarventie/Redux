import React from "react";
import * as actionTypes from "../store/reducers/actions";
import { useSelector, useDispatch } from "react-redux";

const NewNote = () => {
  const notes = useSelector((state) => state);
  const dispatch = useDispatch();

  let i = notes.length;

  const addTodo = (valueWeGetFromInput) => ({
    type: actionTypes.ADD_TODO,
    id: i++,
    text: valueWeGetFromInput,
    completed: false,
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(addTodo(e.target.noteInput.value));
        e.target.noteInput.value = "";
      }}
    >
      <input type="text" name="noteInput" />
      <input type="submit" value="Add note" />
    </form>
  );
};

export default NewNote;
