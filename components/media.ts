import * as b from "bobril";
import { Elem, IBaseData } from "./element";
import { mediaContentStyles } from "./mediaContent";

export interface IMediaData extends IBaseData {}

interface IMediaCtx extends b.IBobrilCtx {
  data: IMediaData;
}

export const mediaStyles = {
  media: b.styleDef("media"),
  mediaLeft: mediaContentStyles.mediaLeft,
  mediaBody: mediaContentStyles.mediaBody,
  mediaRight: mediaContentStyles.mediaRight,
  mediaTop: mediaContentStyles.mediaTop,
  mediaMiddle: mediaContentStyles.mediaMiddle,
  mediaBottom: mediaContentStyles.mediaBottom,
  mediaHeading: b.styleDef("media-heading"),
  mediaObject: b.styleDef("media-object"),
  mediaList: b.styleDef("media-list")
};

export const Media = b.createDerivedComponent<IMediaData>(Elem, {
  id: "bobrilstrap-media",
  render(_ctx: IMediaCtx, me: b.IBobrilNode) {
    b.style(me, mediaStyles.media);
  }
});
