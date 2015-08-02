/// <reference path="./buttonGroup.ts"/>

interface IButtonToolbarData extends ITagData {
  buttons: IBobrilNode[];
  buttonGroups: IBobrilNode[];
}
interface IButtonToolbarCtx {
  data: IButtonToolbarData;
}

declare var getButtonToolbar: (key?: string) => IButtonToolbarBuilder;

interface IButtonToolbarBuilder extends IBuilder<IButtonToolbarBuilder> {
  data: IButtonToolbarData;
  withButtons(buttons: IBobrilNode[]): IButtonToolbarBuilder;
  withButtonGroup(buttonGroup: IBobrilNode): IButtonToolbarBuilder;
  node(): IBobrilNode;
}
