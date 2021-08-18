/* eslint-disable react/prop-types */
import React from 'react';
import './App.css';
import HomePage from './components/homepage.component';

class App extends React.Component {
  constructor() {
    super();
    this.state = { number: 25, showChild: true, text: '' };
  }

  onClickHandler = () => {
    this.setState(
      (prevState, prevProps) => ({
        number: prevState.number + prevProps.increment,
      }),
      () => {
        console.log(this.state.number);
      }
    );
  };

  render() {
    return (
      <div>
        <HomePage />
      </div>
    );
  }
}

export default App;
