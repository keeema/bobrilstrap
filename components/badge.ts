import * as b from 'bobril';
import { span, ISpanData } from './span';

export interface IBadgeData extends ISpanData { }

const badgeStyle = b.styleDef('badge');

export const badge = b.createDerivedComponent<IBadgeData>(span, {
    id: 'bobrilstrap-badge',
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        b.style(me, badgeStyle);
    }
});
