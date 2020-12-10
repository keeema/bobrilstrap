import * as b from "bobril";
import { Nav } from "../../../index";
import { IRouteWithNavDefinition } from "../../common/routing";

export function SidebarItem({ route }: { route: IRouteWithNavDefinition }): b.IBobrilNode {
    const mainItemActive = b.isActive(route.name);
    return (
        <div style={[sidebarItemStyle, mainItemActive && sidebarItemActiveStyle]}>
            <a href={b.urlOfRoute(route.name)} style={[sidebarLinkStyle, mainItemActive && sidebarLinkActiveStyle]}>
                {route.label}
            </a>
            {mainItemActive && !route.oneLevel && (
                <Nav as="ul" style={navStyle}>
                    {route.subs.map((sub) => {
                        const subActive = b.isActive(sub.name);
                        return (
                            <Nav.Item>
                                <Nav.Link
                                    href={b.urlOfRoute(sub.name)}
                                    active={subActive}
                                    style={[navItemLinkStyle, subActive && navItemLinkActiveStyle]}
                                >
                                    {sub.label}
                                </Nav.Link>
                            </Nav.Item>
                        );
                    })}
                </Nav>
            )}
        </div>
    );
}

const sidebarItemStyle = b.styleDef({});
const sidebarItemActiveStyle = b.styleDefEx(sidebarItemStyle, { marginBottom: "1rem" });

const sidebarLinkStyle = b.styleDef(
    {
        display: "block",
        padding: ".25rem 1.5rem",
        fontWeight: 600,
        color: "rgba(0,0,0,.65)",
        textDecoration: "none",
    },
    {
        hover: {
            color: "rgba(0, 0, 0, .85)",
        },
    }
);

const sidebarLinkActiveStyle = b.styleDefEx(sidebarLinkStyle, { color: "rgba(0,0,0,.85)" });

const navStyle = b.styleDef({ display: "block" });

const navItemLinkStyle = b.styleDef(
    {
        display: "block",
        padding: ".25rem 2.25rem",
        fontSize: "80%",
        color: "rgba(0, 0, 0, .65)",
    },
    {
        hover: {
            color: "rgba(0, 0, 0, .85)",
            textDecoration: "none",
        },
    }
);

const navItemLinkActiveStyle = b.styleDefEx(navItemLinkStyle, { color: "rgba(0,0,0,.85)", fontWeight: "bold" });
