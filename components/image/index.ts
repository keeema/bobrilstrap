import * as b from 'bobril';
import elem, { IBaseData } from 'bobrilstrap-element';

export interface IData extends IBaseData {
    src: string;
    alt?: string;
    shape?: Shape;

}

interface ICtx extends b.IBobrilCtx {
    data: IData;
}

export let imageStyle = {
    centerBlock: b.styleDef('center-block'),
    imgResponsive: b.styleDef('img-responsive'),
    imgRounded: b.styleDef('img-rounded'),
    imgCircle: b.styleDef('img-circle'),
    imgThumbnail: b.styleDef('img-thumbnail')
};

export class Shape {
    static rounded: b.IBobrilStyle = imageStyle.imgRounded;
    static circle: b.IBobrilStyle = imageStyle.imgCircle;
    static thumbnail: b.IBobrilStyle = imageStyle.imgThumbnail;
}

export let create = b.createDerivedComponent<IData>(elem, {
    id: 'bobrilstrap-image',
    render(ctx: ICtx, me: b.IBobrilNode) {
        me.tag = 'img';
        me.attrs['src'] = ctx.data.src;
        me.attrs['alt'] = ctx.data.alt;
        b.style(me, ctx.data.shape);

    }
});

export default create;
