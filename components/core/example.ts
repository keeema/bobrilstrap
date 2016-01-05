import * as b from 'bobril';
import core from './index';
import elem from 'bobrilstrap-element';

let btnStyle = b.styleDef('btn');
let btnDefaultStyle = b.styleDef('btn-default');

b.init(() => [
    core({}),
    elem({ tag: 'button', styles: [btnStyle, btnDefaultStyle] }, 'Styled component')
]);
