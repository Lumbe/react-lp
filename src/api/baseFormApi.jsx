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
  static create(data){
    return axios.post(this.path(), data)
  }
  static signedurl(data){
    return axios.post(this.path() + 'signedurl', data)
  }

}

export default FormApi;
