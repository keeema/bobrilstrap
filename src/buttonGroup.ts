class ButtonGroupComponent extends TagComponent {
  render(ctx: IButtonGroupCtx, me: IBobrilNode): void {
    super.render(ctx, me);
  }

  getChildren(data: IButtonGroupData): IBobrilNode[] {
    var children = super.getChildren(data);

    if (data.buttons)
      children.push(data.buttons);

    return children;
  }
}

let buttonGroupComponent = new ButtonGroupComponent();

var getButtonGroup = function(key?: string): IButtonGroupBuilder {
  return new ButtonGroupBuilder(key)
}

class ButtonGroupBuilder extends Builder<ButtonGroupBuilder> implements IButtonGroupBuilder {
  data: IButtonGroupData;

  constructor(key?: string) {
    super('div', key);
    this.withClass('btn-group');
  }

  ofButtons(buttons: IBobrilNode[]): IButtonGroupBuilder {
    this.data.buttons = buttons;
    return this;
  }

  node(): IBobrilNode {
    var node = super.node();
    node.component = buttonGroupComponent;
    return node;
  }
}
