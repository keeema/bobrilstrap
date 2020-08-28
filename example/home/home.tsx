import * as b from "bobril";

import { HomeHeader } from "./header";
import { HomeContent } from "./content";

export function Home(): b.IBobrilNode {
    return (
        <>
            <HomeHeader />
            <HomeContent />
        </>
    );
}
