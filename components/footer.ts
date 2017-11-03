import * as b from "bobril";
import { Elem, IBaseData } from "./element";

export const Footer = b.createDerivedComponent<IBaseData>(Elem, {
  id: "bobrilstrap-footer",
  render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
    me.tag = "footer";
  }
});

export default Footer;
