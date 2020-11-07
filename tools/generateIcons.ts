import * as fs from "fs";
import * as path from "path";

const destination = "../src/icons/Icons.tsx";
const bootstrapIconsPath = "../node_modules/bootstrap-icons/icons";

function generateIcons(): void {
    const files = fs.readdirSync(bootstrapIconsPath);
    const components = createComponents(files);
    const sourceContent = prependHeader(components);
    if (fs.existsSync(destination)) {
        fs.unlinkSync(destination);
    }

    fs.writeFileSync(destination, sourceContent);
}

function createComponents(files: string[]): string {
    let result = "";
    for (const filePath of files) {
        const iconName = toPascalCase(path.parse(filePath).name);
        const lines = fs.readFileSync(path.join(bootstrapIconsPath, filePath)).toString().split("\n");
        const pureLines = lines.slice(1, lines.length - 1);

        result += `export class ${iconName} extends IconBase {
    static id: string = "bobrilstrap-icon-${path.parse(filePath).name}";

    svgChildren = (): b.IBobrilChildren => (
        <>
            ${pureLines.join("\n")}
        </>
    );
}\n\n`;
    }

    return result;
}

function clearAndUpper(text: string): string {
    return text.replace(/-/, "").toUpperCase();
}

function toPascalCase(text: string): string {
    return text.replace(/(^\w|-\w)/g, clearAndUpper);
}

function prependHeader(componentsSource: string): string {
    return `import * as b from "bobril";
import { IconBase } from "./IconBase";

${componentsSource}`;
}
generateIcons();
