import * as b from 'bobril';
import elem from './index';

let boldStyle = b.styleDef({ fontWeight: 'bold' });

b.init(() => [
    elem({ tag: 'p' }, 'Hello world!'),
    elem({ tag: 'p', styles: boldStyle, attrs: { 'data-id': 123} }, 'Hello world!')
]);
