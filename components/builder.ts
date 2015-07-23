import {IBobrilNode, IBobrilAttributes, IBobrilMouseEvent} from 'node_modules/bobril/index';

export interface ITagData {
  onClick?: (event: IBobrilMouseEvent) => any;
  className?: string;
  content?: IBobrilNode[];
  tagName?: string;
}

export class Builder<T> {
  key: string;
  data: ITagData = {};
  attrs: IBobrilAttributes = {};

  constructor(tagName: string, key?: string) {
    this.data.tagName = tagName;
    this.key = key;
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
    this.attrs[name] = value;
    return <any>this;
  }

  handlingOnClick(callback: (event: IBobrilMouseEvent) => void): T {
    this.data.onClick = (event: IBobrilMouseEvent) => callback(event);
    return <any>this;
  }

  node() {
    var node = <IBobrilNode>{ data: this.data, attrs: this.attrs };

    if (this.key)
      node.key = this.key;

    return node;
  }
}
