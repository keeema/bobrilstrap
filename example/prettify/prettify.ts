import * as b from "bobril";

b.asset("./prettifySrc.js");
export const prettify = {
    prettyPrint: <Function>(window as { prettyPrint?: Function }).prettyPrint
};
