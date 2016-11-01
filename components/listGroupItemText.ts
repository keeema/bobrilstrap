import * as b from 'bobril';
import { p, IParagraphData } from './paragraph';
import { listGroupStyles } from './listGroup';

export interface IListGroupItemTextData extends IParagraphData {

}

interface IListGroupItemTextCtx extends b.IBobrilCtx {
    data: IListGroupItemTextData;
}

export const listGroupItemText = b.createDerivedComponent<IListGroupItemTextData>(p, {
    id: 'bobrilstrap-listgroup-item-text',
    render(_ctx: IListGroupItemTextCtx, me: b.IBobrilNode) {
        b.style(me, listGroupStyles.listGroupItemText);
    }
});

export default listGroupItemText;