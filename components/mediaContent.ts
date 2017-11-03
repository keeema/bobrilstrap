import * as b from "bobril";
import { Elem, IBaseData } from "./element";
import { createDictionary, IDictionary } from "./bobrilHelpers";

export enum MediaContentAlignment {
  Left = 0,
  Body = 1,
  Right = 2,
  Top = 3,
  Middle = 4,
  Bottom = 5
}

export interface IMediaContentData extends IBaseData {
  alignment: MediaContentAlignment | MediaContentAlignment[];
}

interface IMediaContentCtx extends b.IBobrilCtx {
  data: IMediaContentData;
}

export const mediaContentStyles = {
  mediaLeft: b.styleDef("media-left"),
  mediaBody: b.styleDef("media-body"),
  mediaRight: b.styleDef("media-right"),
  mediaTop: b.styleDef("media-top"),
  mediaMiddle: b.styleDef("media-middle"),
  mediaBottom: b.styleDef("media-bottom")
};

export const medialContentAlignmentStyles: IDictionary<
  MediaContentAlignment,
  b.IBobrilStyle
> = createDictionary<MediaContentAlignment, b.IBobrilStyle>();
medialContentAlignmentStyles(
  MediaContentAlignment.Left,
  mediaContentStyles.mediaLeft
);
medialContentAlignmentStyles(
  MediaContentAlignment.Body,
  mediaContentStyles.mediaBody
);
medialContentAlignmentStyles(
  MediaContentAlignment.Right,
  mediaContentStyles.mediaRight
);
medialContentAlignmentStyles(
  MediaContentAlignment.Top,
  mediaContentStyles.mediaTop
);
medialContentAlignmentStyles(
  MediaContentAlignment.Middle,
  mediaContentStyles.mediaMiddle
);
medialContentAlignmentStyles(
  MediaContentAlignment.Bottom,
  mediaContentStyles.mediaBottom
);

export const MediaContent = b.createDerivedComponent<IMediaContentData>(Elem, {
  id: "bobrilstrap-media-content",
  render(ctx: IMediaContentCtx, me: b.IBobrilNode) {
    const alignments =
      ctx.data.alignment instanceof Array
        ? ctx.data.alignment
        : [ctx.data.alignment];
    alignments.forEach(alignment =>
      b.style(me, medialContentAlignmentStyles(alignment))
    );
  }
});

export default MediaContent;
