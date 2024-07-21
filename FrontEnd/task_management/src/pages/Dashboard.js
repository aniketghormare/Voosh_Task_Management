import React, { useEffect, useState } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import styled from 'styled-components'
import Task from '../components/Task'
import Modal from '../components/Modal'
import AddTaskModal from '../components/AddTaskModal'

const ItemTypes = {
    TASK: 'task'
}


const Dashboard = () => {

    const [token,settoken]=useState(localStorage.getItem("token") || null)
    const [tasks, setTasks] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentTask, setCurrentTask] = useState(null);
    const [modalMode, setModalMode] = useState('view'); // 'view' or 'edit'
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [loading,setloading]=useState(false)

    const [name,setname]=useState("")
    const [status,setStatus]=useState("")
    const getTasks = async () => {
        setloading(true)
        try {
            const response = await fetch("http://localhost:8000/task/tasks");
            const data = await response.json();
            //console.log("uuu",data)
            setTasks(data);
            setloading(false)
        } catch (error) {
            setloading(false)
            console.error("Error fetching tasks:", error);
        }
    };


    useEffect(() => {
        getTasks()
    }, [])

    const moveTask = async (id, newStatus) => {
        console.log("BAC", id, newStatus);
    
        try {
            const response = await fetch(`http://localhost:8000/task/tasks/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ status: newStatus })
            });
    
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
    
            const updatedTask = await response.json();
    
            setTasks(prevTasks =>
                prevTasks.map(task =>
                    task._id === id ? updatedTask : task
                )
            );
        } catch (error) {
            console.log(error);
        }
    };
    const handleViewDetails = (task) => {
        setCurrentTask(task);
        setModalMode('view');
        setIsModalOpen(true);
    };
    // useState(()=>{
    //    let data=localStorage.getItem("token")
    //    settoken(data)
    // },[])

    console.log("token",token)

    const handleEdit = (task) => {
        setCurrentTask(task);
        setModalMode('edit');
        setIsModalOpen(true);
    };
    const handleAddTask = (newTask) => {
        setTasks(prevTasks => [...prevTasks, newTask]);
    };
    const handleSave = async (task) => {
        try {
            const response = await fetch(`http://localhost:8000/task/tasks/${task._id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name: task.name, status: task.status })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const updatedTask = await response.json();

            setTasks(prevTasks =>
                prevTasks.map(t =>
                    t._id === updatedTask._id ? updatedTask : t
                )
            );
        } catch (error) {
            console.log(error);
        }
    };
    
    const Column = ({ status, children }) => {
        const [, drop] = useDrop({
            accept: ItemTypes.TASK,
            drop: (item) => moveTask(item.id, status)
        })

        return (
            <div ref={drop} className='card'>
                <div className='header'>{status}</div>
                <div className='dragdropdiv'>
                    {children}
                </div>
            </div>
        )
    }
    if(!token){
        return (
            <h2 style={{textAlign:"center",marginTop:"35px"}}>Login First</h2>
        )
    }

    return (

        <DIV>
            <div className='div1'>
                <button className='addtaskbtn' onClick={() => setIsAddModalOpen(true)}>Add Task</button>
            </div>
            <div className='div2'>
                <div className='search'>
                    <h4 style={{ marginLeft: "30px" }}>Search: &nbsp;</h4>
                    <input placeholder='Search' />
                </div>
                <div className='sort'>
                    <h4>Sort By: &nbsp;</h4>
                    <select style={{ marginRight: "30px" }}>
                        <option>Select</option>
                        <option>Recent</option>
                    </select>
                </div>
            </div>
            <div className='div3'>
                <Column status="TODO">
                {
                    loading ?<p>Loading</p> :tasks.filter(task => task.status === "TODO").map((task, index) => (
                        <Task
                            key={task._id}
                            task={task}
                            setTasks={setTasks}
                            index={index}
                            onEdit={() => handleEdit(task)}
                            onViewDetails={() => handleViewDetails(task)}
                        />
                    ))
                }
                    {/* {} */}
                </Column>
                <Column status="IN PROGRESS">
                {
                    loading ? <p>Loading</p> : tasks.filter(task => task.status === "IN PROGRESS").map((task, index) => (
                        <Task
                            key={task._id}
                            task={task}
                            setTasks={setTasks}
                            index={index}
                            onEdit={() => handleEdit(task)}
                            onViewDetails={() => handleViewDetails(task)}
                        />
                    ))
                }
                    {/* {} */}
                </Column>
                <Column status="DONE">
                {
                    loading ? <p>Loading</p> :
                    tasks.filter(task => task.status === "DONE").map((task, index) => (
                        <Task
                            key={task._id}
                            task={task}
                            setTasks={setTasks}
                            index={index}
                            onEdit={() => handleEdit(task)}
                            onViewDetails={() => handleViewDetails(task)}
                        />
                    ))
                }
                    {/* {} */}
                </Column>
            </div>
            {isAddModalOpen && (
                <AddTaskModal
                    isOpen={isAddModalOpen}
                    onClose={() => setIsAddModalOpen(false)}
                    onAdd={handleAddTask}
                    setname={setname}
                    setStatus={setStatus}
                    name={name}
                    status={status}
                    getTasks={getTasks}
                />
            )}

            {isModalOpen && currentTask && (
                <Modal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    task={currentTask}
                    onSave={handleSave}
                    mode={modalMode}
                />
            )}
        </DIV>

    )
}

export default Dashboard


const DIV = styled.div`
         height: 100vh;
        width:90%;
      //  border: 1px solid teal;
        margin: auto;
       // margin-top: 20px;
      
       

        .div1{
            height: 7%;
            width: 100%;
         //   border: 1px solid red;
            display: flex;
            align-items: center;
            margin-top: 8px;
        }
        .div2{
            height: 10%;
            width: 100%;
           // border: 1px solid red;
            display: flex;
            margin-top: 8px;
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
            border-radius: 5px;
        }
        .div3{
            height: 79%;
            width: 100%;
         //   border: 1px solid red;
            margin-top: 8px;
            display: flex;
            justify-content: space-between;
        }
        .addtaskbtn{
            background-color: #1a73e8;
            color:white;
            padding: 3px;
            border-color: #1a73e8;
            width: 150px;
            border-radius: 5px;
            height: 30px;
           
        }
        .search{
            height: 100%;
            width: 50%;
         //   border: 1px solid teal;
            display: flex;
            align-items: center;
        }
        .sort{
            height: 100%;
            width: 50%;
          //  border: 1px solid teal;
            display: flex;
            align-items: center;
            justify-content: end;
        }
        input{
            height: 27px;
            width: 400px;
        }

        .card{
   height: auto;
   width: 32%;
   //border: 1px solid red;
   box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
   
        }
        .header{
            height: 30px;
            width: 90%;
           // border: 1px solid teal;
            background-color: #1a73e8;
            margin: auto;
            color: white;
          align-content: center;
          padding: 3px;
          font-weight: 600;
        }
        .dragdropdiv{
            height: 90%;
            width: 92%;
            //border: 1px solid green;
            margin: auto;
            overflow: scroll;
        }
        .maincards{
            height: auto;
            width: 92%;
            margin: auto;
         //   border: 1px solid teal;
            background-color: #c0e1fb;
            margin-top: 4px;
            border-radius: 5px;
            padding: 5px;
            //background-color: yellow;
        }
        .btsdiv{
            display: flex;
            justify-content: end;
            gap: 3px;
            margin-right: 3px;
        }
        button{
            border-radius: 5px;
            border-color: #c0e1fb;
            padding: 3px;
        }
    
`
