import * as b from "bobril";
import { Collapse, textAlign } from "../../../index";
import { linksStyle } from "./PrimarySidebar";

interface IResponsiveMenu {
    collapsed: boolean;
    children: b.IBobrilChildren;
    isSmallDevice: boolean;
    onClick: () => void;
}

export function ResponsiveMenu({ collapsed, isSmallDevice, children, onClick }: IResponsiveMenu): b.IBobrilNode {
    const styles = [linksStyle, textAlign("center"), textAlign("left", "md")];
    return isSmallDevice ? (
        <Collapse as="nav" collapsed={collapsed} style={styles} onClick={onClick}>
            {children}
        </Collapse>
    ) : (
        <nav style={styles}>{children}</nav>
    );
}
