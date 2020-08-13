import React, {state} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {todoList} from '/backend/model';
debugger
const Todo = todoList(
  <div>

  <p><strong>ToDo: </strong></p>


  </div>
) 


export default class Todo extends React.Component {

  handleChange = event => {
    this.setState({ title: event.target.value });
  }

   componentDidMount() {
    const [ data, setData ] = useState('');
    axios('./backend/data/api', {
      method: 'POST',
      body: JSON.stringify({
        createTodo: '',
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(response => response.json())
    .then(json => this.setState({data:json}))
    
  

async function Todo(data){
  e.preventDefault()
  try { 
    const resp = await axios.Todo("/model", {data});
  } catch(e) {
    createTodo(data);
    return;
  }
  window.location = "/index" + resp.data.createTodo;
}
  }
  render() {
    const {createTodo} = this.state
    return (
      <div>
      <div class="form-holder">
       <form onSubmit={(e, data) => createTodo(data)}>
         <label id="Title">ToDo Title:
           <textarea onSubmit={createTodo => setData(e.target.value)} value={createTodo} />

        </label>


        <input type="submit" value="createTodo" id="createTodo" />
      
    </form>
      </div>
      <div class="table-holder">
      <table>
      <ul>
        {{createTodo}}
      </ul>

      </table>
       
        
      </div>
      </div>
    )
  }
}