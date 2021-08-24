import React from "react";
import NewNote from "./containers/NewNote";
import NoteList from "./containers/NoteList";
import "./App.css";

const App = () => {
  return (
    <div>
      <NewNote />
      <NoteList />
    </div>
  );
};

export default App;
