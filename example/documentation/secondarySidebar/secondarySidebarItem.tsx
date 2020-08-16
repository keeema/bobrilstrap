import * as b from "bobril";

export function SecondarySidebarItem({ children }: { children: string }): b.IBobrilNode {
    return (
        <li style={itemStyle}>
            <a href="#" style={linkStyle}>
                {children}
            </a>
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
