import * as b from "bobril";
import { clearfix } from "../../index";

export function Example({ children, style }: b.IDataWithChildren & { style?: b.IBobrilStyles }): b.IBobrilNode {
    return (
        <div style={[exampleRowStyle, style]}>
            <div style={[exampleStyle, clearfix]}>{children}</div>
        </div>
    );
}

const exampleRowStyle = b.styleDef({
    paddingTop: ".75rem",
    paddingBottom: ".75rem",
    border: "1px solid rgba(86, 61, 124, .2)",
    marginBottom: -14,
});

const exampleStyle = b.styleDef({
    position: "relative",
    padding: "1rem",
    margin: "0.5rem 0",
});
