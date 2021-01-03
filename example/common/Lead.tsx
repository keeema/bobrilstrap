import * as b from "bobril";

const lead = b.styleDef({ fontSize: "1.5rem", fontWeight: 300 });

export function Lead({ children }: b.IDataWithChildren): b.IBobrilNode {
    return <p style={lead}>{children}</p>;
}
