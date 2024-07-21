import React from 'react'
import { useDrag } from 'react-dnd'

const ItemTypes = {
    TASK: 'task'
}



const Task = ({ task, index ,setTasks,onEdit,onViewDetails }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.TASK,
        item: { id: task._id, index },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }))
    const handleDelete = async (id) => {
        try {
            const response = await fetch(`https://voosh-task-management.vercel.app/task/tasks/${id}`, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (response.ok) {
                setTasks(prevTasks => prevTasks.filter(task => task._id !== id));
            } else {
                console.error('Failed to delete task');
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div ref={drag} className='maincards' style={{ opacity: isDragging ? 0.5 : 1 }}>
        <p style={{ fontWeight: "700" }}>Task {task.name}</p>
        <p>Description: {task.name}</p>
        <p>Created at: 01/09/2024, 05:30:00</p>
        <div className='btsdiv'>
            <button style={{ backgroundColor: "red", color: "white" }} onClick={() => handleDelete(task._id)}>Delete</button>
            <button style={{ backgroundColor: "skyblue", color: "white" }} onClick={onEdit}>Edit</button>
            <button style={{ backgroundColor: "blue", color: "white" }} onClick={onViewDetails}>View Details</button>
        </div>
    </div>
    )
}

export default Task
