import * as b from "bobril";

export interface IRouteWithName extends b.IRoute {
    name: string;
}

export interface IRouteWithNavDefinition extends IRouteWithName {
    label: string;
    subs: IRouteWithNavDefinition[];
    default?: IRouteWithNavDefinition;
}

export function bobrilNavRoute(route: IRouteWithNavDefinition): b.IRoute {
    const subRoutes = route.subs.map((sub) => bobrilNavRoute(sub));
    route.default && subRoutes.push(b.routeDefault(route.default));

    return b.route(route, subRoutes);
}
