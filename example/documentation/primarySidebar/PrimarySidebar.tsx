import * as b from "bobril";
import { Col, Button, display, margin } from "../../../index";
import { SidebarItem } from "./PrimarySidebarItem";
import { documentation } from "../routeDefs";
import { ResponsiveMenu } from "./ResponsiveMenu";

export function PrimarySidebar(): b.IBobrilNode {
    const isSmallDevice = (): boolean => window.innerWidth < 768;
    const smallDevice = b.useState(isSmallDevice());
    const [collapsed, setCollapsed] = b.useState(smallDevice());

    b.useLayoutEffect(() => {
        const handler = (): void => {
            if (smallDevice() !== isSmallDevice()) {
                smallDevice(isSmallDevice());
                setCollapsed(isSmallDevice());
            }
        };
        window.addEventListener("resize", handler);
        return () => window.removeEventListener("resize", handler);
    }, []);

    return (
        <Col span={12} md={3} xl={2} style={[sidebarStyle, smallDevice() ? smallDeviceHeight : standardHeight]}>
            <Button
                variant="dark"
                onClick={() => setCollapsed(!collapsed)}
                style={[display("none", "md"), margin("auto"), display("block")]}
            >
                Part
            </Button>
            <ResponsiveMenu collapsed={collapsed} isSmallDevice={smallDevice()} onClick={() => setCollapsed(smallDevice())}>
                {documentation.subs.map((sub) => (
                    <SidebarItem route={sub} />
                ))}
            </ResponsiveMenu>
        </Col>
    );
}

const sidebarStyle = b.styleDef({
    borderRight: "1px solid rgba(0,0,0,.1)",
});

const standardHeight = b.styleDef({
    position: "sticky",
    top: "4rem",
    height: "calc(100vh - 4rem)",
});

const smallDeviceHeight = b.styleDef({
    marginTop: 10,
    top: "0.65rem",
    minHeight: "3rem",
    display: "block",
    overflowX: "auto",
});

export const linksStyle = b.styleDef({
    maxHeight: "100%",
    display: "block",
    overflowY: "auto",
    paddingTop: "1rem",
    paddingBottom: "1rem",
    marginRight: -15,
    marginLeft: -15,
});
