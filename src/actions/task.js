import * as taskApi from '../apis/task';
import * as taskConstants from '../constants/task';
export const fectListTask = () => {
    return {
        type: taskConstants.FETCH_TASK
    }
}

export const fectListTaskSuccess = data => {
    return {
        type: taskConstants.FETCH_TASK_SUCCESS,
        payload: {
            data
        }
    }
}

export const fectListTaskFailed = error => {
    return {
        type: taskConstants.FETCH_TASK_FAILED,
        payload: {
            error
        }
    }
}

export const fectListTaskRequest = () => {
    return dispatch => {
        dispatch(fectListTask());
        taskApi.getList()
            .then(res => dispatch(fectListTaskSuccess(res.data)))
            .catch(error => dispatch(fectListTaskFailed(error)));
    }
}