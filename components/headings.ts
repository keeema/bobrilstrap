import * as b from 'bobril';
import { Elem, IBaseData } from './element';

export const H1 = b.createDerivedComponent<IBaseData>(Elem, {
    id: 'bobrilstrap-h1',
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.tag = 'h1';
    }
});

export const H2 = b.createDerivedComponent<IBaseData>(Elem, {
    id: 'bobrilstrap-h2',
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.tag = 'h2';
    }
});

export const H3 = b.createDerivedComponent<IBaseData>(Elem, {
    id: 'bobrilstrap-h3',
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.tag = 'h3';
    }
});

export const H4 = b.createDerivedComponent<IBaseData>(Elem, {
    id: 'bobrilstrap-h4',
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.tag = 'h4';
    }
});

export const H5 = b.createDerivedComponent<IBaseData>(Elem, {
    id: 'bobrilstrap-h5',
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.tag = 'h5';
    }
});

export const H6 = b.createDerivedComponent<IBaseData>(Elem, {
    id: 'bobrilstrap-h6',
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.tag = 'h6';
    }
});