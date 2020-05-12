import * as b from "bobril";
import * as bs from "../../index";
import { styles } from "../bsexample/css";
import { isStandalone } from "./pwaHelpers";

export interface IData {
    header: string;
    headerContent: string;
    iconText?: string;
}

interface ICtx extends b.IBobrilCtx {
    data: IData;
}

export const header: b.IComponentFactory<IData> = b.createVirtualComponent<IData>({
    id: "example-header",
    render(ctx: ICtx, me: b.IBobrilNode) {
        me.tag = ctx.data.iconText ? "main" : "div";
        b.style(me, !!ctx.data.iconText && styles.bsDocsMastHead);
        b.style(me, !ctx.data.iconText && styles.bsDocsHeader);
        me.attrs = { id: "content", tabindex: -1 };
        me.children = bs.Container({}, [
            ctx.data.iconText &&
                bs.Span(
                    {
                        style: [styles.bsDocsBooticon, styles.bsDocsBooticonLg, styles.bsDocsBooticonOutline],
                    },
                    ctx.data.iconText
                ),
            bs.H1({}, ctx.data.header),
            bs.P({ lead: !!ctx.data.iconText }, ctx.data.headerContent),
            !!ctx.data.iconText &&
                !isStandalone() &&
                bs.A({ href: "https://badge.fury.io/js/bobrilstrap" }, [
                    bs.Image({
                        src: "https://badge.fury.io/js/bobrilstrap.svg",
                        alt: "npm version",
                        height: 18,
                    }),
                ]),
        ]);
    },
});
