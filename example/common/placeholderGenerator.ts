export type SizeUnits = "%" | "px";

export function placeholderUri(width: number, widthUnits: SizeUnits, height: number, heightUnits: SizeUnits): string {
    const div = document.createElement("div");
    div.innerHTML = `<svg width="${width}${widthUnits}" height="${height}${heightUnits}">
    <rect cx="0" cy="0" width="100%" height="100%" fill="DimGrey" />
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="x-large" fill="DarkGrey">Image</text>
   </svg>`;

    const xml = new XMLSerializer().serializeToString(div.firstChild as HTMLElement);
    return "data:image/svg+xml;charset=utf-8," + xml;
}
