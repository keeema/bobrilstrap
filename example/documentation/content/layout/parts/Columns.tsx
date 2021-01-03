import * as b from "bobril";
import { IRouteWithNavDefinition } from "../../../../common/routing";
import { Anchor } from "../../../../common/Anchor";
import {} from "../../../../../index";
import { Lead } from "../../../../common/Lead";
import { Alignment } from "./columns/Alignment";
import { Reordering } from "./columns/Reordering";

export const columnsRoute: IRouteWithNavDefinition = {
    url: "columns",
    name: "columns",
    label: "Columns",
    handler: () => <ColumnsDoc />,
    subs: [
        {
            url: "alignment",
            name: "alignment",
            label: "Alignment",
            subs: [
                {
                    url: "vertical-alignment",
                    name: "vertical-alignment",
                    label: "Vertical alignment",
                    subs: [],
                },
                {
                    url: "horizontal-alignment",
                    name: "horizontal-alignment",
                    label: "Horizontal alignment",
                    subs: [],
                },
                {
                    url: "column-wrapping",
                    name: "column-wrapping",
                    label: "Column wrapping",
                    subs: [],
                },
                {
                    url: "column-breaks",
                    name: "column-breaks",
                    label: "Column breaks",
                    subs: [],
                },
            ],
        },
        {
            url: "reordering",
            name: "reordering",
            label: "Reordering",
            subs: [
                {
                    url: "order-utilities",
                    name: "order-utilities",
                    label: "Order utilities",
                    subs: [],
                },
                {
                    url: "offsetting-columns",
                    name: "offsetting-columns",
                    label: "Offsetting columns",
                    subs: [
                        {
                            url: "offsets",
                            name: "offsets",
                            label: "offsets",
                            subs: [],
                        },
                        {
                            url: "margin-utilities",
                            name: "margin-utilities",
                            label: "Margin utilities",
                            subs: [],
                        },
                    ],
                },
            ],
        },
    ],
};

export function ColumnsDoc(): b.IBobrilNode {
    return (
        <>
            <Anchor name="columns">
                <h1>Columns</h1>
            </Anchor>
            <Lead>
                Learn how to modify columns with a handful of options for alignment, ordering, and offsetting thanks to our flexbox grid
                system. Plus, see how to use column utilities to manage widths of non-grid elements.
            </Lead>
            <Alignment />
            <Reordering />
        </>
    );
}
