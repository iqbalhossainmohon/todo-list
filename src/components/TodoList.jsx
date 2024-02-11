import React, { useEffect, useState } from 'react';
import CreateTask from './Modals/CreateTask';
import Card from './Card';

const TodoList = () => {

    const [show, setShow] = useState(false);
    const [isComplited, setIsComplited] = useState(false);
    const [taskList, setTaskList] = useState([])


    useEffect(() => {
        let array = localStorage.getItem("Task-List")
        if (array) {
            let obj = JSON.parse(array)
            setTaskList(obj)
        }
    }, [])

    const deleteTask = (index) => {
        let tempList = taskList
        tempList.splice(index, 1)
        localStorage.setItem("Task-List", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }

    const updateListArray = (obj, index) => {
        let tempList = taskList
        tempList[index] = obj
        localStorage.setItem("Task-List", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }

    const toggle = () => {
        setShow(!show);
    }

    const saveTask = (taskObj) => {
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
                        <button onClick={() => setShow(true)} className='btn btn-primary '>Create Task</button>
                    </div>
                </div>
            </div>

            <div className='task-container'>

                {
                    taskList.map((obj, index) => <Card taskObj={obj} index={index}
                        deleteTask={deleteTask} updateListArray={updateListArray} />)
                }

            </div>
            <CreateTask show={show} setShow={setShow} toggle={toggle} save={saveTask} />
        </>
    );
};

export default TodoList;