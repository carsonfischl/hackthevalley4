import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import logo from './logo.svg';
import './App.css';

class Cards extends Component{
	render(){
		return (
			<div>
			  <Card>
				<CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
				<CardBody>
				  <CardTitle>Card title</CardTitle>
				  <CardSubtitle>Card subtitle</CardSubtitle>
				  <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
				  <Button>Button</Button>
				</CardBody>
			  </Card>
			</div>
		  );
	};
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
