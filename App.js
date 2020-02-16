import React, {Component} from 'react';
import './App.css';
import Grid from './grid.jsx';

class Header extends Component {
  render() {
    return (
        <Grid />
    );
  }
}

class Body extends Component {
  render() {
    return (
      <header className="App-header">
      </header>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header>
          <Grid />
        </Header>
        <Body>
        </Body>
      </div>
    );
  }
}

export default App;
