import * as b from "bobril";
import * as bs from "../../index";
import { styles } from "../bsexample/css";
import { pre, langJs } from "../prettify/pre";
import { section } from "../common/section";

export const affix = b.createVirtualComponent({
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = section(
            {
                header: "Affix",
                id: "affix",
                lead: []
            },
            [example()]
        );
    }
});

function example(): b.IBobrilChildren {
    return [
        bs.P({}, [
            `The affix plugin toggles `,
            bs.Code({}, "position: fixed;"),
            ` on and off, emulating the effect found with `,
            bs.Code({}, `position: sticky;`),
            `. The subnavigation on the right is a live demo of the affix plugin.`
        ]),
        bs.Figure({ style: styles.highlight }, pre({}, bs.Code({ style: langJs }, [`bs.Affix({ top: 325, bottom: 260 }, ... )`])))
    ];
}
