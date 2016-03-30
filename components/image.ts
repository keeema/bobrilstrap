import * as b from 'bobril';
import elem, { IBaseData } from './element';
import { createDictionary } from './bobrilHelpers';

export interface IImageData extends IBaseData {
    src: string;
    alt?: string;
    shape?: ImageShape;

}

interface ICtx extends b.IBobrilCtx {
    data: IImageData;
}

export const imageStyle = {
    centerBlock: b.styleDef('center-block'),
    imgResponsive: b.styleDef('img-responsive'),
    imgRounded: b.styleDef('img-rounded'),
    imgCircle: b.styleDef('img-circle'),
    imgThumbnail: b.styleDef('img-thumbnail')
};

export enum ImageShape {
    rounded,
    circle,
    thumbnail
}

export const imageShapeStyles = createDictionary<ImageShape, b.IBobrilStyle>();
imageShapeStyles(ImageShape.rounded, imageStyle.imgRounded);
imageShapeStyles(ImageShape.circle, imageStyle.imgCircle);
imageShapeStyles(ImageShape.thumbnail, imageStyle.imgThumbnail);

export let image = b.createDerivedComponent<IImageData>(elem, {
    id: 'bobrilstrap-image',
    render(ctx: ICtx, me: b.IBobrilNode) {
        me.tag = 'img';
        me.attrs['src'] = ctx.data.src;
        me.attrs['alt'] = ctx.data.alt;
        b.style(me, imageShapeStyles(ctx.data.shape));

    }
});

export default image;
