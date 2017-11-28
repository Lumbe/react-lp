import ReactGA from 'react-ga'

export default function gaException(exceptions) {
  let errors = [];
  for (let key in exceptions) {
    errors.push(`${key}: ${exceptions[key]}`)
  }
  ReactGA.exception({
    description: errors.join(';'),
    fatal: false
  });
}