import * as b from "bobril";
import * as bs from "../../index";
import { styles } from "../bsexample/css";
import { persistentScrollContainer } from "./persistentScrollContainer";
import { docsSidebar, IDocsSidebarData } from "./docsSidebar";

export interface IDocsContainerData {
    children?: b.IBobrilChildren;
    id: string;
    sidebar?: IDocsSidebarData;
}

interface ICtx extends b.IBobrilCtx {
    data: IDocsContainerData;
}
const mainConainerStyle = b.styleDef({ paddingTop: 50 });

export const docsContainer = b.createVirtualComponent<IDocsContainerData>({
    id: "example-docs-container",
    render(ctx: ICtx, me: b.IBobrilNode) {
        me.children = [
            b.style(
                persistentScrollContainer(
                    {
                        id: ctx.data.id,
                        style: styles.bsDocsContainer,
                    },
                    bs.Row({}, [
                        bs.Col({ size: bs.Size.Md, span: 9, attrs: { role: "main" } }, ctx.data.children),
                        !!ctx.data.sidebar &&
                            bs.Col({ size: bs.Size.Md, span: 3, attrs: { role: "complementary" } }, docsSidebar(ctx.data.sidebar)),
                    ])
                ),
                ctx.data.id === "bobrilstrap" && mainConainerStyle
            ),
        ];
    },
});
