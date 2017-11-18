import FormApi from './baseFormApi';

class ContactFormApi extends FormApi {
  static resourceName() {
    return 'contact';
  }
}

export default ContactFormApi;
