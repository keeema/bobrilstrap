import * as b from "bobril";
import { display, font, Table } from "../../../../../../index";
import { Anchor } from "../../../../../common/Anchor";
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
                        </th>{" "}
                        <th>
                            <span style={font("bold")}>Extra Extra large</span>
                            <br />
                            <span style={font("normal")}>{"≥1400px"}</span>
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
                        <td>1320px</td>
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
                        <td>
                            <code>{`<Col xxl>`}</code>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <span style={font("bold")}># of columns</span>
                        </th>
                        <td colspan="6">12</td>
                    </tr>
                    <tr>
                        <th>
                            <span style={font("bold")}>Gutter width</span>
                        </th>
                        <td colspan="6">1.5rem (.75rem on left and right)</td>
                    </tr>
                    <tr>
                        <th>
                            <span style={font("bold")}>Custom gutters</span>
                        </th>
                        <td colspan="6">Yes</td>
                    </tr>{" "}
                    <tr>
                        <th>
                            <span style={font("bold")}>Nestable</span>
                        </th>
                        <td colspan="6">Yes</td>
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
