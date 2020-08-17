import * as b from "bobril";
import { IRouteWithNavDefinition } from "../../../../common/routing";
import { LoremIpsum } from "../../../../common/loremIpsim";
import { Anchor } from "../../../../common/anchor";

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
            subs: [
                {
                    url: "test-1",
                    name: "test-2",
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
};

export function Introduction(): b.IBobrilNode {
    return (
        <>
            <h1>Introduction</h1>
            <LoremIpsum />
            <Anchor name="quick-start">
                <h2>Quick Start</h2>
            </Anchor>
            <LoremIpsum />
            <LoremIpsum />
            <Anchor name="test-1">
                <h2>Test 1</h2>
            </Anchor>
            <LoremIpsum />
            <LoremIpsum />
            <Anchor name="test-2">
                <h2>Test 2</h2>
            </Anchor>
            <LoremIpsum />
        </>
    );
}
