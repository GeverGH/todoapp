import { Button, ListItem, ListItemText } from '@mui/material'
import { Box } from '@mui/material'
import {AiOutlineUndo , AiFillDelete} from 'react-icons/ai'
import React from 'react'

function DoneTask(props) {

    const comp = () => {
        return (
            <div>
                <ListItem>
                    <ListItemText
                        primary={props.taskName}
                        secondary={`${props.desc} , Priority : ${props.priority}`}
                    />
                    <Button variant='contained' onClick={props.taskUndone}></Button>
                    <Button variant='outlined' onClick={props.taskDeleteHandelr}>Delete Task</Button>
                </ListItem>
            </div>
        )
    }
    return (

        <div>
            <ListItem>
                <ListItemText
                    primary={props.taskName}
                    secondary={`${props.desc} , Priority : ${props.priority}`}
                    
                />
                <Box>
                    <Button sx={{display:'block' , m: 0.5}} variant='contained' onClick={props.taskUndone}><AiOutlineUndo/></Button>
                    <Button sx={{display:'block' , m: 0.5}} variant='outlined' onClick={props.taskDeleteHandelr}><AiFillDelete/></Button>
                </Box>
            </ListItem>
        </div>
        // <article key={props.id}>
        //     <div>
        //         <h4>{props.taskName}</h4>
        //         <p>{props.desc}</p>

        //         <label style={{ color: "green" }} htmlFor="priority">Priority :</label>
        //         <p id="priority">{props.priority}</p>

        //         <button
        //             onClick={props.taskDeleteHandelr}
        //         >Delete Task</button>

        //         <button
        //             onClick={props.taskUndone}
        //         >Undo task</button>
        //     </div>
        // </article>
    )
}

export default DoneTask