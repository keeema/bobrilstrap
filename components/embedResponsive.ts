import * as b from "bobril";
import { Elem, IBaseData, IElementBobrilNode } from "./element";
import { createDictionary, IDictionary } from "./bobrilHelpers";

export interface IEmbedResponsiveData extends IBaseData {
  aspectRatio?: EmbedAspectRatio;
}

export enum EmbedAspectRatio {
  SixteenByNine,
  FourByThree
}

export const embedResponsiveStyles = {
  embedResponsive: b.styleDef("embed-responsive"),
  embedResponsiveItem: b.styleDef("embed-responsive-item"),
  embedResponsive16by9: b.styleDef("embed-responsive-16by9"),
  embedResponsive4by3: b.styleDef("embed-responsive-4by3")
};

export const embedResponsiveAsoectRatioStyles: IDictionary<
  EmbedAspectRatio,
  b.IBobrilStyle
> = createDictionary<EmbedAspectRatio, b.IBobrilStyle>();
embedResponsiveAsoectRatioStyles(
  EmbedAspectRatio.SixteenByNine,
  embedResponsiveStyles.embedResponsive16by9
);
embedResponsiveAsoectRatioStyles(
  EmbedAspectRatio.FourByThree,
  embedResponsiveStyles.embedResponsive4by3
);

interface IEmbedResponsiveCtx extends b.IBobrilCtx {
  data: IEmbedResponsiveData;
}

export const EmbedResponsive = b.createDerivedComponent<
  IEmbedResponsiveData
>(Elem, {
  id: "bobrilstrap-embed-responsive",
  render(ctx: IEmbedResponsiveCtx, me: IElementBobrilNode) {
    b.style(me, embedResponsiveStyles.embedResponsive);
    b.style(
      me,
      ctx.data.aspectRatio !== undefined &&
        embedResponsiveAsoectRatioStyles(ctx.data.aspectRatio)
    );
  }
});

export default EmbedResponsive;
