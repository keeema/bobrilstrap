import * as b from 'bobril';
import { IBaseData } from './element';
import { h1, h2, h3, h4, h5, h6 } from './headings';
import { mediaStyles } from './media';

export const mediaHeading1 = b.createDerivedComponent<IBaseData>(h1, {
    id: 'bobrilstrap-media-h1',
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        b.style(me, mediaStyles.mediaHeading);
    }
});

export const mediaHeading2 = b.createDerivedComponent<IBaseData>(h2, {
    id: 'bobrilstrap-media-h2',
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        b.style(me, mediaStyles.mediaHeading);
    }
});

export const mediaHeading3 = b.createDerivedComponent<IBaseData>(h3, {
    id: 'bobrilstrap-media-h3',
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        b.style(me, mediaStyles.mediaHeading);
    }
});

export const mediaHeading4 = b.createDerivedComponent<IBaseData>(h4, {
    id: 'bobrilstrap-media-h4',
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        b.style(me, mediaStyles.mediaHeading);
    }
});

export const mediaHeading5 = b.createDerivedComponent<IBaseData>(h5, {
    id: 'bobrilstrap-media-h5',
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        b.style(me, mediaStyles.mediaHeading);
    }
});

export const mediaHeading6 = b.createDerivedComponent<IBaseData>(h6, {
    id: 'bobrilstrap-media-h6',
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        b.style(me, mediaStyles.mediaHeading);
    }
});