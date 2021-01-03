import * as b from "bobril";
import { Main } from "./Main";
import { Home } from "./home/Home";
import { IRouteWithName } from "./common/routing";
import { documentation as documentationDef } from "./documentation/routeDefs";
import { Donate } from "./donate/Donate";

export const documentation = documentationDef;
export const main: b.IRoute = { handler: (data) => <Main {...data} /> };
export const home: IRouteWithName = { url: "home", name: "home", handler: () => <Home /> };
export const donation: IRouteWithName = { url: "donation", name: "donation", handler: () => <Donate /> };
