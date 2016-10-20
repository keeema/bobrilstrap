import * as b from 'bobril';
import { elem, IBaseData } from './element';
import { progressBar, IProgressBarData } from './progressBar';
import { mergeToChildren } from './bobrilHelpers';

export interface IProgressData extends IBaseData {
    bars?: IProgressBarData[];
}

interface IProgressCtx extends b.IBobrilCtx {
    data: IProgressData;
}

export const progressStyle = b.styleDef('progress');

export const progress = b.createDerivedComponent<IProgressData>(elem, {
    id: 'bobrilstrap-progress',
    render(ctx: IProgressCtx, me: b.IBobrilCacheNode) {
        b.style(me, progressStyle);
        if (ctx.data.bars) {
            ctx.data.bars.forEach(barData => mergeToChildren(me, progressBar(barData)));
        }

    }
});