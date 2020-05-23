import * as b from "bobril";
import { Button } from "../index";

const underline = b.styleDef({ textDecoration: "underline" });

export function ButtonExample(): b.IBobrilNode {
    return (
        <Button style={[{ color: "red" }, underline]} variant="primary" ariaLabel="Test Button" onClick={() => alert("Clicked")}>
            TEST
        </Button>
    );
}
