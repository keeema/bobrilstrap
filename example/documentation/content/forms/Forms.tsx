import * as b from "bobril";

export function Forms(data: b.IRouteHandlerData): b.IBobrilNode {
    return <>{data.activeRouteHandler()}</>;
}
