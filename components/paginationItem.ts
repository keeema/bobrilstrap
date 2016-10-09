import * as b from 'bobril';
import { li, ILiData } from './li';

export interface IPaginationItemData extends ILiData {

}

export const paginationItem = b.createDerivedComponent<IPaginationItemData>(li, {
    id: 'bobrilstrap-pagination-item'
});

export default paginationItem;