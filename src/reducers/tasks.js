import * as Types from '../constants/task';
const taskInitialState = {
    listTask: []
};
const task = (state = taskInitialState, action) => {
    switch (action.type) {
        case Types.FETCH_TASK: {
            return {
                ...state,
                listTask: []
            };
        }
        case Types.FETCH_TASK_SUCCESS: {
            const { data } = action.payload;
            return {
                ...state,
                listTask: data
            }
        }
        case Types.FETCH_TASK_FAILED: {
            return {
                ...state,
                listTask: []
            };
        }
        default:
            return state
    }
}

export default task;