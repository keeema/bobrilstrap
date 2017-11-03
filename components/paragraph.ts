import * as b from "bobril";
import { typography } from "./typography";
import { Elem, IBaseData } from "./element";

export interface IParagraphData extends IBaseData {
  lead?: boolean;
  formControlStatic?: boolean;
}

interface ICtx extends b.IBobrilCtx {
  data: IParagraphData;
}

export const paragraphStyles = {
  formControlStatic: b.styleDef("form-control-static")
};

export const P = b.createDerivedComponent<IParagraphData>(Elem, {
  id: "bobrilstrap-paragraph",
  render(ctx: ICtx, me: b.IBobrilNode) {
    me.tag = "p";
    b.style(me, !!ctx.data.lead && typography.lead);
    b.style(
      me,
      !!ctx.data.formControlStatic && paragraphStyles.formControlStatic
    );
  }
});

export const Paragraph = P;

export default P;
