import * as b from "bobril";
import * as prismJs from "prismjs";
import { Navigation } from "./navigation/navigation";

export function Main(data: b.IRouteHandlerData): b.IBobrilNode {
    b.useEffect(() => prismJs.highlightAll(), []);

    return (
        <>
            <Navigation />
            {data.activeRouteHandler()}
        </>
    );
}
