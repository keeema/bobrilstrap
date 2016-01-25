import * as b from 'bobril';
import * as bsCore from './index';
import elem from 'bobrilstrap-element';

bsCore.init();

let btnStyle = b.styleDef('btn');
let btnDefaultStyle = b.styleDef('btn-default');

b.init(() => [
    elem({ tag: 'button', styles: [btnStyle, btnDefaultStyle] }, 'Styled component')
]);
