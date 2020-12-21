import * as b from "bobril";

export type CalloutVariant = "warning" | "danger" | "info";

const calloutStyles = {
    callout: b.styleDef({
        padding: "1.25rem",
        marginTop: "1.25rem",
        marginBottom: "1.25rem",
        border: "1px solid #eee",
        borderLeftWidth: ".25rem",
        borderRadius: ".25rem",
    }),
    warning: b.styleDef({ borderLeftColor: "#f0ad4e" }),
    danger: b.styleDef({ borderLeftColor: "#d9534f" }),
    info: b.styleDef({ borderLeftColor: "#5bc0de" }),
};

export interface ICalloutData extends b.IDataWithChildren {
    variant: CalloutVariant;
}

export function Callout(data: ICalloutData): b.IBobrilNode {
    return <div style={[calloutStyles.callout, calloutStyles[data.variant]]}>{data.children}</div>;
}
