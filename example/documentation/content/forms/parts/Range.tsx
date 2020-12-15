import * as b from "bobril";
import { IRouteWithNavDefinition } from "../../../../common/routing";
import { Anchor } from "../../../../common/Anchor";
import { Example } from "../../../../common/Example";
import { Form } from "../../../../../index";
import { Code } from "../../../../common/Code";
import { Lead } from "../../../../common/Lead";

export const rangeRoute: IRouteWithNavDefinition = {
    url: "range",
    name: "range",
    label: "Range",
    handler: () => <RangeDoc />,
    subs: [
        {
            url: "overview",
            name: "range-overview",
            label: "Overview",
            subs: [],
        },
        {
            url: "disabled",
            name: "range-disabled",
            label: "Disabled",
            subs: [],
        },
        {
            url: "min-and-max",
            name: "range-min-and-max",
            label: "Min and max",
            subs: [],
        },
        {
            url: "steps",
            name: "range-steps",
            label: "Steps",
            subs: [],
        },
    ],
};

export function RangeDoc(): b.IBobrilNode {
    return (
        <>
            <Anchor name="range">
                <h1>Range</h1>
            </Anchor>
            <Lead>Use custom range inputs for consistent cross-browser styling and built-in customization.</Lead>
            <Anchor name="range-overview">
                <h2>Overview</h2>
            </Anchor>
            <p>
                Create custom <code>{`<Form.Input type="range">`}</code> controls. The track (the background) and thumb (the value) are both
                styled to appear the same across browsers. As only Edge Legacy and Firefox support “filling” their track from the left or
                right of the thumb as a means to visually indicate progress, we do not currently support it.
            </p>
            <Example>
                <Form.Label for="customRange1">Example range</Form.Label>
                <Form.Input type="range" id="customRange1" />
            </Example>
            <Code language="tsx">{`<Form.Label for="customRange1">Example range</Form.Label>
<Form.Input type="range" id="customRange1" />`}</Code>
            <Anchor name="range-disabled">
                <h2>Disabled</h2>
            </Anchor>
            <Example>
                <Form.Label for="disabledRange">Example range</Form.Label>
                <Form.Input type="range" id="disabledRange" disabled />
            </Example>
            <Code language="tsx">{`<Form.Label for="disabledRange">Example range</Form.Label>
<Form.Input type="range" id="disabledRange" disabled />`}</Code>
            <Anchor name="range-min-and-max">
                <h2>Min and max</h2>
            </Anchor>
            <p>
                Range inputs have implicit values for <code>min</code> and <code>max</code> - <code>0</code> and <code>100</code>,
                respectively. You may specify new values for those using the <code>min</code> and <code>max</code> attributes.
            </p>
            <Example>
                <Form.Label for="customRange2">Example range</Form.Label>
                <Form.Input type="range" id="customRange2" min={0} max={5} />
            </Example>
            <Code language="tsx">{`<Form.Label for="customRange2">Example range</Form.Label>
<Form.Input type="range" id="customRange2" min={0} max={5} />`}</Code>
            <Anchor name="range-steps">
                <h2>Steps</h2>
            </Anchor>
            <p>
                By default, range inputs “snap” to integer values. To change this, you can specify a step value. In the example below, we
                double the number of steps by using <code>{`step={0.5}`}</code>.
            </p>
            <Example>
                <Form.Label for="customRange3">Example range</Form.Label>
                <Form.Input type="range" id="customRange3" min={0} max={5} step={0.5} />
            </Example>
            <Code language="tsx">{`<Form.Label for="customRange3">Example range</Form.Label>
<Form.Input type="range" id="customRange3" min={0} max={5} step={0.5} />`}</Code>
        </>
    );
}
