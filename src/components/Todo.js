import React, {Component} from 'react';

class Todo extends Component{
  constructor(props){
    super(props)
    this.handleToggle=this.handleToggle.bind(this)
  }
  handleToggle(evt){
    this.props.toggleTodo(this.props.id)
  }
  render(){
    let txt;
          if (this.props.checked) {
              txt = 'Done'
          } else {
              txt = 'To do'
          }
    return(
      <div>
        <ul>
          <li>{this.props.myTodo}<input onChange={this.handleToggle}type="checkbox" />{txt}</li>

        </ul>
      </div>
    )
  }
}
export default Todo;
