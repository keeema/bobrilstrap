import * as b from 'bobril';

b.asset('./prettify.js');
export let prettify = { prettyPrint: <Function>(<any>window).prettyPrint };

export default prettify;