import * as b from "bobril";

export const helpers = {
  text: {
    mutated: b.styleDef("text-mutated"),
    primary: b.styleDef("text-primary"),
    success: b.styleDef("text-success"),
    info: b.styleDef("text-info"),
    warning: b.styleDef("text-warning"),
    danger: b.styleDef("text-danger")
  },
  background: {
    primary: b.styleDef("bg-primary"),
    success: b.styleDef("bg-success"),
    info: b.styleDef("bg-info"),
    warning: b.styleDef("bg-warning"),
    danger: b.styleDef("bg-danger")
  },
  float: {
    pullLeft: b.styleDef("pull-left"),
    pullRight: b.styleDef("pull-right")
  },
  clearfix: b.styleDef("clearfix"),
  close: b.styleDef("close"),
  caret: b.styleDef("caret"),
  centerBlock: b.styleDef("center-block"),
  hidden: b.styleDef("hidden"),
  invisible: b.styleDef("invisible"),
  show: b.styleDef("show"),
  srOnly: b.styleDef("sr-only"),
  srOnlyFocusable: b.styleDef("sr-only-focusable"),
  textHide: b.styleDef("text-hide"),
  thumbnail: b.styleDef("thumbnail")
};

export default helpers;
