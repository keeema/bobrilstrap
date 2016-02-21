import * as b from 'bobril';
import elem, { IBaseData } from './element';
import typography from './typography';

export interface IAbbreviationData extends IBaseData {
    title: string;
    initialism?: boolean;
}

interface ICtx extends b.IBobrilCtx {
    data: IAbbreviationData;
}

export let abbreviation = b.createDerivedComponent<IAbbreviationData>(elem, {
    id: 'bobrilstrap-abbreviation',
    render(ctx: ICtx, me: b.IBobrilNode) {
        me.tag = 'abbr';
        me.attrs['title'] = ctx.data.title;
        b.style(me, ctx.data.initialism && typography.initialism);
    }
});

export let abbr = abbreviation;

export default abbreviation;