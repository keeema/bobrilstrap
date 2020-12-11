import * as b from "bobril";
import { IRouteWithNavDefinition } from "../../../../../common/routing";
import { GridOptions } from "./GridOptions";
import { AutoLayoutColumns } from "./AutoLayoutColumns";
import { Responsive } from "./Responsive";
import { HowItWorks } from "./HowItWorks";
import { Anchor } from "../../../../../common/Anchor";

export const gridRoute: IRouteWithNavDefinition = {
    url: "grid",
    name: "grid",
    label: "Grid",
    handler: () => <Grid />,
    subs: [
        {
            url: "how-it-works",
            name: "how-it-works",
            label: "How it works",
            subs: [],
        },
        {
            url: "grid-options",
            name: "grid-options",
            label: "Grid options",
            subs: [],
        },
        {
            url: "auto-layout-columns",
            name: "auto-layout-columns",
            label: "Auto-layout columns",
            subs: [
                {
                    url: "equal-width",
                    name: "equal-width",
                    label: "Equal width",
                    subs: [],
                },
                {
                    url: "equal-width-multi-line",
                    name: "equal-width-multi-line",
                    label: "Equal-width multi-line",
                    subs: [],
                },
                {
                    url: "setting-one-column-width",
                    name: "setting-one-column-width",
                    label: "Setting one column width",
                    subs: [],
                },
                {
                    url: "variable-width-content",
                    name: "variable-width-content",
                    label: "Variable width content",
                    subs: [],
                },
            ],
        },
        {
            url: "responsive-behavior",
            name: "responsive-behavior",
            label: "Responsive behavior",
            subs: [
                {
                    url: "all-breakpoints",
                    name: "all-breakpoints",
                    label: "All breakpoints",
                    subs: [],
                },
                {
                    url: "stacked-horizontal",
                    name: "stacked-horizontal",
                    label: "Stacked horizontal",
                    subs: [],
                },
                {
                    url: "mix-and-match",
                    name: "mix-and-match",
                    label: "Mix and match",
                    subs: [],
                },
                {
                    url: "row-columns",
                    name: "row-columns",
                    label: "Row columns",
                    subs: [],
                },
            ],
        },
        {
            url: "nesting",
            name: "nesting",
            label: "Nesting",
            subs: [],
        },
    ],
};

export function Grid(): b.IBobrilNode {
    return (
        <>
            <Anchor name="grid">
                <h1>Grid</h1>
            </Anchor>
            <HowItWorks />
            <GridOptions />
            <AutoLayoutColumns />
            <Responsive />
        </>
    );
}
