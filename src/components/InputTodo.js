import React, { Component } from "react"

// Needs to be a class-based component
// since it will hold the user's input values
// in its state.
// But can be functional if using React hooks
class InputTodo extends Component{
  state = {
    title: ""
  };
  onChange = (e) => {
    this.setState({
      // so long as name of the input tag matches
      // the state variables, this will expand
      // correctly.
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = e => {
    e.preventDefault(); // suppress page reload
    this.props.addTodoProps(this.state.title);
    this.setState({
      title: ""
    });
  }
  
  render(){
    return (
      <form onSubmit={this.handleSubmit} className="form-container">
        <input 
          name="title"
          type="text" 
          className="input-text"
          placeholder = "Add Todo..." 
          value={this.state.title} 
          onChange={this.onChange}/>
        <input type="submit" className="input-submit" value="Submit" />
      </form>
    )
  }
}

export default InputTodo