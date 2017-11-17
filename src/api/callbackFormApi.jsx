import FormApi from './formApi';

class CallbackFormApi extends FormApi {
  static resourceName() {
    return 'callback';
  }
}

export default CallbackFormApi;
