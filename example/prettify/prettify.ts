import * as b from 'bobril';

b.asset('./prettify.js');
export const prettify = { prettyPrint: <Function>(window as { prettyPrint?: Function }).prettyPrint };