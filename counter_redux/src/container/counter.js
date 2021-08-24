import React, { Component } from "react";
import { connect } from "react-redux";

import * as actionTypes from "../actions/actions";

class Counter extends Component {
  render() {
    return (
      <div>
        <h1>Your score: {this.props.ctr}</h1>
        <div>
          <button onClick={this.props.onIncCounter}>Add one</button>
          <button onClick={this.props.onDecCounter}>Remove one</button>
          <button onClick={this.props.resetCounter}>Reset</button>
          <button onClick={this.props.onAddFiveCounter}>Add 5</button>
          <button onClick={this.props.onDecFiveCounter}>Remove 5</button>
        </div>
        <button onClick={this.props.onStoreResult}>Store the results</button>
        <div>
          <ul>
            {this.props.storedResults.map((item) => (
              <li
                key={item.id}
                onClick={() => this.props.onDeleteResult(item.id)}
              >
                {item.value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ctr: state.counter,
    storedResults: state.results,
  };
};

//this was how to connect to store
const mapDispatchToProps = (dispatch) => {
  return {
    onIncCounter: () => dispatch({ type: actionTypes.INCREMENT }),
    onDecCounter: () => dispatch({ type: actionTypes.DECREMENT }),
    resetCounter: () => dispatch({ type: actionTypes.RESET }),
    onAddFiveCounter: () =>
      dispatch({ type: actionTypes.INCREMENTFIVE, value: 5 }),
    onDecFiveCounter: () =>
      dispatch({ type: actionTypes.DECREMENTFIVE, value: 5 }),
    onStoreResult: () => dispatch({ type: actionTypes.STORE_RESULT }),
    onDeleteResult: (id) =>
      dispatch({ type: actionTypes.DELETE_RESULT, item: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
