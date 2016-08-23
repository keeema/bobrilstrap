import * as b from 'bobril';
import { elem, IBaseData } from './element';
import { typography } from './typography';

export interface IAbbreviationData extends IBaseData {
    initialism?: boolean;
}

interface ICtx extends b.IBobrilCtx {
    data: IAbbreviationData;
}

export const abbreviation = b.createDerivedComponent<IAbbreviationData>(elem, {
    id: 'bobrilstrap-abbreviation',
    render(ctx: ICtx, me: b.IBobrilNode) {
        me.tag = 'abbr';
        b.style(me, ctx.data.initialism && typography.initialism);
    }
});

export const abbr = abbreviation;

export default abbreviation;