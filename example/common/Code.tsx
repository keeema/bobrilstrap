import * as b from "bobril";

export type Language = "tsx" | "bash" | "json";

export function Code({ language, children }: { language: Language; children: string | string[] }): b.IBobrilNode {
    return (
        <pre>
            <code class={`language-${language}`}>{children}</code>
        </pre>
    );
}
