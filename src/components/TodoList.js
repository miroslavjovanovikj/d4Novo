import React, {Component} from 'react'
import NewTodoForm from './NewTodoForm';
import Todo from './Todo'
class TodoList extends Component{
  constructor(props){
    super(props);
    this.state={todos:[]}
    this.addTodo=this.addTodo.bind(this)
    this.toggleCheckbox= this.toggleCheckbox.bind(this)
  }
  addTodo(add){
    this.setState(st=>({
      todos:[...st.todos, add]
    }))
    console.log(this.state.todos)
  }


  toggleCheckbox(id){
    const updateTodo = this.state.todos.map(todo=>{
      if(todo.id===id){
        return {...todo, checked: !todo.checked}
      }
      return todo
    })
    this.setState({todos:updateTodo})
  }
  render(){
    const todoItem=this.state.todos.map(todo=>{
      return   <Todo
      key={todo.id}
      id={todo.id}
      myTodo={todo.item}
      checked={todo.checked}
      toggleTodo={this.toggleCheckbox}
      />
    })
    return(
      <div>
          From Todo list
          <NewTodoForm fromTodoList={this.addTodo} />
          {todoItem}
      </div>
    )
  }
}
export default TodoList;
