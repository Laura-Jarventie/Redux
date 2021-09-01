import React from "react";
import { useDispatch } from "react-redux";
import { createNote } from "../store/actions";
import "../App.css";

const NewNote = () => {
  const dispatch = useDispatch();

  const addTodo = async (e) => {
    e.preventDefault();
    const text = e.target.noteInput.value;
    dispatch(createNote(text));
    e.target.noteInput.value = "";
  };

  return (
    <form onSubmit={addTodo} className="form">
      <input type="text" name="noteInput" />
      <input type="submit" value="Add note" />
    </form>
  );
};

export default NewNote;
