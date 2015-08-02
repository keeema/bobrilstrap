interface IButtonData extends ITagData {
    caption?: string;
    glyphIcon: IGlyphIcon;
}

interface IButtonCtx {
    data: IButtonData;
}

declare var getButton:(key?:string)=> IButtonBuilder;

interface IButtonBuilder extends IBuilder<IButtonBuilder> {
    data: IButtonData;
    withCaption(caption: string): IButtonBuilder;
    ofType(type: IType): IButtonBuilder;
    ofSize(size: ISize): IButtonBuilder;
    withGlyphIcon(glyphIcon: IGlyphIcon): IButtonBuilder;
    node(): IBobrilNode;
}
