import * as b from "bobril";
import { IRouteWithNavDefinition } from "../../common/routing";
import { SecondarySidebarSubItem } from "./SecondarySidebarSubItem";

export function SecondarySidebarItem({ route }: { route: IRouteWithNavDefinition }): b.IBobrilNode {
    return (
        <li style={itemStyle}>
            <a href={b.urlOfRoute(route.name)} style={linkStyle}>
                {route.label}
            </a>
            {route.subs.length > 0 && (
                <ul style={sectionStyle}>
                    {route.subs.map((sub) => (
                        <SecondarySidebarSubItem route={sub} />
                    ))}
                </ul>
            )}
        </li>
    );
}

const itemStyle = b.styleDef({
    textDecoration: "none",
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

const sectionStyle = b.styleDef({
    paddingLeft: 0,
    listStyleType: "none",
});
