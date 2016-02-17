import * as b from 'bobril';
import elem, { IBaseData } from './element';

export let h1 = b.createDerivedComponent<IBaseData>(elem, {
    id: 'bobrilstrap-h1',
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.tag = 'h1';
    }
});

export let h2 = b.createDerivedComponent<IBaseData>(elem, {
    id: 'bobrilstrap-h2',
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.tag = 'h2';
    }
});

export let h3 = b.createDerivedComponent<IBaseData>(elem, {
    id: 'bobrilstrap-h3',
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.tag = 'h3';
    }
});

export let h4 = b.createDerivedComponent<IBaseData>(elem, {
    id: 'bobrilstrap-h4',
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.tag = 'h4';
    }
});

export let h5 = b.createDerivedComponent<IBaseData>(elem, {
    id: 'bobrilstrap-h5',
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.tag = 'h5';
    }
});

export let h6 = b.createDerivedComponent<IBaseData>(elem, {
    id: 'bobrilstrap-h6',
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.tag = 'h6';
    }
});

