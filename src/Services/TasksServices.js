import React from 'react'

function TasksServices() {

    const getTasks=()=>{
        return fetch('http://localhost:3200/tasks')
        .then(responce=>responce.jason())
        .catch(err => {
            alert("Failed to get the tasks from server , please try again")
        })
    }
    const getTaskById=(id)=>{
        return fetch('http://localhost:3200/tasks/'+id)
        .then(responce=>responce.jason())
        .catch(err => {
            alert("Failed to get task by id , please try again")
        })
    }
    const addTask = (element) => {
        return fetch('http://localhost:3200/students/',
            {
                method: 'Post',
                body: JSON.stringify({
                    "taskName":element.taskName,
                    "desc" : element.desc,
                    "isDone":element.isDone,
                    "priority":element.priority
                }),
                headers: { 'Content-Type': 'application/json' },
            })
            .then(response => {
                if (response.ok) {
                    console.log("Task add succesfully to the server")
                    return (response.json())
                }
                else {
                    throw new Error(response.statusText)
                }
            })
    }
    const taskisDone=(element)=>{
        return fetch('http://localhost:3200/tasks/'+element.id,
        {
            method: 'PUT',
            body: JSON.stringify(element),
            headers: { 'Content-Type': 'application/json' },
        })
        .then(response => {
            if (response.ok) {
                console.log("Task updated succefully on the server");
                return response.json();
            }
            else {
                throw new Error(response.statusText)
            }
        })
        .catch(err => console.log(err))
    }
    const deleteTask=(id)=>{
        return fetch('http://localhost:3200/tasks/' + id, {
            method: "DELETE"
        })

    }
    return {
        deleteTask:deleteTask,
        taskisDone:taskisDone,
        addTask:addTask,
        getTaskById:getTaskById,
        getTasks:getTasks
    }
}

export default TasksServices