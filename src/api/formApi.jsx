import axios from 'axios';

class FormApi {
  static apiPath(){
    return 'https://servus.vn.ua/rest/';
  }
  static resourceName(){
    return '';
  }
  static path(path = ''){
    return this.apiPath() + this.resourceName() + path;
  }
  // static getAll(params = null){
  //   return axios.get(this.path(), {params: params})
  // }
  static create(data){
    return axios.post(this.path(), data)
  }
  // static getOne(id){
  //   return axios.get(this.path('/' + id))
  // }

}

export default FormApi;
