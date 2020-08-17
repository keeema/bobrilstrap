import * as b from "bobril";

export function Anchor({ children, name, params }: { children: b.IBobrilChildren; name?: string; params?: b.Params }): b.IBobrilNode {
    return b.anchor(children, name, params);
}
