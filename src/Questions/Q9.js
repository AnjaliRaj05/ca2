import React, { Component } from 'react';
//import './styles.css';


class Q9 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate', prevProps, prevState);
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    const { count } = this.state;
    return (
      <div className="counter">
        <h2>Counter</h2>
        <button onClick={this.handleClick}>Increment</button>
        <p>Count: {count}</p>
      </div>
    );
  }
}

export default Q9;
