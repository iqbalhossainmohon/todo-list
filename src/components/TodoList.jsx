import React, { useState } from 'react';
import CreateTask from './Modals/CreateTask';

const TodoList = () => {

    const [show, setShow] = useState(false);
    const toggle =()=>{
        setShow(!show);
    }

    return (
        <>
            <div className='header text-center pt-5'>
                <h1 className='header-title'>Todo List</h1>
                <button onClick={()=>setShow(true)} className='btn btn-primary mt-2'>Create Todo</button>
            </div>

            <div className='task-container'>

            </div>
            <CreateTask show={show} toggle={toggle} />
        </>
    );
};

export default TodoList;