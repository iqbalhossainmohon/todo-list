import React, { useState } from 'react';
import { FaCheckCircle } from "react-icons/fa";
import { RiEditBoxFill } from "react-icons/ri";
import { RiDeleteBin6Fill } from "react-icons/ri";
import EditTask from './Modals/EditTask';

const Card = ({ taskObj, index, deleteTask, updateListArray }) => {
    const [show, setShow] = useState(false);

    const toggle = ()=>{
        setShow(!show)
    }

    const updateTask = (obj)=>{
        updateListArray(obj, index)
    }

    const handleDelete = ()=>{
        deleteTask(index)
    }

    return (
        <div className='container mt-3 bg-body-secondary rounded p-3'>
            <div className='card-top' style={{ "background-color": "chartreuse" }}>
                
            </div>
            <div class="d-flex justify-content-between position-relative">
                <div className='task-header'>
                    <span className='card-header fs-1 fw-medium font-' >{taskObj.taskName}</span>
                    <p>{taskObj.description}</p>
                    <p><span className='text-primary '>Priority:</span> {taskObj.priority}</p>
                </div>
                <div className='position-absolute bottom-0 end-0'>
                    <FaCheckCircle size={24} style={{"color": "Green", "margin": "7px"}}/>
                    <RiEditBoxFill size={24} style={{"color": "Green", "margin": "7px"}} 
                    onClick={()=>setShow(true)} />
                    <RiDeleteBin6Fill size={24} style={{"color": "red", "margin": "7px"}} 
                    onClick={handleDelete} />
                </div>
            </div>
            <EditTask show={show} toggle={toggle} updateTask={updateTask} taskObj={taskObj} />
        </div>
    );
};

export default Card;