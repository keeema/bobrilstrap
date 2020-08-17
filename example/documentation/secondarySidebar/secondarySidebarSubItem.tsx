import * as b from "bobril";
import { IRouteWithNavDefinition } from "../../common/routing";

export function SecondarySidebarSubItem({ route }: { route: IRouteWithNavDefinition }): b.IBobrilNode {
    return (
        <li style={itemStyle}>
            <a href={b.urlOfRoute(route.name)} style={linkStyle}>
                {route.label}
            </a>
        </li>
    );
}

const itemStyle = b.styleDef({
    textDecoration: "none",
    paddingLeft: "1rem",
});

const linkStyle = b.styleDef(
    {
        display: "block",
        padding: ".125rem 1.5rem",
        color: "#77757a",
    },
    {
        hover: {
            color: "rgba(0, 0, 0, .85)",
            textDecoration: "none",
        },
    }
);
