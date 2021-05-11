import React, { useState } from 'react';
import { addTodo } from '../redux/action';
import { v1 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';


function TodoInput() {
    let [names, setName] = useState();
    let dispatch = useDispatch();

    return (
        <>
            <div><h3>TodoList React :) Redux</h3><line>*****</line> </div>
            <div className="row m-2">
                <div className="col-10">
                    <input
                        value={names}
                        onChange={(e) => setName(e.target.value)}
                        type="text" className="col form-control" />

                </div>
                <div className="col-2">
                    <button

                        onClick={() => {
                            dispatch(addTodo({
                                id: uuid(),
                                name: names
                            }));
                            setName('');
                        }}
                        className="btn btn-primary mx-2">Add</button>

                </div>
            </div>
        </>
    )
}

export default TodoInput