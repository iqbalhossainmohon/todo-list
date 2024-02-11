import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const EditTask = ({ show, toggle, updateTask, taskObj }) => {

    useEffect(() => {
        
    }, [])

    const handleUpdate = (event) => {
        event.preventDefault()
        const taskName = event.target.taskName.value
        const description = event.target.description.value
        const priority = event.target.priority.value

        let taskObj = { taskName, description, priority }

        updateTask(taskObj)

        console.log(taskObj)
    }

    return (

        <Modal show={show} onHide={toggle} backdrop="static" keyboard={false}>
            <Modal.Header closeButton>
                <Modal.Title>Update Task</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleUpdate}>
                    <div className='form-group'>
                        <label>Task Name</label>
                        <input name='taskName' id='taskName' className='form-control' type="text" defaultValue={taskObj.taskName}
                        />
                    </div>
                    <div className='form-group mt-2'>
                        <label>Description</label>
                        <textarea name='description' id='description' className='form-control' rows="3" defaultValue={taskObj.description}></textarea>
                    </div>
                    <div className='form-group mt-2'>
                        <label>Priority</label>
                        <select className="form-select" name='priority' id='priority' defaultValue={taskObj.priority} >
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                        </select>
                    </div>

                    <Modal.Footer>
                        <Button type='submit' variant="primary" >Update</Button>
                        <Button variant="secondary" onClick={toggle}>
                            Close
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal.Body>

        </Modal>
    );
};

export default EditTask;