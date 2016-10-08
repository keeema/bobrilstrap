import * as b from 'bobril';
import * as bs from '../../index';
import { styles } from '../bsexample/css';

export interface IData {
    header: string;
    lead?: b.IBobrilChildren;
    description?: b.IBobrilChildren;
    children?: b.IBobrilChildren;
    id: string;
}

interface ICtx extends b.IBobrilCtx {
    data: IData;
}

export const section = b.createVirtualComponent<IData>({
    id: 'bs-docs-section',
    render(ctx: ICtx, me: b.IBobrilNode) {
        me.tag = 'div';
        b.style(me, styles.bsDocsSection);
        me.children = [
            b.anchor(bs.h1({ attrs: { id: ctx.data.id }, style: styles.pageHeader }, ctx.data.header)),
            !!ctx.data.lead && bs.p({ lead: true }, ctx.data.lead),
            !!ctx.data.description && bs.p({}, ctx.data.description),
            ctx.data.children
        ];
    }
});