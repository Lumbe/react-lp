import axios from 'axios';
import pluralize from 'pluralize';
axios.defaults.baseURL = 'https://api.servus.vn.ua';

class BaseApi {
  static apiPath(){
    return 'api/v1/';
  }
  static modelName(){
    return '';
  }
  static path(path = ''){
    return this.apiPath() + pluralize(this.modelName()) + path;
  }
  static getAll(params = null){
    return axios.get(this.path(), {params: params})
  }
  // static create(model){
  //   var data = {};
  //   data[this.modelName()] = model;
  //   return axios.post(this.path(), data)
  // }
  static getOne(id){
    return axios.get(this.path('/' + id))
  }
  // static update(model){
  //   var data = {};
  //   data[this.modelName()] = model;
  //   return axios.put(this.path('/' + model.id), data)
  // }
  // static destroy(model){
  //   return axios.delete(this.path('/' + model.id))
  // }
  static catchError(error){
    if (error.response && error.response.status >= 500) {
      throw error;
    } else if (error.response && error.response.data.error) {
      throw error;
    } else if (error.response && error.response.data.errors) {
      throw error
    } else {
      throw error
    }
  }
}

export default BaseApi;
