import * as b from 'bobril';

b.asset('./prettify.js');
export const prettify = { prettyPrint: <Function>(<{ prettyPrint?: Function }>window).prettyPrint };

export default prettify;