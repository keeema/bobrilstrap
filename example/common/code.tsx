import * as b from "bobril";

export type Language = "tsx" | "bash";

export function Code({ language, children }: { language: Language; children: string }): b.IBobrilNode {
    return (
        <pre>
            <code class={`language-${language}`}>{children}</code>
        </pre>
    );
}
