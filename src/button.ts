class ButtonComponent extends TagComponent {
  getChildren(data: IButtonData): IBobrilNode[] {
    var children = super.getChildren(data);

    if (data.glyphIcon) {
      children.push(GlyphIconStatic.getNode(data.glyphIcon));
    }

    if (data.caption)
      children.push(data.caption);

    return children;
  }
}

let buttonComponent = new ButtonComponent();

var getButton = function(key?: string): IButtonBuilder {
  return new ButtonBuilder(key)
}

class ButtonBuilder extends Builder<ButtonBuilder> implements IButtonBuilder {
  data: IButtonData;

  constructor(key?: string) {
    super('button', key);
    super.withClass('btn');
  }

  withCaption(caption: string): IButtonBuilder {
    this.data.caption = caption;
    return this;
  }

  ofSize(size: ISize): IButtonBuilder {
    this.withClass('btn-' + size);
    return this;
  }

  ofType(type: IType): IButtonBuilder {
    this.withClass('btn-' + type);
    return this;
  }

  withGlyphIcon(glyphIcon: IGlyphIcon): IButtonBuilder {
    this.data.glyphIcon = glyphIcon;
    return this;
  }

  node(): IBobrilNode {
    var node = super.node();
    node.component = buttonComponent;
    return node;
  }
}
