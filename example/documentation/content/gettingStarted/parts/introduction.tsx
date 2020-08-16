import * as b from "bobril";
import { IRouteWithNavDefinition } from "../../../../common/routing";

export const introductionRoute: IRouteWithNavDefinition = {
    url: "introduction",
    name: "introduction",
    label: "Introduction",
    handler: () => <Introduction />,
    subs: [
        {
            url: "quick-start",
            name: "quick-start",
            label: "Quick start",
            subs: [],
        },
    ],
};

export function Introduction(): b.IBobrilNode {
    return <h1>Introduction</h1>;
}
