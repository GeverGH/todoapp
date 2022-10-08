import {
    useGetTasksQuery,
    useTaskIsDoneMutation,
    useDeleteTaskMutation
} from "../../api/apiSlice";
import React from 'react'
import Task from "../Tasks/Task";
import { List } from "@mui/material";

const TaskList = () => {

    const {
        data: tasks,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetTasksQuery()
    const [taskIsDone] = useTaskIsDoneMutation()
    const [deleteTask] = useDeleteTaskMutation()

    let trueTasks;

    const taskIsDoneHandler = (task) => {
        let updatedTask = { ...task }
        updatedTask.isDone = true;
        task = updatedTask
        taskIsDone(task)
        deleteTask(task)
    }

    const filterByPriority = () => {
        trueTasks = tasks.slice().sort((a,b) => b.priority.localeCompare(a.priority))
    }

    let content;
    
    if (isLoading) {
        content = <p>Loading....</p>
    } else if (isSuccess) {
        let sortedTasks = [...tasks]
        return (
            <div>
                <h1>TODOS:</h1>
                {  
                    content = sortedTasks.sort((a,b) => b.priority-a.priority).map(task => {
                        return (
                            <Task key={task.id}
                                id={task.id}
                                taskName={task.taskName}
                                desc={task.desc}
                                priority={task.priority}
                                isDone={task.isDone}
                                taskIsDoneHandler={() => taskIsDoneHandler(task)}
                            />
                        )
                    })
                }
            </div>
        )
    } else if (isError) {
        content = <p>{error}</p>
    }
    return (
        <div>
            {content}
        </div>
    )
}

export default TaskList