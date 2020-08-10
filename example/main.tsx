import * as b from "bobril";
import { Navigation } from "./navigation/navigation";

export function Main(data: b.IRouteHandlerData): b.IBobrilNode {
    return (
        <>
            <Navigation />
            {data.activeRouteHandler()}
        </>
    );
}
