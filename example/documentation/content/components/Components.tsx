import * as b from "bobril";

export function Components(data: b.IRouteHandlerData): b.IBobrilNode {
    return <>{data.activeRouteHandler()}</>;
}
