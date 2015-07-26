// Base component class for all components
class TagComponent implements IBobrilComponent {
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

let tagComponent = new TagComponent();

var getTag = function(tagName, key?: string): ITagBuilder {
  return new TagBuilder(tagName, key)
}

class TagBuilder extends Builder<ITagBuilder> {
  node() {
    var node = super.node();
    node.component = tagComponent;
    return node;
  }
}
