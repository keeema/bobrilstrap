export function clearAndUpper(text: string): string {
    return text.replace(/-/, "").toUpperCase();
}

export function toPascalCase(text: string): string {
    return text.replace(/(^\w|-\w)/g, clearAndUpper);
}
