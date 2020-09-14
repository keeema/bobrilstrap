import * as b from "bobril";
import { display, font, Table } from "../../../../../../index";
import { Anchor } from "../../../../../common/anchor";
import { tableStyle } from "../../../../../common/styles";

export function GridOptions(): b.IBobrilNode {
    return (
        <>
            <Anchor name="grid-options">
                <h2>Grid options</h2>
            </Anchor>
            <p>See how aspects of the Bootstrap grid system work across multiple devices with a handy table.</p>
            <Table bordered striped style={[tableStyle, display("block"), display("table", "sm")]}>
                <thead>
                    <tr>
                        <th></th>
                        <th>
                            <span style={font("bold")}>Extra small</span>
                            <br />
                            <span style={font("normal")}>{"<576px"}</span>
                        </th>
                        <th>
                            <span style={font("bold")}>Small</span>
                            <br />
                            <span style={font("normal")}>{"≥576px"}</span>
                        </th>
                        <th>
                            <span style={font("bold")}>Medium</span>
                            <br />
                            <span style={font("normal")}>{"≥768px"}</span>
                        </th>
                        <th>
                            <span style={font("bold")}>Large</span>
                            <br />
                            <span style={font("normal")}>{"≥992px"}</span>
                        </th>
                        <th>
                            <span style={font("bold")}>Extra large</span>
                            <br />
                            <span style={font("normal")}>{"≥1200px"}</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>
                            <span style={font("bold")}>Max container width</span>
                        </th>
                        <td>None (auto)</td>
                        <td>540px</td>
                        <td>720px</td>
                        <td>960px</td>
                        <td>1140px</td>
                    </tr>
                    <tr>
                        <th>
                            <span style={font("bold")}>Component</span>
                        </th>
                        <td>
                            <code>{`<Col>`}</code>
                        </td>
                        <td>
                            <code>{`<Col sm>`}</code>
                        </td>
                        <td>
                            <code>{`<Col md>`}</code>
                        </td>
                        <td>
                            <code>{`<Col lg>`}</code>
                        </td>
                        <td>
                            <code>{`<Col xl>`}</code>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <span style={font("bold")}># of columns</span>
                        </th>
                        <td colspan="5">12</td>
                    </tr>
                    <tr>
                        <th>
                            <span style={font("bold")}>Gutter width</span>
                        </th>
                        <td colspan="5">30px (15px on each side of a column)</td>
                    </tr>
                    <tr>
                        <th>
                            <span style={font("bold")}>Nestable</span>
                        </th>
                        <td colspan="5">Yes</td>
                    </tr>
                    <tr>
                        <th>
                            <span style={font("bold")}>Column ordering</span>
                        </th>
                        <td colspan="5">Yes</td>
                    </tr>
                </tbody>
            </Table>
        </>
    );
}
