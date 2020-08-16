import * as b from "bobril";
import { Nav } from "../../../index";

export function SidebarItem({ active, children }: { active?: boolean; children: string }): b.IBobrilNode {
    return (
        <div style={[sidebarItemStyle, active && sidebarItemActiveStyle]}>
            <a href="#" style={[sidebarLinkStyle, active && sidebarLinkActiveStyle]}>
                {children}
            </a>
            {active && (
                <Nav as="ul" style={navStyle}>
                    <Nav.Item>
                        <Nav.Link style={navItemLinkStyle}>Test 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link active style={[navItemLinkStyle, active && navItemLinkActiveStyle]}>
                            Test 2
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link style={navItemLinkStyle}>Test 3</Nav.Link>
                    </Nav.Item>
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
    },
    {
        hover: {
            color: "rgba(0, 0, 0, .85)",
            textDecoration: "none",
        },
    }
);

const sidebarLinkActiveStyle = b.styleDefEx(sidebarLinkStyle, { color: "rgba(0,0,0,.85)" });

const navStyle = b.styleDef({ display: "block" });

const navItemLinkStyle = b.styleDef(
    {
        display: "block",
        padding: ".25rem 1.5rem",
        fontSize: "90%",
        color: "rgba(0, 0, 0, .65)",
    },
    {
        hover: {
            color: "rgba(0, 0, 0, .85)",
            textDecoration: "none",
        },
    }
);

const navItemLinkActiveStyle = b.styleDefEx(navItemLinkStyle, { color: "rgba(0,0,0,.85)" });
