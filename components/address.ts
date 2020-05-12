import * as b from "bobril";
import { Elem, IBaseData } from "./element";

export const Address = b.createDerivedComponent<IBaseData, IBaseData>(Elem, {
    id: "bobrilstrap-address",
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.tag = "address";
    },
});

export default Address;
