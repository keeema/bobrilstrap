import * as b from "bobril";
import { IBaseData } from "./element";
import { H1, H2, H3, H4, H5, H6 } from "./headings";
import { mediaStyles } from "./media";

export const MediaHeading1 = b.createDerivedComponent<IBaseData>(H1, {
  id: "bobrilstrap-media-h1",
  render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
    b.style(me, mediaStyles.mediaHeading);
  }
});

export const MediaHeading2 = b.createDerivedComponent<IBaseData>(H2, {
  id: "bobrilstrap-media-h2",
  render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
    b.style(me, mediaStyles.mediaHeading);
  }
});

export const MediaHeading3 = b.createDerivedComponent<IBaseData>(H3, {
  id: "bobrilstrap-media-h3",
  render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
    b.style(me, mediaStyles.mediaHeading);
  }
});

export const MediaHeading4 = b.createDerivedComponent<IBaseData>(H4, {
  id: "bobrilstrap-media-h4",
  render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
    b.style(me, mediaStyles.mediaHeading);
  }
});

export const MediaHeading5 = b.createDerivedComponent<IBaseData>(H5, {
  id: "bobrilstrap-media-h5",
  render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
    b.style(me, mediaStyles.mediaHeading);
  }
});

export const MediaHeading6 = b.createDerivedComponent<IBaseData>(H6, {
  id: "bobrilstrap-media-h6",
  render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
    b.style(me, mediaStyles.mediaHeading);
  }
});
