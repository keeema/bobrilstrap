import * as b from "bobril";
import { Main } from "./main";
import { Home } from "./home/home";
import { Documentation } from "./documentation/documentation";

export interface IRouteWithName extends b.IRoute {
    name: string;
}

export const main: b.IRoute = { handler: (data) => <Main {...data} /> };
export const home: IRouteWithName = { url: "home", name: "home", handler: () => <Home /> };
export const documentation: IRouteWithName = { url: "documentation", name: "documentation", handler: () => <Documentation /> };
