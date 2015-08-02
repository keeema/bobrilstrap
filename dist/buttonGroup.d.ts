/// <reference path="./buttonGroup.ts"/>

interface IButtonGroupData extends ITagData {
    buttons: IBobrilNode[];
}
interface IButtonGroupCtx {
    data: IButtonGroupData;
}

declare var getButtonGroup: (key?:string)=> IButtonGroupBuilder;

interface IButtonGroupBuilder extends IBuilder<IButtonGroupBuilder> {
    data: IButtonGroupData;
    ofButtons(buttons: IBobrilNode[]): IButtonGroupBuilder;
    node(): IBobrilNode;
}
