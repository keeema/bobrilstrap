import * as b from 'bobril';
import { elem, IBaseData } from './element';

export interface IJumbotronData extends IBaseData {

}

interface IJumbotronCtx extends b.IBobrilCtx {
    data: IJumbotronData;
}

export const jumbotronStyle = b.styleDef('jumbotron');

export const jumbotron = b.createDerivedComponent<IJumbotronData>(elem, {
    id: 'bobrilstrap-jumbotron',
    render(ctx: IJumbotronCtx, me: b.IBobrilNode) {
        b.style(me, jumbotronStyle);
    }
});

export default jumbotron;