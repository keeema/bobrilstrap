import * as b from 'bobril';
import { pre as basePre, IBaseData } from '../../index';

b.asset('./prettify.css');
b.asset('./atelier-dune-light.css');

const prettyPrint = b.styleDef('prettyprint');

export const pre = b.createDerivedComponent<IBaseData>(basePre, {
    id: 'bobrilstrap-prettify-pre',
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        b.style(me, prettyPrint);
    }
});

export const langJs = b.styleDef('lang-js');
