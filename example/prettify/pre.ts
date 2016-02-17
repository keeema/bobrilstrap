import * as b from 'bobril';
import { pre, IBaseData } from '../../index';

b.asset('./prettify.css');
b.asset('./atelier-dune-light.css');

const prettyPrint = b.styleDef('prettyprint');

export default b.createDerivedComponent<IBaseData>(pre, {
    id: 'bobrilstrap-prettify-pre',
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        b.style(me, prettyPrint);
    }
})

export const langJs = b.styleDef('lang-js');
