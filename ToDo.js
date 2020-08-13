import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

const ToDo = (props) => (
  <div>

  <p><strong>name : </strong> {props}</p>

  <form onSubmit={(eT) => createPost(data)}>
  <label id="TodoTitle">ToDO
   <textarea onChange={e => setData(eTitle.target.value)} value={data} />
  </label>
  </form>
  </div>
)

export default class ToDo extends React.Component {
  state = {
    name: '',
    data:{},
    posts:[''],
  }

  handleChange = event => {
    this.setState({ title: event.target.value });
  }

   componentDidMount() {

    fetch('./backend/data/api', {
      method: 'POST',
      body: JSON.stringify({
        title: '',
        body: '',
        userId: ''
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(response => response.json())
    .then(json => this.setState({data:json}))
    
  }


  render() {
    const {posts} = this.state
    return (
      <div>
      <table>
              <tr>
                <th>Title</th>
                <th>Body</th> 
              </tr>
          {posts.map(post =>
              <tr>{post}
                <td>{this.state.data.title}</td>
                <td>{this.state.data.body}</td> 
              </tr>
           
          )}
        </table>
       
        
      </div>
    )
  }
}