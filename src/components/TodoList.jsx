import React, { useState } from 'react';
import CreateTask from './Modals/CreateTask';

const TodoList = () => {

    const [show, setShow] = useState(false);
    const [isComplited, setIsComplited] = useState(false);
    const [taskList, setTaskList] = useState([])

    const toggle = () => {
        setShow(!show);
    }

    const saveTask = (taskObj)=>{
        let tempList = taskList
        tempList.push(taskObj)
        localStorage.setItem("Task-List", JSON.stringify(tempList))
        setTaskList(tempList)
        setShow(false)
    }

    return (
        <>
            <div className='header text-center pt-5'>
                <h1 className='header-title'>Todo List</h1>

                <div className='d-flex justify-content-evenly mt-2'>
                    <div className=''>
                        <button className={`toggleButton ${isComplited === false && 'active'}`} onClick={() => setIsComplited(false)}>Incomplited</button>
                        <button className={`toggleButton ${isComplited === true && 'active'}`} onClick={() => setIsComplited(true)}>Complited</button>
                    </div>

                    <div>
                        <button onClick={() => setShow(true)} className='btn btn-primary mt-2'>Create Task</button>
                    </div>
                </div>
            </div>

            <div className='task-container'>

                {/* <-- to-do list card -->   */}
                {taskList.map((obj)=> <li>{obj.taskName}</li>)}

            </div>
            <CreateTask show={show} setShow={setShow} toggle={toggle} save={saveTask} />
        </>
    );
};

export default TodoList;