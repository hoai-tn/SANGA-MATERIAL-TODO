import React from 'react'
import {
    Card,
    CardContent,
    CardActions,
    Grid,
    Fab,
    withStyles
} from '@material-ui/core';
import {Add, Edit} from '@material-ui/icons';
import styles from './styles';
const index = ({task, classes}) => {
    return (
        <Card key={task.id}>
            <CardContent>
                <Grid container justify='space-between'>
                    <Grid item>{task.title}</Grid>
                    <Grid item>{task.status}</Grid>
                </Grid>
                <p> {task.description} </p>
            </CardContent>
            <CardActions className={classes.cardActions} >
                <Fab 
                    color="primary" 
                    aria-label="add"
                    size="small">
                    <Add fontSize='small'/>
                </Fab>
                <Fab 
                    color="secondary" 
                    aria-label="edit" 
                    size="small">
                    <Edit/>
                </Fab>
            </CardActions>

        </Card>
    )
}

export default withStyles(styles)(index);
