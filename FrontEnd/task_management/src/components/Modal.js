import React, { useState } from 'react';
import styled from 'styled-components';

const Modal = ({ isOpen, onClose, task, onSave, mode }) => {
    const [name, setName] = useState(task.name);
    const [status, setStatus] = useState(task.status);

    const handleSave = () => {
        onSave({ ...task, name, status });
        onClose();
    };

    if (!isOpen) return null;

    return (
        <Overlay>
            <ModalContainer>
                <h2>{mode === 'view' ? 'Task Details' : 'Edit Task'}</h2>
                {mode === 'view' ? (
                    <>
                        <p><strong>Name:</strong> {task.name}</p>
                        <p><strong>Status:</strong> {task.status}</p>
                        {/* <p><strong>Description:</strong> {task.description || 'No description'}</p> */}
                    </>
                ) : (
                    <>
                        <label>
                            Name:
                            <input type="text" style={{width:"94%"}} value={name} onChange={(e) => setName(e.target.value)} />
                        </label>
                        <label>
                            Status:
                            <select value={status} onChange={(e) => setStatus(e.target.value)}>
                                <option value="TODO">TODO</option>
                                <option value="IN PROGRESS">IN PROGRESS</option>
                                <option value="DONE">DONE</option>
                            </select>
                        </label>
                    </>
                )}
                <ButtonContainer>
                    {mode === 'view' ? (
                        <button onClick={onClose}>Close</button>
                    ) : (
                        <>
                            <button onClick={handleSave}>Save</button>
                            <button onClick={onClose}>Cancel</button>
                        </>
                    )}
                </ButtonContainer>
            </ModalContainer>
        </Overlay>
    );
};

export default Modal;

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalContainer = styled.div`
    background: white;
    padding: 20px;
    border-radius: 8px;
    width: 300px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

    h2 {
        margin: 0 0 10px;
    }

    label {
        display: block;
        margin-bottom: 10px;
    }

    input, select {
        width: 100%;
        padding: 8px;
        margin-top: 5px;
    }

    p {
        margin: 5px 0;
    }
`;

const ButtonContainer = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: space-between;

    button {
        padding: 8px 16px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

    button:first-of-type {
        background: #1a73e8;
        color: white;
    }

    button:last-of-type {
        background: #ccc;
    }
   
`;
