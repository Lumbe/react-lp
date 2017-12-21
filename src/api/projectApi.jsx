import axios from 'axios';
import BaseApi from './baseApi';

class ProjectApi extends BaseApi {
  static modelName() {
    return 'project';
  }

  static getAll(params = null){
    return axios.get(this.path() + '/public', {params: params})
  }

  static getPopular() {
    return axios.get(this.path() + '/popular')
  }

  static getOne(id){
    return axios.get(this.path('/public/' + id))
  }

}

export default ProjectApi;
