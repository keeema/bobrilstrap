import * as b from "bobril";
import { Elem, IBaseData, IElementBobrilNode } from "./element";
import { createDictionary, IDictionary } from "./bobrilHelpers";
import { helpers } from "./helpers";

export interface IImageData extends IBaseData {
  src: string;
  alt?: string;
  shape?: ImageShape;
  responsive?: boolean;
  centerBlock?: boolean;
  ieSvgFix?: boolean;
  width?: number;
  height?: number;
}

interface ICtx extends b.IBobrilCtx {
  data: IImageData;
}

export const imageStyles = {
  centerBlock: helpers.centerBlock,
  imgResponsive: b.styleDef("img-responsive"),
  imgRounded: b.styleDef("img-rounded"),
  imgCircle: b.styleDef("img-circle"),
  imgThumbnail: b.styleDef("img-thumbnail"),
  ieSvgFix: b.styleDef({ width: "100% \\9" }, undefined, "ie-svg-fix")
};

export enum ImageShape {
  Rounded,
  Circle,
  Thumbnail
}

export const imageShapeStyles: IDictionary<
  ImageShape,
  b.IBobrilStyle
> = createDictionary<ImageShape, b.IBobrilStyle>();
imageShapeStyles(ImageShape.Rounded, imageStyles.imgRounded);
imageShapeStyles(ImageShape.Circle, imageStyles.imgCircle);
imageShapeStyles(ImageShape.Thumbnail, imageStyles.imgThumbnail);

export const Image = b.createDerivedComponent<IImageData>(Elem, {
  id: "bobrilstrap-image",
  render(ctx: ICtx, me: IElementBobrilNode) {
    me.tag = "img";
    me.attrs["src"] = ctx.data.src;
    me.attrs["alt"] = ctx.data.alt;

    if (ctx.data.height !== undefined) me.attrs["height"] = ctx.data.height;
    if (ctx.data.width !== undefined) me.attrs["width"] = ctx.data.width;

    b.style(
      me,
      ctx.data.shape !== undefined && imageShapeStyles(ctx.data.shape)
    );
    b.style(me, !!ctx.data.responsive && imageStyles.imgResponsive);
    b.style(me, !!ctx.data.centerBlock && imageStyles.centerBlock);
    b.style(me, !!ctx.data.ieSvgFix && imageStyles.ieSvgFix);
  }
});

export default Image;
