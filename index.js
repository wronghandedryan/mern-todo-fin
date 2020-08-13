import React from 'react';
import ReactDOM from 'react-dom';
import ReactRouter from 'react-router';
import axios from 'axios';
import Todo from './Todo';



class App extends React.Component {
  render() {
    return (
      <div>
        <Todo/>
      </div>
    );
  }
}

ReactDOM.render(
  <Todo />,
  document.getElementById('root')
);