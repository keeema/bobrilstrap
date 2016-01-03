import * as b from 'bobril';
import core from './index';
import tag from 'bobrilstrap-tag';

let btnStyle = b.styleDef('btn');
let btnDefaultStyle = b.styleDef('btn-default');

b.init(() => [
    core({}),
    b.style(tag({ tag: 'button', styles: [btnStyle, btnDefaultStyle] }, 'Test'))
]);
