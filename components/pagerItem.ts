import * as b from "bobril";
import { Li, ILiData } from "./li";
import { createDictionary, IDictionary } from "./bobrilHelpers";

export interface IPagerItemData extends ILiData {
  alignment?: PagerItemAlignment;
}

export enum PagerItemAlignment {
  None,
  Previous,
  Next
}

export const pagerItemStyles = {
  previous: b.styleDef("previous"),
  next: b.styleDef("next")
};

interface IPagerItemCtx extends b.IBobrilCtx {
  data: IPagerItemData;
}

export const pagerItemAlignmentStyles: IDictionary<
  PagerItemAlignment,
  b.IBobrilStyle
> = createDictionary<PagerItemAlignment, b.IBobrilStyle>();
pagerItemAlignmentStyles(PagerItemAlignment.Previous, pagerItemStyles.previous);
pagerItemAlignmentStyles(PagerItemAlignment.Next, pagerItemStyles.next);

export const PagerItem = b.createDerivedComponent<IPagerItemData>(Li, {
  id: "bobrilstrap-pager-item",
  render(ctx: IPagerItemCtx, me: b.IBobrilNode) {
    b.style(
      me,
      !!ctx.data.alignment && pagerItemAlignmentStyles(ctx.data.alignment)
    );
  }
});

export default PagerItem;
