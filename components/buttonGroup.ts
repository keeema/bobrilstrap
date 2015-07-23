import { IBobrilNode } from '../node_modules/bobril/index';
import { TagComponent } from './tag';
import { ITagData, Builder } from './builder';

export interface IButtonGroupData extends ITagData {
  buttons: IBobrilNode[]
}

interface IButtonGroupCtx {
  data: IButtonGroupData;
}

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

let buttonGroup = new ButtonGroupComponent();

export function getButtonGroup(key?: string): ButtonGroupBuilder {
  return new ButtonGroupBuilder(key)
}

export class ButtonGroupBuilder extends Builder<ButtonGroupBuilder> {
  data: IButtonGroupData;

  constructor(key?: string) {
    super('div', key);
    this.withClass('btn-group');
  }

  ofButtons(buttons: IBobrilNode[]): ButtonGroupBuilder {
    this.data.buttons = buttons;
    return this;
  }

  node(): IBobrilNode {
    var node = super.node();
    node.component = buttonGroup;
    return node;
  }
}
