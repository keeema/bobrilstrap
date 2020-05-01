import * as b from "bobril";
import * as bs from "../../index";
import { styles } from "../bsexample/css";
import { pre, langJs } from "../prettify/pre";
import { section } from "../common/section";

export const wells = b.createVirtualComponent({
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode) {
        me.children = section(
            {
                header: "Wells",
                id: "wells",
                lead: []
            },
            [defaultWell(), optionalStyles()]
        );
    }
});

function defaultWell(): b.IBobrilChildren {
    return [
        bs.H2({ attrs: { id: "default-well" } }, "Default well"),
        bs.P({}, [`Use the well as a simple effect on an element to give it an inset effect.`]),
        bs.E(
            {
                style: [styles.bsCallout, styles.bsCalloutInfo],
                attrs: { id: "callout-alerts-no-default" }
            },
            [bs.Well({}, "Look, I'm in a well!")]
        ),
        bs.Figure({ style: styles.highlight }, pre({}, bs.Code({ style: langJs }, [`bs.Well({}, 'Look, I\\'m in a well!')`])))
    ];
}

function optionalStyles(): b.IBobrilChildren {
    return [
        bs.H2({ attrs: { id: "optional-styles" } }, "Optional classes"),
        bs.P({}, [`Control padding and rounded corners with two optional modifier classes.`]),
        bs.E({ style: styles.bsExample }, [bs.Well({ size: bs.WellSize.Lg }, "Look, I'm in a large well!")]),
        bs.Figure(
            { style: styles.highlight },
            pre({}, bs.Code({ style: langJs }, [` bs.Well({ size: bs.WellSize.Lg }, 'Look, I\\'m in a large well!')`]))
        ),
        bs.E({ style: styles.bsExample }, [bs.Well({ size: bs.WellSize.Sm }, "Look, I'm in a small well!")]),
        bs.Figure(
            { style: styles.highlight },
            pre({}, bs.Code({ style: langJs }, [` bs.Well({ size: bs.WellSize.Sm }, 'Look, I\\'m in a small well!')`]))
        )
    ];
}
