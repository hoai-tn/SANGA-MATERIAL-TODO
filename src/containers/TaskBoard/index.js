import React, { useState, useEffect } from 'react'
import {
    withStyles,
    Button
} from '@material-ui/core'

import styles from './styles';
import Grid from '@material-ui/core/Grid';

import {STATUSES} from '../../constants';
import TaskList from '../../components/TaskList';
import TaskForm from '../../components/TaskForm';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../../actions/task';

import PropTypes from 'prop-types';

let listTasks = [
    {
        id: 0,
        title: 'Hoang Thu',
        description: 'Yeu mai mai',
        status: 0
    }, {
        id: 1,
        title: 'Tran Duyen',
        description: 'Yeu mai mai',
        status: 1
    }, {
        id: 2,
        title: 'Duy Trinh',
        description: 'Yeu mai mai',
        status: 2
    }
]

const renderBoard = () => {
    let xhtml = null;
    xhtml = (
        <Grid container spacing={3}>
            {STATUSES.map((status, index) => {
                const listTasksFilter = listTasks.filter(task => task.status === status.value)
                return (
                    <TaskList
                        key={index}
                        status={status} 
                        listTasksFilter={listTasksFilter}/>
                )
            })}

        </Grid>
    );
    return xhtml; 
}

const TaskBoard = (props) => {
    const [open, setOpen] = useState(false);

    const handleClouse = () => {
        setOpen(false)
    }
    const {classes} = props;

    useEffect(() => {
        const { taskActions } = props ;
        taskActions.fectListTaskRequest();
        
    }, []);
   
    return (
        <div className={classes.taskboard}>
            <Button 
                onClick={() => setOpen(true)}
                variant="contained" 
                color="primary">
                <i className="material-icons">library_add</i>
                Insert
            </Button>
            {renderBoard()}
            <TaskForm open={open} handleClouse={handleClouse}/>
        </div>
    )
}

TaskBoard.propTypes = {
    classes: PropTypes.object,
    taskActions: PropTypes.shape({
        fectListTask: PropTypes.func
    })
}


const mapStateToProps = (state, ownProps) => {
    return {
        listTask: state.task
    }
}
const mapDispatchToProps = dispatch => {
    return {
        taskActions: bindActionCreators(Actions, dispatch)
    }
}

export default  withStyles(styles)
(connect(
    mapStateToProps, 
    mapDispatchToProps,)
    (TaskBoard)
);
