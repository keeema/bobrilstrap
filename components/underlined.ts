import * as b from "bobril";
import { Elem, IBaseData } from "./element";

export const Underlined = b.createDerivedComponent<IBaseData, IBaseData>(Elem, {
    id: "bobrilstrap-underlined",
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.tag = "u";
    },
});

export const U = Underlined;

export default Underlined;
