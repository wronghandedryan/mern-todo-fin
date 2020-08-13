import React, {state} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {todoList} from '/backend/model/todo';

const todo = Todo (
    render()
      todo() {
     <div>

        <p>
            <strong>ToDd:
            </strong>
        </p>


    </div>

}
export default class Todo extends React.Component {

    handleChange = event => {
        this.setState({title: event.target.value});
    }

    componentDidMount() {
        const [data, setData] = useState('');
        axios('./backend/data/api', {
            method: 'POST',
            body: JSON.stringify(
                {createTodo: ''}
            ),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(response => response.json()).then(json => this.setState((data))this.onChange = this.onChange.bind(this);
        this.addTodoLIST = this.adDTodoList.bind(this);

        async function createTodo(data) {
            e.preventDefault()
            try {
                const resp = await axios.addTodoList("/model", {data});
            } catch (e) {
                createTodo(data);
                return;
            }
            window.location = "/index" + resp.data.createTodo;
        }
      
    render() 
        const {createTodo} = this.state
        return (
            <div>
                <div class="form-holder">
                    <form onSubmit={
                        (e, data) => createTodo(data)
                    }>
                        <label id="Title">ToDo Title:
                            <textarea onSubmit={
                                    addTodoList => setData(e.target.value)
                                }
                                value={createTodo}/>

                        </label>


                        <input type="submit" value="createTodo" id="createTodo"/>

                    </form>
                </div>
                //
                <div class="table-holder">
                    //
                    <table>
                        //
                        <ul>
                            //
                            <li/>{
                            {createTodo}
                        }
                            //
                        </ul>

                        //
                    </table>


                    //
                </div>
            </div>
        )
    }
}
