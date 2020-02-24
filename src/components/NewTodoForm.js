import React,{Component} from 'react';
import uuid from 'uuid/v4'
class NewTodoForm extends Component{
  constructor(props){
    super(props)
    this.state={item:""}
    this.handleChange= this.handleChange.bind(this)
    this.handleSubmit= this.handleSubmit.bind(this)
  }

  handleSubmit(evt){
    evt.preventDefault()
    const todo = {...this.state, id:uuid(), checked:false}
    this.props.fromTodoList(todo)
    this.setState({item:""})
    console.log(this.state)
  }
  handleChange(evt){
    this.setState({[evt.target.name]:evt.target.value})

  }
  render(){
    return(
    <form onSubmit={this.handleSubmit}>
      <input
        type="text"
        name="item"
        value={this.state.item}
        onChange={this.handleChange}
        placeholder="To Do"
      />
      {this.state.item===""?<button disabled>Add</button>: <button>Add</button>}
    </form>
    )
  }
}
export default NewTodoForm
