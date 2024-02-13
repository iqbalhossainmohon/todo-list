import React, { useState } from 'react';
import { RiDeleteBin6Fill } from "react-icons/ri";
import EditTask from './Modals/EditTask';

const CompleteCard = ({ taskObj, index, deleteTask, updateListArray }) => {
    const [show, setShow] = useState(false);

    const toggle = () => {
        setShow(!show)
    }

    const updateTask = (obj) => {
        updateListArray(obj, index)
    }

    const handleDelete = () => {
        deleteTask(index)
    }

    console.log(taskObj)


    return (

        <div className='container mt-3 bg-body-secondary rounded p-3'>
            <div className='card-top' style={{ "background-color": "chartreuse" }}>

            </div>
            <div class="d-flex justify-content-between position-relative">
                <div className='task-header'>
                    <span className='card-header fs-1 fw-medium font-' >
                        {taskObj.task.taskName}
                    </span>
                    <p>{taskObj.task.description}</p>
                    <p><span className='text-primary '>Priority:</span> {taskObj.task.priority}</p>
                    <p><small>Completed at: </small>{taskObj.completedOn}</p>
                </div>
                <div className='actionBtn position-absolute bottom-0 end-0'>

                    <RiDeleteBin6Fill size={24} title='Delete' style={{ "color": "red", "margin": "7px" }}
                        onClick={handleDelete} />
                </div>
            </div>
            <EditTask show={show} toggle={toggle} updateTask={updateTask} taskObj={taskObj} />
        </div>

    );
};

export default CompleteCard;