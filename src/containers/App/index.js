import React from 'react';
import styles from './styles';
import {withStyles} from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import TaskBoard from '../TaskBoard';
import theme from '../../commons/Theme';
function App(props) {
    return (
        <ThemeProvider theme={theme}>
            <TaskBoard/>
      </ThemeProvider>
    );
}

export default withStyles(styles)(App);
