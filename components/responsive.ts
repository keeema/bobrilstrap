import * as b from "bobril";
import { createDictionary, IDictionary, toLowerWithDashes } from "./bobrilHelpers";

export enum Display {
    Block,
    Inline,
    InlineBlock
}

export enum Device {
    Xs,
    Sm,
    Md,
    Lg,
    Print
}

export const visibleStyles = getVisibleStyles();
export const hiddenStyles = getHiddenStyles();

function getVisibleStyles(): IDictionary<Device, IDictionary<Display, b.IBobrilStyle>> {
    const result = createDictionary<Device, IDictionary<Display, b.IBobrilStyle>>();
    Object.keys(Device).forEach(device => {
        const castedDeviceValue = parseInt(device, 10);
        if (!isNaN(castedDeviceValue)) {
            result(castedDeviceValue, createDictionary());
            Object.keys(Display).forEach(display => {
                const castedDisplayValue = parseInt(display, 10);
                if (!isNaN(castedDisplayValue)) {
                    result(castedDeviceValue)(
                        castedDisplayValue,
                        b.styleDef(`visible-${Device[castedDeviceValue].toLowerCase()}-${toLowerWithDashes(Display[castedDisplayValue])}`)
                    );
                }
            });
        }
    });

    return result;
}

function getHiddenStyles(): IDictionary<Device, b.IBobrilStyle> {
    const result = createDictionary<Device, b.IBobrilStyle>();

    Object.keys(Device).forEach(device => {
        const castedDeviceValue = parseInt(device, 10);
        if (!isNaN(castedDeviceValue)) {
            result(castedDeviceValue, b.styleDef(`hidden-${Device[castedDeviceValue].toLowerCase()}`));
        }
    });

    return result;
}
