import * as b from "bobril";
import { IRouteWithNavDefinition } from "../../common/routing";

export function SecondarySidebarSubItem({ route }: { route: IRouteWithNavDefinition }): b.IBobrilNode {
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
    paddingLeft: "1rem",
});

const linkStyle = b.styleDef(
    {
        display: "block",
        padding: ".125rem 1.5rem",
        color: "#77757a",
        textDecoration: "none",
    },
    {
        hover: {
            color: "rgba(0, 0, 0, .85)",
        },
    }
);

const sectionStyle = b.styleDef({
    paddingLeft: 0,
    listStyleType: "none",
});
