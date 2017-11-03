import * as b from "bobril";
import { mergeToChildren } from "./bobrilHelpers";
import { Elem, IBaseData, IAria } from "./element";
import { Button, IButtonData, ButtonVariant } from "./button";
import { ButtonGroup, IButtonGroupData } from "./buttonGroup";
import { InputGroupBtn, IInputGroupBtnData } from "./inputGroupBtn";

export const dropdownStyles = {
  dropdown: b.styleDef("dropdown"),
  dropdownToggle: b.styleDef("dropdown-toggle"),
  dropup: b.styleDef("dropup")
};

export interface IDropdownData extends IBaseData {
  button: IButtonData;
  buttonGroup?: IButtonGroupData | boolean;
  inputGroupBtn?: IInputGroupBtnData | boolean;
  up?: boolean;
  splitted?: boolean;
  splittedSrOnlyText?: string;
}

interface ICtx extends b.IBobrilCtx {
  data: IDropdownData;
}

export const Dropdown = b.createDerivedComponent<IDropdownData>(Elem, {
  id: "bobrilstrap-dropdown",
  render(ctx: ICtx, me: b.IBobrilNode) {
    addButton(ctx, me);

    if (ctx.data.buttonGroup || ctx.data.inputGroupBtn) {
      me.tag = undefined;
      const groupNode = ctx.data.buttonGroup
        ? ButtonGroup(
            typeof ctx.data.buttonGroup === "boolean"
              ? {}
              : ctx.data.buttonGroup,
            me.children
          )
        : InputGroupBtn(
            typeof ctx.data.inputGroupBtn === "boolean"
              ? {}
              : ctx.data.inputGroupBtn,
            me.children
          );
      b.style(groupNode, !!ctx.data.up && dropdownStyles.dropup);
      me.children = groupNode;
    } else {
      if (ctx.data.button.variant === ButtonVariant.DropdownNav) {
        me.tag = "li";
      }

      b.style(
        me,
        ctx.data.up ? dropdownStyles.dropup : dropdownStyles.dropdown
      );
    }
  }
});

export default Dropdown;

function updateButtonDataForDropdown(
  originalButtonData: IButtonData
): IButtonData {
  let buttonData = b.assign({}, originalButtonData);
  buttonData.variant =
    originalButtonData.variant !== undefined
      ? originalButtonData.variant
      : ButtonVariant.Dropdown;
  buttonData.aria = b.assign({}, buttonData.aria) as IAria;
  if (buttonData.aria !== undefined) buttonData.aria.haspopup = true;
  return buttonData;
}

function addButton(ctx: ICtx, me: b.IBobrilNode) {
  let dropdownButton: b.IBobrilNode, caretButton: b.IBobrilNode;

  if (ctx.data.splitted) {
    caretButton = Button(
      updateButtonDataForDropdown({
        option: ctx.data.button.option,
        size: ctx.data.button.size,
        srOnly: ctx.data.splittedSrOnlyText
      })
    );
    dropdownButton = Button(ctx.data.button);
    mergeToChildren(me, caretButton, true);
  } else {
    dropdownButton = Button(updateButtonDataForDropdown(ctx.data.button));
  }

  mergeToChildren(me, dropdownButton, true);
}
