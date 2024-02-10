import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const CreateTask = ({ show, toggle, save }) => {

    const handleSave = (event) => {
        event.preventDefault()
        const taskName = event.target.taskName.value
        const description = event.target.description.value
        const priority = event.target.priority.value

        let taskObj = {taskName, description, priority}
        save(taskObj)

        console.log(taskObj)
    }

    return (

        <Modal show={show} onHide={toggle} backdrop="static" keyboard={false}>
            <Modal.Header closeButton>
                <Modal.Title>Create Task</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSave}>
                    <div className='form-group'>
                        <label>Task Name</label>
                        <input name='taskName' id='taskName' className='form-control' type="text"
                        />
                    </div>
                    <div className='form-group mt-2'>
                        <label>Description</label>
                        <textarea name='description' id='description' className='form-control' rows="3"></textarea>
                    </div>
                    <div className='form-group mt-2'>
                        <label>Priority</label>
                        <select className="form-select" name='priority' id='priority'>
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                        </select>
                    </div>

                    <Modal.Footer>
                        <Button type='submit' variant="primary" >Create</Button>
                        <Button variant="secondary" onClick={toggle}>
                            Close
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal.Body>

        </Modal>
    );
};

export default CreateTask;