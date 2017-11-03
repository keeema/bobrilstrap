import * as b from "bobril";
import { Span, ISpanData } from "./span";

export interface IBadgeData extends ISpanData {}

const badgeStyle = b.styleDef("badge");

export const Badge = b.createDerivedComponent<IBadgeData>(Span, {
  id: "bobrilstrap-badge",
  render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
    b.style(me, badgeStyle);
  }
});
