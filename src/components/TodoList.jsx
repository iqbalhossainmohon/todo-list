import React, { useEffect, useState } from 'react';
import CreateTask from './Modals/CreateTask';
import Card from './Card';
import CompleteCard from './CompleteCard';

const TodoList = () => {

    const [show, setShow] = useState(false);
    const [isComplited, setIsComplited] = useState(false);
    const [taskList, setTaskList] = useState([])
    const [complitedTodos, setComplitedTodos] = useState([])


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

    const handleStatus = (id, index) => {
        const items = JSON.parse(localStorage.getItem("Task-List"));

        if (items) {
            const foundIndex = items.findIndex(item => item.id === id);
            if (foundIndex !== -1) {
                items[foundIndex].isComplete = true;

                localStorage.setItem("Task-List", JSON.stringify(items));

            } else {
                console.log("Item not found");
            }
        } else {
            console.log("No items found in localStorage");
        }

        console.log(id)

        let now = new Date();
        let dd = now.getDate();
        let mm = now.getMonth() + 1;
        let yyyy = now.getFullYear();
        let h = now.getHours();
        let m = now.getMinutes();
        let s = now.getSeconds();
        let completedOn = dd + '-' + mm + '-' + yyyy + ' at ' + h + ':' + m + ':' + s;

        let filteredItem = {
            ...taskList[index],
            completedOn: completedOn,
            taskList: taskList
            
        }
        let updatedCompletedArr = [...complitedTodos];
        updatedCompletedArr.push(filteredItem);

        setComplitedTodos(updatedCompletedArr);

    }

    return (
        <>
            <div className='header text-center pt-5'>
                <h1 className='header-title'>Todo List</h1>

                <div className='d-flex justify-content-evenly'>
                    {/* <div className=''>
                        <button className={`toggleButton ${isComplited === false && 'active'}`} onClick={() => setIsComplited(false)}>Incomplited</button>

                        <button className={`toggleButton ${isComplited === true && 'active'}`} onClick={() => setIsComplited(true)}>Complited</button>
                    </div> */}
                    <div>
                        <button onClick={() => setShow(true)} className='btn btn-primary mt-2'>Create Task</button>
                    </div>
                </div>
            </div>

            <div className='task-container'>

                <div className='d-flex justify-content-evenly mt-2'>
                    <button className={`toggleButton ${isComplited === false && 'active'}`} onClick={() => setIsComplited(false)}>Incomplited</button>

                    <button className={`toggleButton ${isComplited === true && 'active'}`} onClick={() => setIsComplited(true)}>Complited</button>
                </div>

                {
                    isComplited === false && taskList.map((obj, index) => <Card taskObj={obj} index={index}
                        deleteTask={deleteTask} updateListArray={updateListArray}
                        handleStatus={handleStatus} />)
                }

                {/* {
                   isComplited === true && complitedTodos.map((obj, index) => <Card taskObj={obj} index={index}
                        deleteTask={deleteTask} updateListArray={updateListArray} 
                        handleStatus={handleStatus} />)
                } */}
                {
                    isComplited === true && complitedTodos.map((obj, index) => <CompleteCard taskObj={obj} index={index}
                        deleteTask={deleteTask} updateListArray={updateListArray}
                        handleStatus={handleStatus} id={obj.id}
                    />)
                }

            </div>
            <CreateTask show={show} setShow={setShow} toggle={toggle} save={saveTask}
            />
        </>
    );
};

export default TodoList;