import { useAddTaskMutation } from "../../api/apiSlice";
import React from 'react'
import { useState } from 'react';
function addNewTask() {

    const [newTask, setNewTask] = useState({
        taskName: "",
        desc: "",
        isDone: false,
        priority: null
    })

    const [addTask] = useAddTaskMutation()

    const handleSubmit = () => {
        addTask(newTask)
        setNewTask({
            taskName: "",
            desc: "",
            isDone: false,
            priority: null
        })
    }

    const twoWayBinding = (e) => {
        let updatedNewTask = { ...newTask }
        updatedNewTask[e.target.name] = e.target.value;
        setNewTask(updatedNewTask);
    }

    return (
        <div>
            <h1>Add New Task :</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="task-name">Enter Task Name :</label>
                    <input
                        type='text'
                        id="task-name"
                        name="taskName"
                        value={newTask.taskName}
                        onChange={(e) => twoWayBinding(e)}
                        placeholder="Task Name" />
                    
                    <label htmlFor="task-desc">Enter Task Description :</label>
                    <input
                        type='text'
                        id="task-decs"
                        name="desc"
                        value={newTask.desc}
                        onChange={(e) => twoWayBinding(e)}
                        placeholder="Task Description" />

                    <label htmlFor="priority">Priority:</label>
                    <select
                    id="priority"
                    name="priority"
                    onChange={(e) => twoWayBinding(e)} >
                        <option value='1'>1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>

                    <button className="submit">Add</button>
                </form>
            </div>
        </div>
    )
}

export default addNewTask