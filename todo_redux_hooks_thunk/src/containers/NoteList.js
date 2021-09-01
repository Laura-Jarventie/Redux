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
        <h3>I have currently {notes.length} tasks.</h3>

        {notes &&
          !!notes.length &&
          notes.map((note) => (
            <li
              key={note.id}
              onClick={() => dispatch(toggleTodo(note.id))}
              className={note.completed ? "strike todo" : "todo"}
            >
              {note.text}
              <span
                className="material-icons"
                onClick={() => dispatch(removeTodo(note.id))}
              >
                delete_fovever
              </span>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default NoteList;
