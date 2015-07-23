import { IBobrilNode } from '../node_modules/bobril/index';
import { TagComponent } from './tag';
import { ITagData, Builder } from './builder';

export interface IButtonToolbarData extends ITagData {
  buttons: IBobrilNode[];
  buttonGroups: IBobrilNode[];
}

interface IButtonToolbarCtx {
  data: IButtonToolbarData;
}

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

var buttonToolbar = new ButtonToolbarComponent()

export function getButtonToolbar(key?: string): ButtonToolbarBuilder {
  return new ButtonToolbarBuilder(key)
}

export class ButtonToolbarBuilder extends Builder<ButtonToolbarBuilder> {
  data: IButtonToolbarData;

  constructor(key?: string) {
    super('div', key);
    super.withClass('btn-toolbar');
  }

  withButtons(buttons: IBobrilNode[]): ButtonToolbarBuilder {
    this.data.buttons = buttons;
    return this;
  }

  withButtonGroup(buttonGroup: IBobrilNode): ButtonToolbarBuilder {
    if (!this.data.buttonGroups)
      this.data.buttonGroups = [];

    this.data.buttonGroups.push(buttonGroup);
    return this;
  }

  node(): IBobrilNode {
    var node = super.node();
    node.component = buttonToolbar;
    return node;
  }
}
