import React from "react";
import { v4 as uuidv4 } from "uuid";
import TodosList from "./TodosList";
import Header from "./Header";
import InputTodo from "./InputTodo";
class TodoContainer extends React.Component{
    state = {
        todos:[
            {
                id: uuidv4(),
                title: "A",
                completed: true
            },
            {
                id: uuidv4(),
                title: "B",
                completed: true
            },
            {
                id: uuidv4(),
                title: "C",
                completed: false
            }
        ]
    };

    delTodo = (id) => {
        console.log("deleted", id);
        this.setState({
            todos:[
                // ... = spread operator
                ...this.state.todos.filter(todo=>{
                    return todo.id !== id;
                })
            ]
        })
    };

    handleChange = (id) =>{
        console.log("clicked", id);
        this.setState({
            todos: this.state.todos.map(todo => {
                if(todo.id === id){
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        })
    };

    addTodoItem = title => {
        console.log(title);
        const newTodo = {
            id: uuidv4(),
            title: title,
            completed: false
        };
        this.setState({
            todos: [...this.state.todos, newTodo]
        });
    };

    render(){
        return (
            <div className="container">
                <Header/>
                <InputTodo
                    addTodoProps={this.addTodoItem} />
                <TodosList 
                    todos={this.state.todos} 
                    handleChangeProps={this.handleChange}
                    deleteTodoProps={this.delTodo}/>
            </div>
        )
    };
}

export default TodoContainer