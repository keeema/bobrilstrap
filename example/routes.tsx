import * as b from "bobril";
import { Main } from "./Main";
import { Home } from "./home/Home";
import { IRouteWithName } from "./common/routing";
import { documentation as documentationDef } from "./documentation/routeDefs";

export const documentation = documentationDef;
export const main: b.IRoute = { handler: (data) => <Main {...data} /> };
export const home: IRouteWithName = { url: "home", name: "home", handler: () => <Home /> };
