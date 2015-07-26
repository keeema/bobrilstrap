/// <reference path="./button.ts"/>

interface IButtonData extends ITagData {
    caption?: string;
    glyphIcon: GlyphIconStatic;
}

interface IButtonCtx {
    data: IButtonData;
}

declare var getButton:(key?:string)=> IButtonBuilder;

interface IButtonBuilder extends IBuilder<IButtonBuilder> {
    data: IButtonData;
    withCaption(caption: string): IButtonBuilder;
    ofType(size: SizeStatic): IButtonBuilder;
    ofSize(type: TypeStatic): IButtonBuilder;
    withGlyphIcon(glyphIcon: GlyphIconStatic): IButtonBuilder;
    node(): IBobrilNode;
}
