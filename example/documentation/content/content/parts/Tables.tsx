import * as b from "bobril";
import { IRouteWithNavDefinition } from "../../../../common/routing";
import { Anchor } from "../../../../common/Anchor";
import { Example } from "../../../../common/Example";
import {
    Table,
    TBody,
    THead,
    Td,
    Th,
    Tr,
    borderColor,
    width,
    align,
    margin,
    tableResponsive,
    tableVariants,
    TFoot,
} from "../../../../../index";
import { Code } from "../../../../common/Code";
import { Lead } from "../../../../common/Lead";
import { Callout } from "../../../../common/Callout";

export const tablesRoute: IRouteWithNavDefinition = {
    url: "tables",
    name: "tables",
    label: "Tables",
    handler: () => <TablesDoc />,
    subs: [
        {
            url: "examples",
            name: "tables-example",
            label: "Example",
            subs: [],
        },
        {
            url: "variants",
            name: "tables-variants",
            label: "Variants",
            subs: [],
        },
        {
            url: "accented-tables",
            name: "tables-accented-tables",
            label: "Accented tables",
            subs: [
                {
                    url: "striped-rows",
                    name: "tables-accented-tables-striped-rows",
                    label: "Striped rows",
                    subs: [],
                },
                {
                    url: "hoverable-rows",
                    name: "tables-accented-tables-hoverable-rows",
                    label: "Hoverable rows",
                    subs: [],
                },
                {
                    url: "active-tables",
                    name: "tables-accented-tables-active-tables",
                    label: "Active tables",
                    subs: [],
                },
            ],
        },
        {
            url: "table-borders",
            name: "tables-table-borders",
            label: "Table borders",
            subs: [
                {
                    url: "bordered-tables",
                    name: "tables-table-borders-bordered-tables",
                    label: "Bordered tables",
                    subs: [],
                },

                {
                    url: "tables-without-borders",
                    name: "tables-table-borders-tables-without-borders",
                    label: "Tables without borders",
                    subs: [],
                },
            ],
        },
        {
            url: "small-tables",
            name: "tables-small-tables",
            label: "Small tables",
            subs: [],
        },
        {
            url: "vertical-alignment",
            name: "tables-vertical-alignment",
            label: "Vertical alignment",
            subs: [],
        },
        {
            url: "nesting",
            name: "tables-nesting",
            label: "Nesting",
            subs: [],
        },
        {
            url: "anatomy",
            name: "tables-anatomy",
            label: "Anatomy",
            subs: [
                {
                    url: "table-head",
                    name: "tables-anatomy-table-head",
                    label: "Table head",
                    subs: [],
                },

                {
                    url: "table-foot",
                    name: "tables-anatomy-table-foot",
                    label: "Table foot",
                    subs: [],
                },

                {
                    url: "captions",
                    name: "tables-captions",
                    label: "Captions",
                    subs: [],
                },
            ],
        },
        {
            url: "responsive-tables",
            name: "tables-responsive-tables",
            label: "Responsive tables",
            subs: [],
        },
    ],
};

export function TablesDoc(): b.IBobrilNode {
    return (
        <>
            <Anchor name="tables">
                <h1>Tables</h1>
            </Anchor>
            <Lead>Documentation and examples for opt-in styling of tables.</Lead>
            <Anchor name="tables-example">
                <h2>Example</h2>
            </Anchor>
            <p>Using The most basic table markup:</p>
            <Example>
                <Table>
                    <THead>
                        <Tr>
                            <Th scope="col">#</Th>
                            <Th scope="col">First</Th>
                            <Th scope="col">Last</Th>
                            <Th scope="col">Handle</Th>
                        </Tr>
                    </THead>
                    <TBody>
                        <Tr>
                            <Th scope="row">1</Th>
                            <Td>Mark</Td>
                            <Td>Otto</Td>
                            <Td>@mdo</Td>
                        </Tr>
                        <Tr>
                            <Th scope="row">2</Th>
                            <Td>Jacob</Td>
                            <Td>Thornton</Td>
                            <Td>@fat</Td>
                        </Tr>
                        <Tr>
                            <Th scope="row">3</Th>
                            <Td colspan={2}>Larry the Bird</Td>
                            <Td>@twitter</Td>
                        </Tr>
                    </TBody>
                </Table>
            </Example>
            <Code language="tsx">{`<Table>
<THead>
    <Tr>
        <Th scope="col">#</Th>
        <Th scope="col">First</Th>
        <Th scope="col">Last</Th>
        <Th scope="col">Handle</Th>
    </Tr>
</THead>
<TBody>
    <Tr>
        <Th scope="row">1</Th>
        <Td>Mark</Td>
        <Td>Otto</Td>
        <Td>@mdo</Td>
    </Tr>
    <Tr>
        <Th scope="row">2</Th>
        <Td>Jacob</Td>
        <Td>Thornton</Td>
        <Td>@fat</Td>
    </Tr>
    <Tr>
        <Th scope="row">3</Th>
        <Td colspan="2">Larry the Bird</Td>
        <Td>@twitter</Td>
    </Tr>
</TBody>
</Table>`}</Code>
            <Anchor name="tables-variants">
                <h2>Variants</h2>
            </Anchor>
            <p>Use contextual variants of color tables, table rows or individual cells.</p>
            <Example>
                <Table>
                    <THead>
                        <Tr>
                            <Th scope="col">Class</Th>
                            <Th scope="col">Heading</Th>
                            <Th scope="col">Heading</Th>
                        </Tr>
                    </THead>
                    <TBody>
                        <Tr>
                            <Th scope="row">Default</Th>
                            <Td>Cell</Td>
                            <Td>Cell</Td>
                        </Tr>

                        <Tr variant="primary">
                            <Th scope="row">Primary</Th>
                            <Td>Cell</Td>
                            <Td>Cell</Td>
                        </Tr>
                        <Tr variant="secondary">
                            <Th scope="row">Secondary</Th>
                            <Td>Cell</Td>
                            <Td>Cell</Td>
                        </Tr>
                        <Tr variant="success">
                            <Th scope="row">Success</Th>
                            <Td>Cell</Td>
                            <Td>Cell</Td>
                        </Tr>
                        <Tr variant="danger">
                            <Th scope="row">Danger</Th>
                            <Td>Cell</Td>
                            <Td>Cell</Td>
                        </Tr>
                        <Tr variant="warning">
                            <Th scope="row">Warning</Th>
                            <Td>Cell</Td>
                            <Td>Cell</Td>
                        </Tr>
                        <Tr variant="info">
                            <Th scope="row">Info</Th>
                            <Td>Cell</Td>
                            <Td>Cell</Td>
                        </Tr>
                        <Tr variant="light">
                            <Th scope="row">Light</Th>
                            <Td>Cell</Td>
                            <Td>Cell</Td>
                        </Tr>
                        <Tr variant="dark">
                            <Th scope="row">Dark</Th>
                            <Td>Cell</Td>
                            <Td>Cell</Td>
                        </Tr>
                    </TBody>
                </Table>
            </Example>
            <Code language="tsx">
                {[
                    ...tableVariants.map((variant) => `<Table variant="${variant}">...</Table>`),
                    ...tableVariants.map((variant) => `<THead variant="${variant}">...</THead>`),
                    ...tableVariants.map((variant) => `<TBody variant="${variant}">...</TBody>`),
                    ...tableVariants.map((variant) => `<Tr variant="${variant}">...</Tr>`),
                    ...tableVariants.map((variant) => `<Th variant="${variant}">...</Th>`),
                    ...tableVariants.map((variant) => `<Td variant="${variant}">...</Td>`),
                ].join("\n")}
            </Code>
            <Callout variant="info">
                <h5>Conveying meaning to assistive technologies</h5>
                <p>
                    Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive
                    technologies – such as screen readers. Ensure that information denoted by the color is either obvious from the content
                    itself (e.g. the visible text), or is included through alternative means, such as additional text hidden with the{" "}
                    <code>visuallyHidden</code>.
                </p>
            </Callout>
            <Anchor name="tables-accented-tables">
                <h2>Accented tables</h2>
            </Anchor>
            <Anchor name="tables-accented-tables-striped-rows">
                <h3>Striped rows</h3>
            </Anchor>
            <Example>
                <Table striped>
                    <TableContent />
                </Table>
            </Example>
            <Code language="tsx">{`<Table striped>
    <TableContent />
</Table>`}</Code>
            <Example>
                <Table striped variant="dark">
                    <TableContent />
                </Table>
            </Example>
            <Code language="tsx">{`<Table striped variant="dark">
    <TableContent />
</Table>`}</Code>
            <Example>
                <Table striped variant="success">
                    <TableContent />
                </Table>
            </Example>
            <Code language="tsx">{`<Table striped variant="success">
    <TableContent />
</Table>`}</Code>
            <Anchor name="tables-accented-tables-hoverable-rows">
                <h3>Hoverable rows</h3>
            </Anchor>
            <p>Enable a hover state on table rows.</p>
            <Example>
                <Table hover>
                    <TableContent />
                </Table>
            </Example>
            <Code language="tsx">{`<Table hover>
    <TableContent />
</Table>`}</Code>
            <Anchor name="tables-accented-tables-active-tables">
                <h3>Active tables</h3>
            </Anchor>
            <Example>
                <Table>
                    <THead>
                        <Tr>
                            <Th scope="col">#</Th>
                            <Th scope="col">First</Th>
                            <Th scope="col">Last</Th>
                            <Th scope="col">Handle</Th>
                        </Tr>
                    </THead>
                    <TBody>
                        <Tr active>
                            <Th scope="row">1</Th>
                            <Td>Mark</Td>
                            <Td>Otto</Td>
                            <Td>@mdo</Td>
                        </Tr>
                        <Tr>
                            <Th scope="row">2</Th>
                            <Td>Jacob</Td>
                            <Td>Thornton</Td>
                            <Td>@fat</Td>
                        </Tr>
                        <Tr>
                            <Th scope="row">3</Th>
                            <Td colspan={2} active>
                                Larry the Bird
                            </Td>
                            <Td>@twitter</Td>
                        </Tr>
                    </TBody>
                </Table>
            </Example>
            <Code language="tsx">{`<Table striped>
    <TableContent />
</Table>`}</Code>
            <Anchor name="tables-table-borders">
                <h2>Table borders</h2>
            </Anchor>
            <Anchor name="tables-table-borders-bordered-tables">
                <h3>Bordered tables</h3>
            </Anchor>
            <p>
                Add <code>bordered</code> for borders on all sides of the table and cells.
            </p>
            <Example>
                <Table bordered>
                    <TableContent />
                </Table>
            </Example>
            <Code language="tsx">{`<Table bordered>
    <TableContent />
</Table>`}</Code>
            <Example>
                <Table bordered style={borderColor("primary")}>
                    <TableContent />
                </Table>
            </Example>
            <Code language="tsx">{`<Table bordered style={borderColor("primary")}>
<TableContent />
</Table>`}</Code>
            <Anchor name="tables-table-borders-tables-without-borders">
                <h3>Tables without borders</h3>
            </Anchor>
            <p>
                Add <code>bordered</code> for borders on all sides of the table and cells.
            </p>
            <Example>
                <Table borderless>
                    <TableContent />
                </Table>
            </Example>
            <Code language="tsx">{`<Table borderless>
    <TableContent />
</Table>`}</Code>
            <Anchor name="tables-small-tables">
                <h2>Small tables</h2>
            </Anchor>
            <p>
                Add <code>size="sm"</code> to make any <code>table</code> more compact by cutting all cell <code>padding</code> in half.
            </p>
            <Example>
                <Table size="sm">
                    <TableContent />
                </Table>
            </Example>
            <Code language="tsx">{`<Table size="sm">
    <TableContent />
</Table>`}</Code>
            <Anchor name="tables-vertical-alignment">
                <h2>Vertical alignment</h2>
            </Anchor>
            <p>
                Table cells of <code>{`<THead>`}</code> are always vertical aligned to the bottom. Table cells in <code>{`<TBody>`}</code>{" "}
                inherit their alignment from <code>{`<Table>`}</code> and are aligned to the the top by default. Use the vertical align
                utility to re-align where needed.
            </p>
            <Example>
                <Table style={align("middle")}>
                    <THead>
                        <Tr>
                            <Th scope="col" style={width(25)}>
                                Heading 1
                            </Th>
                            <Th scope="col" style={width(25)}>
                                Heading 2
                            </Th>
                            <Th scope="col" style={width(25)}>
                                Heading 3
                            </Th>
                            <Th scope="col" style={width(25)}>
                                Heading 4
                            </Th>
                        </Tr>
                    </THead>
                    <TBody>
                        <Tr>
                            <Td>
                                This cell inherits <code>vertical-align: middle;</code> from the table
                            </Td>
                            <Td>
                                This cell inherits <code>vertical-align: middle;</code> from the table
                            </Td>
                            <Td>
                                This cell inherits <code>vertical-align: middle;</code> from the table
                            </Td>
                            <Td>
                                Nulla vitae elit libero, a pharetra augue. Cras mattis consectetur purus sit amet fermentum. Vestibulum id
                                ligula porta felis euismod semper.
                            </Td>
                        </Tr>
                        <Tr style={align("bottom")}>
                            <Td>
                                This cell inherits <code>vertical-align: bottom;</code> from the table row
                            </Td>
                            <Td>
                                This cell inherits <code>vertical-align: bottom;</code> from the table row
                            </Td>
                            <Td>
                                This cell inherits <code>vertical-align: bottom;</code> from the table row
                            </Td>
                            <Td>
                                Nulla vitae elit libero, a pharetra augue. Cras mattis consectetur purus sit amet fermentum. Vestibulum id
                                ligula porta felis euismod semper.
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>
                                This cell inherits <code>vertical-align: middle;</code> from the table
                            </Td>
                            <Td>
                                This cell inherits <code>vertical-align: middle;</code> from the table
                            </Td>
                            <Td style={align("top")}>This cell is aligned to the top.</Td>
                            <Td>
                                Nulla vitae elit libero, a pharetra augue. Cras mattis consectetur purus sit amet fermentum. Vestibulum id
                                ligula porta felis euismod semper.
                            </Td>
                        </Tr>
                    </TBody>
                </Table>
            </Example>
            <Code language="tsx">{`<Table style={align("middle")}>
<THead>
    <Tr>
        <Th scope="col" style={width(25)}>
            Heading 1
        </Th>
        <Th scope="col" style={width(25)}>
            Heading 2
        </Th>
        <Th scope="col" style={width(25)}>
            Heading 3
        </Th>
        <Th scope="col" style={width(25)}>
            Heading 4
        </Th>
    </Tr>
</THead>
<TBody>
    <Tr>
        <Td>
            This cell inherits <code>vertical-align: middle;</code> from the table
        </Td>
        <Td>
            This cell inherits <code>vertical-align: middle;</code> from the table
        </Td>
        <Td>
            This cell inherits <code>vertical-align: middle;</code> from the table
        </Td>
        <Td>
            Nulla vitae elit libero, a pharetra augue. Cras mattis consectetur purus sit amet fermentum. Vestibulum id
            ligula porta felis euismod semper.
        </Td>
    </Tr>
    <Tr style={align("bottom")}>
        <Td>
            This cell inherits <code>vertical-align: bottom;</code> from the table row
        </Td>
        <Td>
            This cell inherits <code>vertical-align: bottom;</code> from the table row
        </Td>
        <Td>
            This cell inherits <code>vertical-align: bottom;</code> from the table row
        </Td>
        <Td>
            Nulla vitae elit libero, a pharetra augue. Cras mattis consectetur purus sit amet fermentum. Vestibulum id
            ligula porta felis euismod semper.
        </Td>
    </Tr>
    <Tr>
        <Td>
            This cell inherits <code>vertical-align: middle;</code> from the table
        </Td>
        <Td>
            This cell inherits <code>vertical-align: middle;</code> from the table
        </Td>
        <Td style={align("top")}>This cell is aligned to the top.</Td>
        <Td>
            Nulla vitae elit libero, a pharetra augue. Cras mattis consectetur purus sit amet fermentum. Vestibulum id
            ligula porta felis euismod semper.
        </Td>
    </Tr>
</TBody>
</Table>`}</Code>
            <Anchor name="tables-nesting">
                <h2>Nesting</h2>
            </Anchor>
            <p>Border styles, active styles, and table variants are not inherited by nested tables.</p>
            <Example>
                <Table bordered striped>
                    <THead>
                        <Tr>
                            <Th scope="col">#</Th>
                            <Th scope="col">First</Th>
                            <Th scope="col">Last</Th>
                            <Th scope="col">Handle</Th>
                        </Tr>
                    </THead>
                    <TBody>
                        <Tr>
                            <Th scope="row">1</Th>
                            <Td>Mark</Td>
                            <Td>Otto</Td>
                            <Td>@mdo</Td>
                        </Tr>
                        <Tr>
                            <Td colspan={4}>
                                <Table style={margin("b", 0)}>
                                    <THead>
                                        <Tr>
                                            <Th scope="col">Header</Th>
                                            <Th scope="col">Header</Th>
                                            <Th scope="col">Header</Th>
                                        </Tr>
                                    </THead>
                                    <TBody>
                                        <Tr>
                                            <Th scope="row">A</Th>
                                            <Td>First</Td>
                                            <Td>Last</Td>
                                        </Tr>
                                        <Tr>
                                            <Th scope="row">B</Th>
                                            <Td>First</Td>
                                            <Td>Last</Td>
                                        </Tr>
                                        <Tr>
                                            <Th scope="row">C</Th>
                                            <Td>First</Td>
                                            <Td>Last</Td>
                                        </Tr>
                                    </TBody>
                                </Table>
                            </Td>
                        </Tr>
                        <Tr>
                            <Th scope="row">3</Th>
                            <Td>Larry</Td>
                            <Td>the Bird</Td>
                            <Td>@twitter</Td>
                        </Tr>
                    </TBody>
                </Table>
            </Example>
            <Code language="tsx">
                {`<Table bordered striped>
    <THead>
        <Tr>
            <Th scope="col">#</Th>
            <Th scope="col">First</Th>
            <Th scope="col">Last</Th>
            <Th scope="col">Handle</Th>
        </Tr>
    </THead>
    <TBody>
        <Tr>
            <Th scope="row">1</Th>
            <Td>Mark</Td>
            <Td>Otto</Td>
            <Td>@mdo</Td>
        </Tr>
        <Tr>
            <Td colspan={4}>
                <Table style={margin("b", 0)}>
                    <THead>
                        <Tr>
                            <Th scope="col">Header</Th>
                            <Th scope="col">Header</Th>
                            <Th scope="col">Header</Th>
                        </Tr>
                    </THead>
                    <TBody>
                        <Tr>
                            <Th scope="row">A</Th>
                            <Td>First</Td>
                            <Td>Last</Td>
                        </Tr>
                        <Tr>
                            <Th scope="row">B</Th>
                            <Td>First</Td>
                            <Td>Last</Td>
                        </Tr>
                        <Tr>
                            <Th scope="row">C</Th>
                            <Td>First</Td>
                            <Td>Last</Td>
                        </Tr>
                    </TBody>
                </Table>
            </Td>
        </Tr>
        <Tr>
            <Th scope="row">3</Th>
            <Td>Larry</Td>
            <Td>the Bird</Td>
            <Td>@twitter</Td>
        </Tr>
    </TBody>
</Table>`}
            </Code>
            <Anchor name="tables-anatomy">
                <h2>Anatomy</h2>
            </Anchor>
            <Anchor name="tables-anatomy-table-head">
                <h3>Table head</h3>
            </Anchor>
            <Example>
                <Table>
                    <THead variant="light">
                        <Tr>
                            <Th scope="col">#</Th>
                            <Th scope="col">First</Th>
                            <Th scope="col">Last</Th>
                            <Th scope="col">Handle</Th>
                        </Tr>
                    </THead>
                    <TBody>
                        <Tr>
                            <Th scope="row">1</Th>
                            <Td>Mark</Td>
                            <Td>Otto</Td>
                            <Td>@mdo</Td>
                        </Tr>
                        <Tr>
                            <Th scope="row">2</Th>
                            <Td>Jacob</Td>
                            <Td>Thornton</Td>
                            <Td>@fat</Td>
                        </Tr>
                        <Tr>
                            <Th scope="row">3</Th>
                            <Td colspan={2}>Larry the Bird</Td>
                            <Td>@twitter</Td>
                        </Tr>
                    </TBody>
                </Table>
            </Example>
            <Code language="tsx">{`<Table>
    <THead variant="light">
        <Tr>
            <Th scope="col">#</Th>
            <Th scope="col">First</Th>
            <Th scope="col">Last</Th>
            <Th scope="col">Handle</Th>
        </Tr>
    </THead>
    <TBody>
        <Tr>
            <Th scope="row">1</Th>
            <Td>Mark</Td>
            <Td>Otto</Td>
            <Td>@mdo</Td>
        </Tr>
        <Tr>
            <Th scope="row">2</Th>
            <Td>Jacob</Td>
            <Td>Thornton</Td>
            <Td>@fat</Td>
        </Tr>
        <Tr>
            <Th scope="row">3</Th>
            <Td colspan={2}>Larry the Bird</Td>
            <Td>@twitter</Td>
        </Tr>
    </TBody>
</Table>`}</Code>
            <Anchor name="tables-anatomy-table-foot">
                <h3>Table foot</h3>
            </Anchor>
            <Example>
                <Table>
                    <TableContent />
                    <TFoot>
                        <Tr>
                            <Td>Footer</Td>
                            <Td>Footer</Td>
                            <Td>Footer</Td>
                            <Td>Footer</Td>
                        </Tr>
                    </TFoot>
                </Table>
            </Example>
            <Code language="tsx">{`<Table>
    <TableContent />
    <TFoot>
        <Tr>
            <Td>Footer</Td>
            <Td>Footer</Td>
            <Td>Footer</Td>
            <Td>Footer</Td>
        </Tr>
    </TFoot>
</Table>`}</Code>
            <Anchor name="tables-captions">
                <h3>Captions</h3>
            </Anchor>
            <p>
                A <code>&lt;caption&gt;</code> functions like a heading for a table. It helps users with screen readers to find a table and
                understand what it’s about and decide if they want to read it.
            </p>
            <Example>
                <Table>
                    <TableContent />
                    <caption>List of users</caption>
                </Table>
            </Example>
            <Code language="tsx">{`<Table>
    <TableContent />
    <caption>List of users</caption>
</Table>`}</Code>
            <Example>
                <Table caption-top>
                    <TableContent />
                    <caption>List of users</caption>
                </Table>
            </Example>
            <Code language="tsx">{`<Table caption-top>
    <TableContent />
    <caption>List of users</caption>
</Table>`}</Code>
            <Anchor name="tables-responsive-tables">
                <h2>Responsive tables</h2>
            </Anchor>
            <p>
                Responsive tables allow tables to be scrolled horizontally with ease. Make any table responsive across all viewports by
                wrapping a <code>{`<Table>`}</code> in <code>{`<div style={tableResponsive()}>`}</code> prop. Or, pick a maximum breakpoint
                with which to have a responsive table up to by using <code>tableResponsive("{`{-sm | -md | -lg | -xl | -xxl}`}")</code>.
            </p>
            <Example>
                <div style={tableResponsive()}>
                    <Table>
                        <THead>
                            <Tr>
                                <Th scope="col">#</Th>
                                <Th scope="col">Heading</Th>
                                <Th scope="col">Heading</Th>
                                <Th scope="col">Heading</Th>
                                <Th scope="col">Heading</Th>
                                <Th scope="col">Heading</Th>
                                <Th scope="col">Heading</Th>
                                <Th scope="col">Heading</Th>
                                <Th scope="col">Heading</Th>
                                <Th scope="col">Heading</Th>
                            </Tr>
                        </THead>
                        <TBody>
                            <Tr>
                                <Th scope="row">1</Th>
                                <Td>Cell</Td>
                                <Td>Cell</Td>
                                <Td>Cell</Td>
                                <Td>Cell</Td>
                                <Td>Cell</Td>
                                <Td>Cell</Td>
                                <Td>Cell</Td>
                                <Td>Cell</Td>
                                <Td>Cell</Td>
                            </Tr>
                            <Tr>
                                <Th scope="row">2</Th>
                                <Td>Cell</Td>
                                <Td>Cell</Td>
                                <Td>Cell</Td>
                                <Td>Cell</Td>
                                <Td>Cell</Td>
                                <Td>Cell</Td>
                                <Td>Cell</Td>
                                <Td>Cell</Td>
                                <Td>Cell</Td>
                            </Tr>
                            <Tr>
                                <Th scope="row">3</Th>
                                <Td>Cell</Td>
                                <Td>Cell</Td>
                                <Td>Cell</Td>
                                <Td>Cell</Td>
                                <Td>Cell</Td>
                                <Td>Cell</Td>
                                <Td>Cell</Td>
                                <Td>Cell</Td>
                                <Td>Cell</Td>
                            </Tr>
                        </TBody>
                    </Table>
                </div>
            </Example>
            <Code language="tsx">{`<div style={tableResponsive()}>
    <Table>
        <THead>
            <Tr>
                <Th scope="col">#</Th>
                <Th scope="col">Heading</Th>
                <Th scope="col">Heading</Th>
                <Th scope="col">Heading</Th>
                <Th scope="col">Heading</Th>
                <Th scope="col">Heading</Th>
                <Th scope="col">Heading</Th>
                <Th scope="col">Heading</Th>
                <Th scope="col">Heading</Th>
                <Th scope="col">Heading</Th>
            </Tr>
        </THead>
        <TBody>
            <Tr>
                <Th scope="row">1</Th>
                <Td>Cell</Td>
                <Td>Cell</Td>
                <Td>Cell</Td>
                <Td>Cell</Td>
                <Td>Cell</Td>
                <Td>Cell</Td>
                <Td>Cell</Td>
                <Td>Cell</Td>
                <Td>Cell</Td>
            </Tr>
            <Tr>
                <Th scope="row">2</Th>
                <Td>Cell</Td>
                <Td>Cell</Td>
                <Td>Cell</Td>
                <Td>Cell</Td>
                <Td>Cell</Td>
                <Td>Cell</Td>
                <Td>Cell</Td>
                <Td>Cell</Td>
                <Td>Cell</Td>
            </Tr>
            <Tr>
                <Th scope="row">3</Th>
                <Td>Cell</Td>
                <Td>Cell</Td>
                <Td>Cell</Td>
                <Td>Cell</Td>
                <Td>Cell</Td>
                <Td>Cell</Td>
                <Td>Cell</Td>
                <Td>Cell</Td>
                <Td>Cell</Td>
            </Tr>
        </TBody>
    </Table>
</div>`}</Code>
        </>
    );
}

function TableContent(): b.IBobrilNode {
    return (
        <>
            <THead>
                <Tr>
                    <Th scope="col">#</Th>
                    <Th scope="col">First</Th>
                    <Th scope="col">Last</Th>
                    <Th scope="col">Handle</Th>
                </Tr>
            </THead>
            <TBody>
                <Tr>
                    <Th scope="row">1</Th>
                    <Td>Mark</Td>
                    <Td>Otto</Td>
                    <Td>@mdo</Td>
                </Tr>
                <Tr>
                    <Th scope="row">2</Th>
                    <Td>Jacob</Td>
                    <Td>Thornton</Td>
                    <Td>@fat</Td>
                </Tr>
                <Tr>
                    <Th scope="row">3</Th>
                    <Td colspan={2}>Larry the Bird</Td>
                    <Td>@twitter</Td>
                </Tr>
            </TBody>
        </>
    );
}
