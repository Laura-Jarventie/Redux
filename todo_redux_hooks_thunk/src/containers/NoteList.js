import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actionTypes from "../store/reducers/actions";

const NoteList = () => {
  const notes = useSelector((state) => state);
  const dispatch = useDispatch();

  const toggleTodo = (id) => ({
    type: actionTypes.TOGGLE_TODO,
    id: id,
  });

  //const text = useSelector((state) => state.text); tää initialStatella, ylempi with empty arrey

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
          </li>
        ))}
      </ul>

      {/* <ul>
        {text.map((text) => (
          <li key={text.id}>{text.text}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default NoteList;
