import * as b from 'bobril';
import { pre, IPreData } from '../../index';

b.asset('./prettify.css');
b.asset('./atelier-dune-light.css');

const prettyPrint = b.styleDef('prettyprint');

interface ICtx extends b.IBobrilCtx {
    data: IPreData;
}

export default b.createDerivedComponent<IPreData>(pre, {
    render(ctx: ICtx, me: b.IBobrilNode) {
        b.style(me, prettyPrint);
    }
})

export const langJs = b.styleDef('lang-js');
