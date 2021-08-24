import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionTypes from "../actions/actions";

class ToDo extends Component {
  addHandler = (e) => {
    e.preventDefault();
    this.props.addTask(e.target.note.value);
    e.target.note.value = "";
  };
  render() {
    return (
      <div>
        <h1>Notes to myself</h1>

        <h2>I have currently {this.props.todo.length} tasks</h2>

        <form onSubmit={this.addHandler}>
          <input type="text" name="note" />
          <input type="submit" value="Add task" />
        </form>

        <ul>
          {this.props.todo.map((item) => (
            <li
              key={item.id}
              onClick={() => this.props.strikeNote(item.id)}
              className={item.complete ? "todo strike" : "todo"}
            >
              {item.text}
              <span
                className="material-icons"
                onClick={() => this.props.removeNote(item.id)}
              ></span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todo: state.todo_list,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (text) =>
      dispatch({ type: actionTypes.ADD_TASK, text: text, done: false }),
    strikeNote: (id) => dispatch({ type: actionTypes.DONE_TASK, strikeID: id }),
    removeNote: (id) => dispatch({ type: actionTypes.REMOVE_TASK, item: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDo);
