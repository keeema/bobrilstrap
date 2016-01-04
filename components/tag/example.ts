import * as b from 'bobril';
import tag from './index';

let boldStyle = b.styleDef({ fontWeight: 'bold' });

b.init(() => [
    tag({ tag: 'p' }, 'Hello world!'),
    tag({ tag: 'p', styles: boldStyle, attrs: { 'data-id': 123} }, 'Hello world!')
]);
