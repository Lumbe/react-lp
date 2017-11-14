import axios from 'axios';
import BaseApi from './baseApi';

class ProjectApi extends BaseApi {
  static modelName() {
    return 'project';
  }

  static getAll(params = null){
    return axios.get(this.path() + '/public', {params: params})
  }

}

export default ProjectApi;
