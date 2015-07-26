interface ITagData {
    onClick?: (event: IBobrilMouseEvent) => any;
    className?: string;
    content?: IBobrilNode[];
    tagName?: string;
}

interface IBuilder<T> {
    key: string;
    data: ITagData;
    attrs: IBobrilAttributes;
    withClass(className: string): T;
    withClasses(classNames: string[]): T;
    withContent(content: IBobrilNode[]): T;
    withAttribute(name: string, value: any): T;
    handlingOnClick(callback: (event: IBobrilMouseEvent) => void): T;
    node(): IBobrilNode;
}
