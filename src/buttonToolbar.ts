class ButtonToolbarComponent extends TagComponent {
  getChildren(data: IButtonToolbarData): IBobrilNode[] {
    var children = super.getChildren(data);

    if (data.buttonGroups)
      children.push(data.buttonGroups);

    if (data.buttons)
      children.push(data.buttons);

    return children;
  }
}

var buttonToolbarComponent = new ButtonToolbarComponent()

var getButtonToolbar = function(key?: string): ButtonToolbarBuilder {
  return new ButtonToolbarBuilder(key)
}

class ButtonToolbarBuilder extends Builder<IButtonToolbarBuilder> implements IButtonToolbarBuilder{
  data: IButtonToolbarData;

  constructor(key?: string) {
    super('div', key);
    super.withClass('btn-toolbar');
  }

  withButtons(buttons: IBobrilNode[]): IButtonToolbarBuilder {
    this.data.buttons = buttons;
    return this;
  }

  withButtonGroup(buttonGroup: IBobrilNode): IButtonToolbarBuilder {
    if (!this.data.buttonGroups)
      this.data.buttonGroups = [];

    this.data.buttonGroups.push(buttonGroup);
    return this;
  }

  node(): IBobrilNode {
    var node = super.node();
    node.component = buttonToolbarComponent;
    return node;
  }
}
