import * as b from "bobril";

import { HomeHeader } from "./Header";
import { HomeContent } from "./Content";

export function Home(): b.IBobrilNode {
    return (
        <>
            <HomeHeader />
            <HomeContent />
        </>
    );
}
