interface ITagData {
    onClick?: (event: IBobrilMouseEvent) => any;
    className?: string;
    content?: IBobrilNode[];
    tagName?: string;
    attrs: IBobrilAttributes;
    style?: IBobrilStyle;
}

interface IBuilder<T> {
    key: string;
    data: ITagData;
    withClass(className: string): T;
    withClasses(classNames: string[]): T;
    withContent(content: IBobrilNode[]): T;
    withAttribute(name: string, value: any): T;
    withStyle(style:IBobrilStyle): T;
    handlingOnClick(callback: (event: IBobrilMouseEvent) => void): T;
    node(): IBobrilNode;
}
