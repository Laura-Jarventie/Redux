import React, { useEffect } from "react";
import NewNote from "./containers/NewNote";
import NoteList from "./containers/NoteList";

import { initializeNotes } from "./store/actions";
import { useDispatch } from "react-redux";

import "./App.css";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeNotes());
  }, [dispatch]);

  return (
    <div>
      <h1>Notes to myself</h1>
      <NewNote />
      <NoteList />
    </div>
  );
};

export default App;
