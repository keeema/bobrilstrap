import * as b from "bobril";

b.asset("../../node_modules/holderjs/holder.js");

declare global {
    interface Window {
        Holder: { run: () => void; addTheme: Function };
    }
}

export function runHolder(): void {
    window.Holder.run();
}

export function holderImage(size: string): string {
    return `holder.js/${size}?bg=868e96&fg=dee2e6`;
}
