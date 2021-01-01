import * as b from "bobril";
import { IRouteWithNavDefinition } from "../../../common/routing";
import { Helpers } from "./Helpers";
import { clearfixRoute } from "./parts/Clearfix";
import { coloredLinksRoute } from "./parts/ColoredLinks";
import { positionHelperRoute } from "./parts/Position";
import { ratioRoute } from "./parts/Ratio";
import { stretchedLinkRoute } from "./parts/StretchedLink";
import { textTruncationRoute } from "./parts/TextTruncation";
import { visuallyHiddenRoute } from "./parts/VisuallyHidden";

export const helpersRoute: IRouteWithNavDefinition = {
    url: "helpers",
    name: "helpers",
    label: "Helpers",
    handler: (data) => <Helpers {...data} />,
    default: clearfixRoute,
    subs: [clearfixRoute, coloredLinksRoute, ratioRoute, positionHelperRoute, visuallyHiddenRoute, stretchedLinkRoute, textTruncationRoute],
};
