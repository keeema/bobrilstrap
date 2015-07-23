module Components {

  interface IButtonData extends ITagData {
    caption?: string;
    glyphIcon: GlyphIcon;
  }

  interface IButtonCtx {
    data: IButtonData;
  }

  class ButtonComponent extends TagComponent {
    getChildren(data:IButtonData):IBobrilNode[]{
      var children = super.getChildren(data);

      if(data.glyphIcon){
        children.push(GlyphIcon.getNode(data.glyphIcon));
      }

      if(data.caption)
        children.push(data.caption);

      return children;
    }
  }

  let button = new ButtonComponent();

  export function getButton(key?: string):ButtonBuilder{
     return new ButtonBuilder(key)
  }

  class ButtonBuilder extends Builder<ButtonBuilder> {
    data: IButtonData;

    constructor(key?: string) {
      super('button', key);
      super.withClass('btn');
    }

    withCaption(caption: string): ButtonBuilder {
      this.data.caption = caption;
      return this;
    }

    ofType(size: Size): ButtonBuilder {
      this.withClass('btn-' + size);
      return this;
    }

    ofSize(type: Type): ButtonBuilder {
      this.withClass('btn-' + type);
      return this;
    }

    withGlyphIcon(glyphIcon:GlyphIcon):ButtonBuilder{
      this.data.glyphIcon = glyphIcon;
      return this;
    }

    node(): IBobrilNode {
      var node = super.node();
      node.component = button;
      return node;
    }
  }
}
