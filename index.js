import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ToDo from './ToDo';
class App extends React.Component {
  render() {
    return (
      <div>
        <ToDo/>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);