import React from 'react'
import TaskList from '../Components/TaskList/TaskList'
import DoneTaskList from '../Components/DoneTaskList/DoneTaskList'

function Home() {
    return (
        <span>
            <h1>Welcome to our Tasks Management App</h1>
            <h3>This is the best app in town</h3>
            <span style={{display:"inline-block"}}>
                <TaskList />
                <DoneTaskList />
            </span>
        </span>
    )
}

export default Home