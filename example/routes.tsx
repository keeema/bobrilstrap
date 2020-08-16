import * as b from "bobril";
import { Main } from "./main";
import { Home } from "./home/home";
import { IRouteWithName } from "./common/routing";
export { documentation } from "./documentation/routeDefs";
export const main: b.IRoute = { handler: (data) => <Main {...data} /> };
export const home: IRouteWithName = { url: "home", name: "home", handler: () => <Home /> };
