import { useDeleteDoneTaskMutation ,
    useGetDoneTasksQuery ,
    useGetBackDoneTaskMutation} from "../../api/apiSlice";
import DoneTask from "../Tasks/DoneTask";
import React from 'react'

function DoneTaskList() {
    const {
        data: doneTasks,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetDoneTasksQuery()

    const [deleteDoneTask] = useDeleteDoneTaskMutation();
    const [getBackDoneTask] = useGetBackDoneTaskMutation();

    const getBackDoneTaskHandler = (task) => {
        let updatedTask = {...task}
        updatedTask.isDone = false;
        task = updatedTask
        getBackDoneTask(task)
        deleteDoneTask(task)
    }

    let content;
    if (isLoading) {
        content = <p>Loading....</p>
    } else if (isSuccess) {
        let sortedDoneTasks = [...doneTasks]
        content = sortedDoneTasks.sort((a,b) => b.priority-a.priority).map(doneTask => {
            return (
                <DoneTask key={doneTask.id}
                id={doneTask.id}
                taskName={doneTask.taskName}
                desc={doneTask.desc}
                priority={doneTask.priority}
                taskDeleteHandelr={() => deleteDoneTask(doneTask)}
                taskUndone={() => getBackDoneTaskHandler(doneTask)}
                />
            )
        })
    } else if (isError) {
        content = <p>{error}</p>
    }
    return (
        <div>
            <h1>Done Tasks :</h1>
            {content}
        </div>
    )
}

export default DoneTaskList