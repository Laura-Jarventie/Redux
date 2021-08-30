import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodo } from "../store/actions";
import { removeTodo } from "../store/actions";

const NoteList = () => {
  const notes = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <ul>
        {notes.map((note) => (
          <li
            key={note.id}
            onClick={() => dispatch(toggleTodo(note.id))}
            className={note.completed ? "strike todo" : "todo"}
          >
            {note.text}
            <button
              key={note.id}
              type="removeTodo"
              onClick={() => dispatch(removeTodo(note.id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NoteList;
