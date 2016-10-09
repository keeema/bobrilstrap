import * as b from 'bobril';
import { elem, IBaseData } from './element';
import { ul, IUlData } from './ul';

export interface IPagerData extends IBaseData {
    ul?: IUlData;
}

interface IPagerCtx extends b.IBobrilCtx {
    data: IPagerData;
}

export const pagerStyles = {
    pager: b.styleDef('pager')
};

export const pager = b.createDerivedComponent<IPagerData>(elem, {
    id: 'bobrilstrap-pager',
    render(ctx: IPagerCtx, me: b.IBobrilNode) {
        me.tag = 'nav';
        me.children = b.style(ul(ctx.data.ul || {}, ctx.data.children), pagerStyles.pager);
    }
});

export default pager;