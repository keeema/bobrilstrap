import * as b from "bobril";
import { IRouteWithNavDefinition } from "../../../common/routing";
import { Forms } from "./Forms";
import { checksAndRadiosRoute } from "./parts/ChecksAndRadios";
import { floatingLabelsRoute } from "./parts/FloatingLabels";
import { formControlsRoute } from "./parts/FormsControls";
import { inputGroupRoute } from "./parts/InputGroup";
import { formLayoutRoute } from "./parts/Layout";
import { overviewRoute } from "./parts/Overview";
import { rangeRoute } from "./parts/Range";
import { selectRoute } from "./parts/Select";

export const forms: IRouteWithNavDefinition = {
    url: "forms",
    name: "forms",
    label: "Forms",
    handler: (data) => <Forms {...data} />,
    default: overviewRoute,
    subs: [
        overviewRoute,
        formControlsRoute,
        selectRoute,
        checksAndRadiosRoute,
        rangeRoute,
        inputGroupRoute,
        floatingLabelsRoute,
        formLayoutRoute,
    ],
};
