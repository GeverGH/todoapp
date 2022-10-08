import React from 'react'
import { Checkbox, ListItem, ListItemText } from '@mui/material';
function Task(props) {
    return (
        <ListItem >
            <Checkbox
                type="checkbox"
                checked={props.isDone}
                id={props.id}
                onChange={props.taskIsDoneHandler}></Checkbox>
            <ListItemText
                primary={props.taskName}
                secondary={`${props.desc} , Priority : ${props.priority}`}
            />
        </ListItem>
    )
}

export default Task