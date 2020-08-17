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
    if (route.default) {
        const url = route.default.url!;
        subRoutes.push(
            b.routeDefault({
                name: url + "Default",
                url: url,
                handler: {
                    canActivate() {
                        return b.createRedirectReplace(url);
                    },
                },
            })
        );
    }
    return b.route(route, subRoutes);
}

export function currentActiveSubRoute(route: IRouteWithNavDefinition): IRouteWithNavDefinition {
    for (const sub of route.subs) {
        if (b.isActive(sub.name)) {
            return sub;
        }
    }

    throw new Error(`No active route from ${route.name}`);
}
