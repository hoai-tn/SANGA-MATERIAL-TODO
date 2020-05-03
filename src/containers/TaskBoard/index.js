import React from 'react'

import {withStyles, Button} from '@material-ui/core'
import styles from './styles';
import Grid from '@material-ui/core/Grid';
import { STATUSES } from '../../constants';

const TaskBoard = (props) => {
    const {classes} = props;
    return (
        <div className={classes.taskboard}>
            <Button variant="contained" color="primary">
                <i className="material-icons">library_add</i>
                Insert
            </Button>
            {renderBoard()}
        </div>
    )
}

const renderBoard = () => {
   let xhtml = null;
   xhtml = (
      <Grid container spacing={3}>
         {STATUSES.map((status, index) => {
            return(
               <Grid item md={4} sm={12} key={status.value}>
                  {status.lable}
               </Grid>
            )
         })}

      </Grid>
   );
   return xhtml;
}

export default withStyles(styles)(TaskBoard);