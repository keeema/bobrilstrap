import * as b from "bobril";
import "../index";
import "bootstrap/dist/css/bootstrap.min.css";
import { CarouselExample } from "./carousel";
import { ButtonExample } from "./button";

b.init(() => (
    <>
        <ButtonExample />
        <CarouselExample />
    </>
));
