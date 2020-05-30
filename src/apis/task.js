import axionService from '../commons/axiosService';
import { API_ENPONT } from '../constants/index';

const url = '/tasks';

export const getList = () => {
    return axionService.get(API_ENPONT+url)
}
