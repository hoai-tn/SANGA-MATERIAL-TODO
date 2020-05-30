import axios from 'axios';
class AxiosService {
    constructor() {
         let  instance = axios.create();
         instance.interceptors.response.use(this.handleSucces, this.handleError);
         this.instance = instance;
    }
    handleSucces(response) {
        return response;
    }
    handleError(error) {
        return Promise.reject(error);
    }
    get(url) {
        return this.instance.get(url);
    }

};

export default new AxiosService();//khai bao new thi se chay vao constructor dau tien   