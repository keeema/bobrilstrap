import * as b from 'bobril';
import { IBaseData } from './element';
import { h1, h2, h3, h4, h5, h6 } from './headings';
import { listGroupStyles } from './listGroup';

export const listGroupItemHeading1 = b.createDerivedComponent<IBaseData>(h1, {
    id: 'listgroup-item-h1',
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        b.style(me, listGroupStyles.listGroupItemHeading);
    }
});

export const listGroupItemHeading2 = b.createDerivedComponent<IBaseData>(h2, {
    id: 'listgroup-item-h2',
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        b.style(me, listGroupStyles.listGroupItemHeading);
    }
});

export const listGroupItemHeading3 = b.createDerivedComponent<IBaseData>(h3, {
    id: 'listgroup-item-h3',
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        b.style(me, listGroupStyles.listGroupItemHeading);
    }
});

export const listGroupItemHeading4 = b.createDerivedComponent<IBaseData>(h4, {
    id: 'listgroup-item-h4',
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        b.style(me, listGroupStyles.listGroupItemHeading);
    }
});

export const listGroupItemHeading5 = b.createDerivedComponent<IBaseData>(h5, {
    id: 'listgroup-item-h5',
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        b.style(me, listGroupStyles.listGroupItemHeading);
    }
});

export const listGroupItemHeading6 = b.createDerivedComponent<IBaseData>(h6, {
    id: 'listgroup-item-h6',
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        b.style(me, listGroupStyles.listGroupItemHeading);
    }
});