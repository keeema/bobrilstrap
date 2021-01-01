import * as b from "bobril";
import { IRouteWithNavDefinition } from "../../../common/routing";
import { bordersRoute } from "./parts/Borders";
import { Utilities } from "./Utilities";

export const utilitiesRoute: IRouteWithNavDefinition = {
    url: "utilities",
    name: "utilities",
    label: "Utilities",
    handler: (data) => <Utilities {...data} />,
    default: bordersRoute,
    subs: [bordersRoute],
};
