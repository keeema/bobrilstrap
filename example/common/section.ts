import * as b from 'bobril';
import { element, paragraph as p } from '../../index';
import { styles } from '../bsexample/css';

export interface IData {
    header: string;
    lead: string;
    id: string;
}

interface ICtx extends b.IBobrilCtx {
    data: IData;
}

export default b.createVirtualComponent<IData>({
    id: 'bs-docs-section',
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.tag = 'div';
        b.style(me, styles.bsDocsSection);
        me.children = [
            element({ tag: 'h1', attrs: { id: ctx.data.id }, styles: styles.pageHeader }, ctx.data.header),
            p({ styles: styles.lead }, ctx.data.lead),
            ctx.data.children
        ];
    }
});