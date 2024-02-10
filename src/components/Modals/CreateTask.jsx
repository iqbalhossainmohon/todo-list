import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const CreateTask = ({ show, toggle }) => {
    return (
        <Modal
            show={show}
            onHide={toggle}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>Create Task</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <form>
                    <div className='form-group'>
                        <label>Task Name</label>
                        <input className='form-control' type="text" />
                    </div>
                    <div className='form-group mt-2'>
                    <label>Description</label>
                        <textarea className='form-control' name="" rows="3"></textarea>
                    </div>
                    <div className='form-group mt-2'>
                        <label>Priority</label>
                        <select className="form-select">
                            <option value="1">Low</option>
                            <option value="2">Medium</option>
                            <option value="3">High</option>
                        </select>
                    </div>
                </form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="primary">Create</Button>
                <Button variant="secondary" onClick={toggle}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateTask;