import * as b from 'bobril';
import elem, { IBaseData } from './element';

export interface IImageData extends IBaseData {
    src: string;
    alt?: string;
    shape?: ImageShape;

}

interface ICtx extends b.IBobrilCtx {
    data: IImageData;
}

export let imageStyle = {
    centerBlock: b.styleDef('center-block'),
    imgResponsive: b.styleDef('img-responsive'),
    imgRounded: b.styleDef('img-rounded'),
    imgCircle: b.styleDef('img-circle'),
    imgThumbnail: b.styleDef('img-thumbnail')
};

export class ImageShape {
    static rounded: b.IBobrilStyle = imageStyle.imgRounded;
    static circle: b.IBobrilStyle = imageStyle.imgCircle;
    static thumbnail: b.IBobrilStyle = imageStyle.imgThumbnail;
}

export default b.createDerivedComponent<IImageData>(elem, {
    id: 'bobrilstrap-image',
    render(ctx: ICtx, me: b.IBobrilNode) {
        me.tag = 'img';
        me.attrs['src'] = ctx.data.src;
        me.attrs['alt'] = ctx.data.alt;
        b.style(me, ctx.data.shape);

    }
});
