import * as b from 'bobril';
import { elem, IBaseData } from './element';

export interface IPageHeaderData extends IBaseData {

}

export const pageHeaderStyle = b.styleDef('page-header');

interface IPanelHeadingCtx extends b.IBobrilCtx {
    data: IPageHeaderData;
}

export const pageHeader = b.createDerivedComponent<IPageHeaderData>(elem, {
    id: 'bobrilstrap-page-header',
    render(_ctx: IPanelHeadingCtx, me: b.IBobrilNode) {
        b.style(me, pageHeaderStyle);
    }
});

export default pageHeader;