import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../redux/action';


function TodoItem({ todo }) {
    const [editable, setEditable] = useState(false)
    const [name, setName] = useState(todo.name)
    const [completed, setCompleted] = useState(todo.completed)
    let dispatch = useDispatch();

    return (
        <div className="item">
            <div className="row mx-2 align-items-center">
                {/* <div className="col-1">#{todo.id.length > 1 ? todo.id[2] : todo.id}</div> */}
                <div className="col-1">
                {editable ?
                    <input type="checkbox" checked={completed}                          
                           onChange={(e) => {
                                setCompleted(e.target.checked);
                            }}/>
                            :
                            <input type="checkbox" checked={completed} onChange={()=>false}/>}
                </div>
                <div className="col-9">
                    {editable ?
                        <input type="text" className="form-control"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                            }}

                        />
                        :
                        <h4>{todo.name}</h4>}
                </div>
                <div className="col-2">
                    <button className="btn btn-primary m-2"
                        onClick={() => {
                            dispatch(updateTodo({
                                ...todo,
                                name: name,
                                completed: completed
                            }))
                            if (editable) {
                                setName(todo.name);
                            }
                            setEditable(!editable);
                        }}
                    >{editable ? "Update" : "Edit"}</button>
                    <button className="btn btn-danger m-2"
                        onClick={() => dispatch(deleteTodo(todo.id))}
                    >Delete</button>
                </div>
            </div>
        </div>
    )
}

export default TodoItem