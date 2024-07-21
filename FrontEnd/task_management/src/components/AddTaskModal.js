import React, { useState } from 'react';
import styled from 'styled-components';

const AddTaskModal = ({ isOpen, onClose, onAddTask ,setname,setStatus,name,status,getTasks}) => {
   // const [name, setName] = useState('');
   // const [status, setStatus] = useState('TODO');
    ////const [description, setDescription] = useState('');

    const handleAddTask = async() => {
        if (name.trim() === '') {
            alert('Task name is required');
            return;
        }
        if(status==""){
            alert('Status is required');
            return;
        }
        console.log(name,status)
       let data=await fetch("https://voosh-task-management.vercel.app/task/addtask",{
            method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ status,name })
        })
        if(data.ok){
            getTasks()
           // onAddTask({ name, status });
           setname("")
           setStatus("")
            onClose();
        }else{
            alert("somthing wrong")
        }
        console.log(data)
       // setname('');
      //  setStatus(sta);
       // setDescription('');
       //
    };

    if (!isOpen) return null;

    return (
        <Overlay>
            <ModalContainer>
                <h2>Add New Task</h2>
                <label>
                    Name:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setname(e.target.value)}
                        style={{width:"93%"}}
                    />
                </label>
                <label>
                    Status:
                    <select value={status} onChange={(e) => setStatus(e.target.value)}>
                    <option value="">Select</option>
                        <option value="TODO">TODO</option>
                        <option value="IN PROGRESS">IN PROGRESS</option>
                        <option value="DONE">DONE</option>
                    </select>
                </label>
                {/* <label>
                    Description:
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </label> */}
                <ButtonContainer>
                    <button onClick={handleAddTask}>Add Task</button>
                    <button onClick={onClose}>Cancel</button>
                </ButtonContainer>
            </ModalContainer>
        </Overlay>
    );
};

export default AddTaskModal;

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

    input, select, textarea {
        width: 100%;
        padding: 8px;
        margin-top: 5px;
        border: 1px solid #ccc;
        border-radius: 4px;
    }

    textarea {
        height: 60px;
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
