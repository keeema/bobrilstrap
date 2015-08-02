class Builder<T> implements IBuilder<T> {
    key: string;
    data: ITagData = {
        attrs: {}
    };

    constructor(tagName: string, key?: string) {
        this.data.tagName = tagName;
        this.key = tagName;
    }

    withClass(className: string): T {
        if (!this.data.className)
            this.data.className = className
        else
            this.data.className += ' ' + className;

        return <any>this;
    }

    withClasses(classNames: string[]): T {
        if (classNames) {
            classNames.forEach((className) => this.withClass(className));
        }

        return <any>this;
    }

    withContent(content: IBobrilNode[]): T {
        this.data.content = content;
        return <any>this;
    }

    withAttribute(name: string, value: any): T {
        this.data.attrs[name] = value;
        return <any>this;
    }

    withStyle(style: IBobrilStyle): T {
        this.data.style = style;
        return <any>this;
    }

    handlingOnClick(callback: (event: IBobrilMouseEvent) => void): T {
        this.data.onClick = (event: IBobrilMouseEvent) => callback(event);
        return <any>this;
    }

    node() {
        var node = <IBobrilNode>{ data: this.data, attrs: this.data.attrs, style: this.data.style };

        if (this.key)
            node.key = this.key;

        return node;
    }
}
