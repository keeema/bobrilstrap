import * as b from "bobril";
import { NavigationHeader } from "./navigation/header";

export function Main(data: b.IRouteHandlerData): b.IBobrilNode {
    return (
        <>
            <NavigationHeader />
            {data.activeRouteHandler()}
        </>
    );
}
