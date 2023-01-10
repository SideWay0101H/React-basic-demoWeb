import React from "react";
import './ListTodo.scss';
import AddTodo from "./AddTodo";
import { toast } from 'react-toastify';
class ListTodo extends React.Component {
    state ={
        listTodos: [
            {id: 'doto1',title: 'Doing Homeworking'},
            {id: 'doto2',title: 'Doing Wellness'},
            {id: 'doto3',title: 'Fixings Bugs'},
        ],
        editTodo : {}
    }
    addNewTodo = (todo) =>{
        this.setState({
            listTodos: [...this.state.listTodos,todo]
        })
        toast.success("Add Todo Success!");
    }
    handleDeleteTodo = (todo) =>{
        let currentTodo = this.state.listTodos
        currentTodo = currentTodo.filter(item => item.id !== todo.id)
        this.setState({
            listTodos: currentTodo
        })
        toast.success("Delete Success")
    }
    handleOnCLickEdit = (todo) =>{
        let { editTodo, listTodos } = this.state

        let isEmptyObj = Object.keys(editTodo).length === 0
        // save
        if(isEmptyObj === false && editTodo.id === todo.id) {
            let listTodoCopy = [...listTodos]
            
            let objIndex = listTodoCopy.findIndex((item => item.id === todo.id))
           
            listTodoCopy[objIndex].title = editTodo.title 

            this.setState({
                listTodos: listTodoCopy,
                editTodo: {}
            })
            toast.success("Update Todo Success")
            return;
        }
        this.setState({
            editTodo: todo
        })
    }
    handleOnChangeEdit = (event) => {
        const editTodoCopy = {...this.state.editTodo}
        editTodoCopy.title =event.target.value
        this.setState({
            editTodo : editTodoCopy, 
        })
    }
    render (){
        let {listTodos, editTodo} =this.state;
        
        let isEmptyObj = Object.keys(editTodo).length === 0
        console.log(">>>Check empty object",isEmptyObj)
        return(
            <>
                <p>
          Todo example Apps with ReactJS framework
        </p>
            <div className="list-todo-container">
                <AddTodo
                    addNewTodo={this.addNewTodo}
                />
                <div className="list-todo-content">
                {
                    listTodos && listTodos.length > 0  && 
                    listTodos.map((item,index)=> {
                        return (
                        <div className="todo-child" key={item.id}>
                        {/* day la dieu kien cho kiem tra de sua rong */}
                        {isEmptyObj === true ?
                            <span> {index+1} - {item.title} </span>
                            :
                            <>
                            {/* Day check dieu kien neu obj co id = voi itemid thi duoc sua */}
                            {editTodo.id === item.id ?
                                <span>
                                    {index + 1} - 
                                    <input value={editTodo.title}
                                        onChange={(event) => this.handleOnChangeEdit(event)}
                                    />
                                </span>
                                :
                                <span>
                                    {index+1} - {item.title}
                                </span>
                            }
                            </>
                        }
                            <button className="edit"
                            onClick={() => this.handleOnCLickEdit(item)}>
                            {isEmptyObj === false && editTodo.id === item.id ? 'Save': 'Edit'}
                            </button>

                            <button className="remove" 
                            onClick={() => this.handleDeleteTodo(item)}
                            >Delete</button>
                        </div>
                        )
                    })
                }
                </div>

            </div>
        </>
        )
    }
}

export default ListTodo;