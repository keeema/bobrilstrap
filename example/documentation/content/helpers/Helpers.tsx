import * as b from "bobril";

export function Helpers(data: b.IRouteHandlerData): b.IBobrilNode {
    return <>{data.activeRouteHandler()}</>;
}
