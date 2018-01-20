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

  // static catchError(error){
  //   if (error.response && error.response.status >= 500) {
  //     throw error;
  //   } else if (error.response && error.response.data.error) {
  //     throw error;
  //   } else if (error.response && error.response.data.errors) {
  //     throw error
  //   } else {
  //     console.log('unhandled error', error.response);
  //     throw error
  //   }
  // }

}

export default FormApi;
