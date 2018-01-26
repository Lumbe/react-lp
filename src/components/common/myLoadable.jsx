import Loadable from 'react-loadable';
import Preloader from './preloader';

export default function MyLoadable(opts) {
    return Loadable(Object.assign({
        loading: Preloader,
        delay: 5000,
        timeout: 10000,
    }, opts));
};