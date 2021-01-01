import * as b from "bobril";

export function Utilities(data: b.IRouteHandlerData): b.IBobrilNode {
    return <>{data.activeRouteHandler()}</>;
}
