import * as b from "bobril";

export function Content(data: b.IRouteHandlerData): b.IBobrilNode {
    return <>{data.activeRouteHandler()}</>;
}
