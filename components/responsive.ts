import * as b from "bobril";
import {
  createDictionary,
  IDictionary,
  toLowerWithDashes
} from "./bobrilHelpers";

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

export const visibleStyles = getVisbileStyles();
export const hiddenStyles = getHiddenStyles();

function getVisbileStyles(): IDictionary<
  Device,
  IDictionary<Display, b.IBobrilStyle>
> {
  let result = createDictionary<Device, IDictionary<Display, b.IBobrilStyle>>();
  Object.keys(Device).forEach(device => {
    let castedDeviceValue = parseInt(device, 10);
    if (!isNaN(castedDeviceValue)) {
      result(castedDeviceValue, createDictionary());
      Object.keys(Display).forEach(display => {
        let castedDisplayValue = parseInt(display, 10);
        if (!isNaN(castedDisplayValue)) {
          result(castedDeviceValue)(
            castedDisplayValue,
            b.styleDef(
              `visible-${Device[
                castedDeviceValue
              ].toLowerCase()}-${toLowerWithDashes(
                Display[castedDisplayValue]
              )}`
            )
          );
        }
      });
    }
  });

  return result;
}

function getHiddenStyles(): IDictionary<Device, b.IBobrilStyle> {
  let result = createDictionary<Device, b.IBobrilStyle>();

  Object.keys(Device).forEach(device => {
    let castedDeviceValue = parseInt(device, 10);
    if (!isNaN(castedDeviceValue)) {
      result(
        castedDeviceValue,
        b.styleDef(`hidden-${Device[castedDeviceValue].toLowerCase()}`)
      );
    }
  });

  return result;
}
