import * as b from "bobril";
import { clearfix } from "../../src/utilities/clearfix";

export function Example({ children }: b.IDataWithChildren): b.IBobrilNode {
    return (
        <div style={exampleRowStyle}>
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
