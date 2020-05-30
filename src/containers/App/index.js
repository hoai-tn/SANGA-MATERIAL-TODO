import React from 'react';
import styles from './styles';
import {withStyles} from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import TaskBoard from '../TaskBoard';
import theme from '../../commons/Theme';
import { Provider } from 'react-redux';
import configureStore from '../../redux/configureStore';
const store = configureStore();
function App(props) {
    return (
       <Provider store={store}>
            <ThemeProvider theme={theme}>
              <TaskBoard/>
           </ThemeProvider>
       </Provider>
    );
}

export default withStyles(styles)(App);
