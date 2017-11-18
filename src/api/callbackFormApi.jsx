import FormApi from './baseFormApi';

class CallbackFormApi extends FormApi {
  static resourceName() {
    return 'callback';
  }
}

export default CallbackFormApi;
