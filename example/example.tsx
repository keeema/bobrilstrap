import * as b from "bobril";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "../components/button";

b.init(() => (
    <Button variant="primary" ariaLabel="Test Button" onClick={() => alert("Clicked")}>
        TEST
    </Button>
));
