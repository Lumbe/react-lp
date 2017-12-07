import ReactGA from 'react-ga';
import ReactPixel from 'react-facebook-pixel';

export function gaInit() {
  ReactGA.initialize('UA-109956063-1');
}

export function fbInit() {
  ReactPixel.init('1591041674557231');
}