import * as b from 'bobril';
import elem, { IBaseData } from './element';
import { createDictionary } from './bobrilHelpers';
import helpers from './helpers';

export interface IImageData extends IBaseData {
    src: string;
    alt?: string;
    shape?: ImageShape;
    responsive?: boolean;
    centerBlock?: boolean;
    ieSvgFix?: boolean;
}

interface ICtx extends b.IBobrilCtx {
    data: IImageData;
}

export const imageStyles = {
    centerBlock: helpers.centerBlock,
    imgResponsive: b.styleDef('img-responsive'),
    imgRounded: b.styleDef('img-rounded'),
    imgCircle: b.styleDef('img-circle'),
    imgThumbnail: b.styleDef('img-thumbnail'),
    ieSvgFix: b.styleDef({ width: '100% \\9' }, null, 'ie-svg-fix')
};

export enum ImageShape {
    rounded,
    circle,
    thumbnail
}

export const imageShapeStyles = createDictionary<ImageShape, b.IBobrilStyle>();
imageShapeStyles(ImageShape.rounded, imageStyles.imgRounded);
imageShapeStyles(ImageShape.circle, imageStyles.imgCircle);
imageShapeStyles(ImageShape.thumbnail, imageStyles.imgThumbnail);

export let image = b.createDerivedComponent<IImageData>(elem, {
    id: 'bobrilstrap-image',
    render(ctx: ICtx, me: b.IBobrilNode) {
        me.tag = 'img';
        me.attrs['src'] = ctx.data.src;
        me.attrs['alt'] = ctx.data.alt;
        b.style(me, imageShapeStyles(ctx.data.shape));
        b.style(me, ctx.data.responsive && imageStyles.imgResponsive);
        b.style(me, ctx.data.centerBlock && imageStyles.centerBlock);
        b.style(me, ctx.data.ieSvgFix && imageStyles.ieSvgFix);
    }
});

export default image;
