import { IBobrilNode, IBobrilComponent, IBobrilMouseEvent } from '../node_modules/bobril/index';
import { ITagData, Builder } from './builder';

export interface ITagCtx {
  data: ITagData;
}

// Base component class for all components
export class TagComponent implements IBobrilComponent {
  render(ctx: ITagCtx, me: IBobrilNode): void {
    me.tag = ctx.data.tagName;
    me.className = ctx.data.className;
    me.children = this.getChildren(ctx.data)
  } 

  getChildren(data: ITagData): IBobrilNode[] {
    var children = data.content || [];
    return children;
  }

  onClick(ctx: ITagCtx, event: IBobrilMouseEvent): boolean {
    if (ctx.data.onClick)
      return ctx.data.onClick(event);

    return false;
  }
}

let tag = new TagComponent();

export function getTag(tagName, key?: string): TagBuilder {
  return new TagBuilder(tagName, key)
}

export class TagBuilder extends Builder<TagBuilder> {
  node() {
    var node = super.node();
    node.component = tag;
    return node;
  }
}
