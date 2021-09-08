import React, {Component} from "react";
import "./TodoApp.css"

export class TodoApp extends Component {

state ={
    input:"",
    items:[]
}
    onHandleChange = (event) => {
        this.setState({input:event.target.value});
    };
storeItems = (event) =>{

    event.preventDefault();
    const{input} = this.state;
   
    this.setState({
        items: [...this.state.items,input],
        input:""
    });
}

onDelete = key =>{
    const allItems=this.state.items;
    allItems.splice(key,1);
    this.setState({items:allItems});
}

    render(){
        const{input,items} = this.state;
        console.log(items);
        return (
            <div className="todo-container">
                <form className="input-section" onSubmit={this.storeItems}>
                <h1>Todo App</h1>

                    <input type="text" value={input} onChange={this.onHandleChange} placeholder="enter the items..."></input>
                </form>
                <ul>
                    {items.map((data,index) =>(
                        <li key={index}>{data} <i className="fas fa-trash-alt" onClick={()=>this.onDelete(index)}></i></li>
                    ))}
                  
                   
                </ul>
            </div>
        )
    }
}

export default TodoApp;