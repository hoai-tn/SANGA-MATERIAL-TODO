import { combineReducers } from 'redux';
import taskReducer from './tasks';
const rootReducers = combineReducers({
    task: taskReducer
})

export default rootReducers;
