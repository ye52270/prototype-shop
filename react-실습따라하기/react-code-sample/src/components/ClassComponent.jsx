import React from 'react';
export default class ClassComponent extends React.Component {
  state = {
    count: 0,
  };
  timeInterval = null;
  componentDidMount() {
    this.timeInterval = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
    clearInterval(this.timeInterval);
  }
  render() {
    return (
      <div>
        <p>{this.state.count}</p>
      </div>
    );
  }
}
