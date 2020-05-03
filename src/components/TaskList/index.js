import React from 'react'
import {
    Grid,
    Box
} from '@material-ui/core'
import TaskItem from '../TaskItem'
const index = ({status, listTasksFilter}) => {
    const renderTaskList = () => {
        let task = null;
         task = listTasksFilter.map((task, index) => {
            return <TaskItem 
                key={index}
                task={task}/> 
        });
        return task;
    }
    return (
        <Grid item sm={4} key={status.value}>
            <Box my={5}>
                <div>{status.lable}</div>
            </Box>
            { renderTaskList()}
        </Grid>
    )
}

export default index
