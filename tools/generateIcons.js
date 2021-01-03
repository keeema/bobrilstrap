"use strict";
exports.__esModule = true;
var fs = require("fs");
var path = require("path");
var destination = "../src/icons/Icons.tsx";
var bootstrapIconsPath = "../node_modules/bootstrap-icons/icons";
function generateIcons() {
    var files = fs.readdirSync(bootstrapIconsPath);
    var components = createComponents(files);
    var sourceContent = prependHeader(components);
    if (fs.existsSync(destination)) {
        fs.unlinkSync(destination);
    }
    fs.writeFileSync(destination, sourceContent);
}
function createComponents(files) {
    var result = "";
    for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
        var filePath = files_1[_i];
        var iconName = toPascalCase(path.parse(filePath).name);
        var lines = fs.readFileSync(path.join(bootstrapIconsPath, filePath)).toString().split("\n");
        var pureLines = lines.slice(1, lines.length - 1);
        result += "export class " + iconName + " extends IconBase {\n    static id: string = \"bobrilstrap-icon-" + path.parse(filePath).name + "\";\n\n    svgChildren = (): b.IBobrilChildren => (\n        <>\n            " + pureLines.join("\n") + "\n        </>\n    );\n}\n\n";
    }
    return result;
}
function clearAndUpper(text) {
    return text.replace(/-/, "").toUpperCase();
}
function toPascalCase(text) {
    return text.replace(/(^\w|-\w)/g, clearAndUpper);
}
function prependHeader(componentsSource) {
    return "import * as b from \"bobril\";\nimport { IconBase } from \"./IconBase\";\n\n" + componentsSource;
}
generateIcons();
