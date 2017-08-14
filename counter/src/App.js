import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

class App extends React.Component {
  render = () => {
    return (
      <div className="App">
        <div>{ this.props.state.counter }</div>
        <button onClick={ this.props.onIncrement }>Increment</button>
        <button onClick={ this.props.onDecrement }>Decrement</button>
        <button onClick={ this.props.onSquare }>Square</button>
        <button onClick={ this.props.onSquareRoot }>Square Root</button>
      </div>
    );
  }

  static propTypes = {
    state: PropTypes.object,
    onIncrement: PropTypes.func,
    onDecrement: PropTypes.func,
    onSquare: PropTypes.func,
    onSquareRoot: PropTypes.func
  }
}

export default App;
