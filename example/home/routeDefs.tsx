import * as b from "bobril";
import { IRouteWithNavDefinition } from "../common/routing";
import { gettingStarted } from "./content/gettingStarted/routeDefs";
import { Home } from "./home";

export const hone: IRouteWithNavDefinition = {
    url: "home",
    name: "home",
    label: "Home",
    handler: (data) => <Home {...data} />,
    subs: [
        {
            url: "quick-start",
            name: "quick-start",
            label: "Quick start",
            subs: [
                {
                    url: "test-1",
                    name: "test-1",
                    label: "Test 1",
                    subs: [],
                },
                {
                    url: "test-2",
                    name: "test-2",
                    label: "Test 2",
                    subs: [],
                },
            ],
        },
        {
            url: "theming",
            name: "theming",
            label: "Theming",
            subs: [],
        },
    ],
    default: gettingStarted,
};
