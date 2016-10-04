import * as b from 'bobril';
import { tab, ITabData } from './tab';

export interface IPillData extends ITabData {
}

export const pill = b.createDerivedComponent<IPillData>(tab, {
    id: 'bobrilstrap-pill'
});

export default pill;