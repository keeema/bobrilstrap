import * as b from 'bobril';
import { elem, IBaseData } from './element';

export const h1 = b.createDerivedComponent<IBaseData>(elem, {
    id: 'bobrilstrap-h1',
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.tag = 'h1';
    }
});

export const h2 = b.createDerivedComponent<IBaseData>(elem, {
    id: 'bobrilstrap-h2',
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.tag = 'h2';
    }
});

export const h3 = b.createDerivedComponent<IBaseData>(elem, {
    id: 'bobrilstrap-h3',
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.tag = 'h3';
    }
});

export const h4 = b.createDerivedComponent<IBaseData>(elem, {
    id: 'bobrilstrap-h4',
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.tag = 'h4';
    }
});

export const h5 = b.createDerivedComponent<IBaseData>(elem, {
    id: 'bobrilstrap-h5',
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.tag = 'h5';
    }
});

export const h6 = b.createDerivedComponent<IBaseData>(elem, {
    id: 'bobrilstrap-h6',
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.tag = 'h6';
    }
});