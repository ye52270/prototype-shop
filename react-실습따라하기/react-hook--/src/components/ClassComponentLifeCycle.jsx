import React from 'react';
export default class ClassComponentLifeCycle extends React.Component {
  state = { count: 0 };

  click = () => {
    this.setState({ count: this.state.count + 1 });
  };

  componentDidMount() {
    console.log('componentDidMount', this.state.count);
  }
  componentDidUpdate() {
    console.log('componentDidUpdate', this.state.count);
  }

  render() {
    const { count } = this.state;

    return (
      <div>
        You Clicked : {count} times
        <button onClick={this.click}>Click Me</button>
      </div>
    );
  }
}
