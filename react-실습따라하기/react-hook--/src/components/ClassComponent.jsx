import React from 'react';
export default class ClassComponent extends React.Component {
  state = { count: 0 };

  click = () => {
    this.setState({ count: this.state.count + 1 });
  };

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
