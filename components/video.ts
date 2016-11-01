import * as b from 'bobril';
import { elem, IBaseData, IElementBobrilNode } from './element';
import { embedResponsiveStyles } from './embedResponsive';

export interface IVideoData extends IBaseData {
    src: string;
    type: string;
    width?: number;
    height?: number;
    embedResponsive?: boolean;
}

interface IVideoCtx extends b.IBobrilCtx {
    data: IVideoData;
}

export const video = b.createDerivedComponent<IVideoData>(elem, {
    id: 'bobrilstrap-video',
    render(ctx: IVideoCtx, me: IElementBobrilNode) {
        me.tag = 'video';
        b.style(me, !!ctx.data.embedResponsive && embedResponsiveStyles.embedResponsiveItem);
        me.attrs['src'] = ctx.data.src;
        me.attrs['type'] = ctx.data.type;

        if (ctx.data.height !== undefined)
            me.attrs['height'] = ctx.data.height;
        if (ctx.data.width !== undefined)
            me.attrs['width'] = ctx.data.width;
    }
});

export default video;
