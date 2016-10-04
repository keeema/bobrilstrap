import * as b from 'bobril';
import { elem, IBaseData } from './element';

export interface IOlData extends IBaseData {

}

interface IOlCtx extends b.IBobrilCtx {
    data: IOlData;
}

export const ol = b.createDerivedComponent<IOlData>(elem, {
    id: 'bobrilstrap-ol',
    render(_ctx: IOlCtx, me: b.IBobrilNode) {
        me.tag = 'ol';
    }
});

export default ol;