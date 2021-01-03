import * as b from "bobril";
import { IRouteWithNavDefinition } from "../../../../common/routing";
import { Anchor } from "../../../../common/Anchor";
import { Example } from "../../../../common/Example";
import {
    Breakpoint,
    Button,
    Col,
    Container,
    display,
    IModal,
    Modal,
    Row,
    Table,
    CloseButton,
    margin,
    breakpoints,
} from "../../../../../index";
import { Code } from "../../../../common/Code";
import { Lead } from "../../../../common/Lead";
import { LongContent } from "../../../../common/LoremIpsim";
import { gridStyle, tableStyle } from "../../../../common/styles";
import { OptionsTable, OptionsRow } from "../../../../common/OptionsTable";

export const modalRoute: IRouteWithNavDefinition = {
    url: "modal",
    name: "modal",
    label: "Modal",
    handler: () => <ModalDoc />,
    subs: [
        {
            url: "examples",
            name: "modal-examples",
            label: "Examples",
            subs: [
                {
                    url: "native",
                    name: "modal-examples-native",
                    label: "Native",
                    subs: [],
                },
                {
                    url: "reactive-and-native",
                    name: "modal-examples-reactive-and-native",
                    label: "Reactive and native",
                    subs: [],
                },
            ],
        },
        {
            url: "static-backdrop",
            name: "modal-static-backdrop",
            label: "Static backdrop",
            subs: [],
        },
        {
            url: "scrolling-long-content",
            name: "modal-scrolling-long-content",
            label: "Scrolling long content",
            subs: [],
        },
        {
            url: "vertically-centered",
            name: "modal-vertically-centered",
            label: "Vertically centered",
            subs: [],
        },
        {
            url: "using-the-grid",
            name: "modal-using-the-grid",
            label: "Using the grid",
            subs: [],
        },
        {
            url: "optional-sizes",
            name: "modal-optional-sizes",
            label: "Optional sizes",
            subs: [],
        },
        {
            url: "fullscreen-modal",
            name: "modal-fullscreen-modal",
            label: "Fullscreen modal",
            subs: [],
        },
        {
            url: "api",
            name: "modal-api",
            label: "API",
            subs: [],
        },
    ],
};

export function ModalDoc(): b.IBobrilNode {
    return (
        <>
            <Anchor name="modal">
                <h1>Modal</h1>
            </Anchor>
            <Lead>Add dialogs to your site for light-boxes, user notifications, or completely custom content.</Lead>
            <Anchor name="modal-examples">
                <h2>Examples</h2>
            </Anchor>
            <Anchor name="modal-examples-native">
                <h3>Native</h3>
            </Anchor>
            <p>
                One way to define modal is to just call <code>modal controller instance</code> methods on the rendered model.
            </p>
            <p>
                Add <code>fade</code> prop to animate the transition.
            </p>
            <Example>
                <InstanceControlExample />
            </Example>
            <Code language="tsx">{`function InstanceControlExample(): b.IBobrilNode {
    const [modal, setModal] = b.useState<IModal>({} as IModal);

    return (
        <>
            <Button variant="primary" onClick={() => modal.show()}>
                Show
            </Button>
            <Modal fade get-instance={(modalInstance) => setModal(modalInstance)}>
                <Modal.Dialog>
                    <Modal.Content>
                        <Modal.Header>
                            <Modal.Title>Modal Title</Modal.Title>
                            <CloseButton aria-label="Close" onClick={() => modal.hide()} />
                        </Modal.Header>
                        <Modal.Body>
                            <p>Modal body text goes here.</p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={() => modal.hide()}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={() => modal.hide()}>
                                Save changes
                            </Button>
                        </Modal.Footer>
                    </Modal.Content>
                </Modal.Dialog>
                test
            </Modal>
        </>
    );
}

<InstanceControlExample />`}</Code>
            <Anchor name="modal-examples-reactive-and-native">
                <h3>Reactive and native</h3>
            </Anchor>
            <p>
                Better way is to combine native functionality with reactive composition of <code>virtual-dom</code>. It allows you to use
                animations and gives you advantages of reactive behavior.
            </p>
            <Example>
                <ReactiveExample />
            </Example>
            <Code language="tsx">{`function ReactiveExample(): b.IBobrilNode {
    const [visible, setVisible] = b.useState(false);
    const [modal, setModal] = b.useState<IModal>({} as IModal);

    return (
        <>
            <Button variant="primary" onClick={() => setVisible(true)}>
                Show
            </Button>
            {visible && (
                <Modal
                    fade
                    get-instance={(modalInstance) => {
                        setModal(modalInstance);
                        modalInstance.show();
                    }}
                    onHidden={() => setVisible(false)}
                >
                    <Modal.Dialog>
                        <Modal.Content>
                            <Modal.Header>
                                <Modal.Title>Modal Title</Modal.Title>
                                <CloseButton aria-label="Close" onClick={() => modal.hide()} />
                            </Modal.Header>
                            <Modal.Body>
                                <p>Modal body text goes here.</p>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={() => modal.hide()}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={() => modal.hide()}>
                                    Save changes
                                </Button>
                            </Modal.Footer>
                        </Modal.Content>
                    </Modal.Dialog>
                </Modal>
            )}
        </>
    );
}

<ReactiveExample />`}</Code>
            <Anchor name="modal-static-backdrop">
                <h2>Static backdrop</h2>
            </Anchor>
            <p>
                When <code>backdrop</code> prop is set to <code>static</code>, the modal will not close when clicking outside it. Click the
                button below to try it.
            </p>
            <Example>
                <StaticBackdropExample />
            </Example>
            <Code language="tsx">{`function StaticBackdropExample(): b.IBobrilNode {
    const [visible, setVisible] = b.useState(false);
    const [modal, setModal] = b.useState<IModal>({} as IModal);

    return (
        <>
            <Button variant="primary" onClick={() => setVisible(true)}>
                Show
            </Button>
            {visible && (
                <Modal
                    fade
                    backdrop="static"
                    keyboard={false}
                    get-instance={(modalInstance) => {
                        setModal(modalInstance);
                        modalInstance.show();
                    }}
                    onHidden={() => setVisible(false)}
                >
                    <Modal.Dialog>
                        <Modal.Content>
                            <Modal.Header>
                                <Modal.Title>Modal Title</Modal.Title>
                                <CloseButton aria-label="Close" onClick={() => modal.hide()} />
                            </Modal.Header>
                            <Modal.Body>
                                <p>I will not close if you click outside me. Don't even try to press escape key.</p>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={() => modal.hide()}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={() => modal.hide()}>
                                    Understood
                                </Button>
                            </Modal.Footer>
                        </Modal.Content>
                    </Modal.Dialog>
                </Modal>
            )}
        </>
    );
}

<StaticBackdropExample />`}</Code>
            <Anchor name="modal-scrolling-long-content">
                <h2>Scrolling long content</h2>
            </Anchor>
            <p>When modals become too long for the user’s viewport or device, they scroll independent of the page itself.</p>
            <p>
                You can create a scrollable modal that allows scroll the modal body by adding <code>scrollable</code> prop.
            </p>
            <Example>
                <ScrollableExample />
            </Example>
            <Code language="tsx">{`<Modal.Dialog scrollable>`}</Code>
            <Anchor name="modal-vertically-centered">
                <h2>Vertically centered</h2>
            </Anchor>
            <p>
                Add <code>centered</code> prop to vertically center the modal.
            </p>
            <Example>
                <VerticallyCenteredExample />
            </Example>
            <Code language="tsx">{`<Modal.Dialog centered>`}</Code>
            <Anchor name="modal-using-the-grid">
                <h2>Using the grid</h2>
            </Anchor>
            <p>
                Utilize the Bootstrap grid system within a modal by nesting <code>{`<Container fluid>`}</code> within the{" "}
                <code>{`<Modal.Body>`}</code>. Then, use the normal grid system components as you would anywhere else.
            </p>
            <Example>
                <GridExample />
            </Example>
            <Code language="tsx">{`function GridExample(): b.IBobrilNode {
    const [visible, setVisible] = b.useState(false);
    const [modal, setModal] = b.useState<IModal>({} as IModal);

    return (
        <>
            <Button variant="primary" onClick={() => setVisible(true)}>
                Show
            </Button>
            {visible && (
                <Modal
                    fade
                    get-instance={(modalInstance) => {
                        setModal(modalInstance);
                        modalInstance.show();
                    }}
                    onHidden={() => setVisible(false)}
                >
                    <Modal.Dialog>
                        <Modal.Content>
                            <Modal.Header>
                                <Modal.Title>Modal Title</Modal.Title>
                                <CloseButton aria-label="Close" onClick={() => modal.hide()} />
                            </Modal.Header>
                            <Modal.Body>
                                <Container fluid>
                                    <Row>
                                        <Col md={4}>.col-md-4</Col>
                                        <Col md={4} style={margin("s", "auto")}>
                                            col-md-4 ms-auto
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={3} style={margin("s", "auto")}>
                                            col-md-3 ms-auto
                                        </Col>
                                        <Col md={2} style={margin("s", "auto")}>
                                            col-md-2 ms-auto
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={6} style={margin("s", "auto")}>
                                            col-md-6 ms-auto
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={9}>
                                            Level 1: .col-sm-9
                                            <Row>
                                                <Col span={8} sm={6}>
                                                    Level 2: col-8 col-sm-6
                                                </Col>
                                                <Col span={4} sm={6}>
                                                    Level 2: col-4 col-sm-6
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Container>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={() => modal.hide()}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={() => modal.hide()}>
                                    Save changes
                                </Button>
                            </Modal.Footer>
                        </Modal.Content>
                    </Modal.Dialog>
                </Modal>
            )}
        </>
    );
}

<GridExample />`}</Code>
            <Anchor name="modal-optional-sizes">
                <h2>Optional sizes</h2>
            </Anchor>
            <p>
                Modals have three optional sizes, available via <code>size</code> prop to be placed on a <code>{`<Modal.Dialog>`}</code>.
                These sizes kick in at certain breakpoints to avoid horizontal scrollbars on narrower viewports.
            </p>
            <Table style={[tableStyle, display("block"), display("table", "sm")]}>
                <thead>
                    <tr>
                        <th>Size</th>
                        <th>Prop value</th>
                        <th>Modal max-width</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Small</td>
                        <td>
                            <code>sm</code>
                        </td>
                        <td>
                            <code>300px</code>
                        </td>
                    </tr>
                    <tr>
                        <td>Default</td>
                        <td class="text-muted">None</td>
                        <td>
                            <code>500px</code>
                        </td>
                    </tr>
                    <tr>
                        <td>Large</td>
                        <td>
                            <code>lg</code>
                        </td>
                        <td>
                            <code>800px</code>
                        </td>
                    </tr>
                    <tr>
                        <td>Extra large</td>
                        <td>
                            <code>xl</code>
                        </td>
                        <td>
                            <code>1140px</code>
                        </td>
                    </tr>
                </tbody>
            </Table>
            <Example>
                {new Array<Breakpoint | undefined>("sm", undefined, "lg", "xl").map((breakpoint) => (
                    <>
                        <SizeExample size={breakpoint} />{" "}
                    </>
                ))}
            </Example>
            <Code language="tsx">
                {new Array<Breakpoint | undefined>("sm", undefined, "lg", "xl").map(
                    (breakpoint) => `<Modal.Dialog${breakpoint ? ` size="${breakpoint}"` : ""}>\n`
                )}
            </Code>
            <Anchor name="modal-fullscreen-modal">
                <h2>Fullscreen Modal</h2>
            </Anchor>
            <p>
                Another override is the option to pop up a modal that covers the user viewport, available via <code>full-screen</code> prop
                that are placed on a <code>{`<Modal.Dialog>`}</code>.
            </p>
            <Table style={[tableStyle, display("block"), display("table", "sm")]}>
                <thead>
                    <tr>
                        <th>Value</th>
                        <th>Availability</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <code>true</code>
                        </td>
                        <td>Always</td>
                    </tr>
                    <tr>
                        <td>
                            <code>sm</code>
                        </td>
                        <td>
                            Below <code>576px</code>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <code>md</code>
                        </td>
                        <td>
                            Below <code>768px</code>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <code>lg</code>
                        </td>
                        <td>
                            Below <code>992px</code>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <code>xl</code>
                        </td>
                        <td>
                            Below <code>1200px</code>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <code>xxl</code>
                        </td>
                        <td>
                            Below <code>1400px</code>
                        </td>
                    </tr>
                </tbody>
            </Table>
            <Example>
                {new Array<Breakpoint | boolean>(true, ...breakpoints).map((breakpoint) => (
                    <>
                        <FullscreenExample size={breakpoint} />{" "}
                    </>
                ))}
            </Example>
            <Code language="tsx">
                {new Array<Breakpoint | boolean>(true, ...breakpoints).map(
                    (breakpoint) => `<Modal.Dialog ${breakpoint !== true ? `full-screen="${breakpoint}"` : "full-screen"}>\n`
                )}
            </Code>
            <Anchor name="modal-api">
                <h2>API</h2>
            </Anchor>
            <p>
                Modal is controlled by <code>modal controller</code> provided in the callback prop <code>get-instance</code>.
            </p>
            <OptionsTable>
                <OptionsRow>
                    {{
                        name: "backdrop",
                        type: `boolean | "static"`,
                        defaultValue: "true",
                        description: (
                            <p>
                                Includes a modal-backdrop element. Alternatively, specify <code>static</code> for a backdrop which doesn't
                                close the modal on click.
                            </p>
                        ),
                    }}
                </OptionsRow>
                <OptionsRow>
                    {{
                        name: "keyboard",
                        type: "boolean",
                        defaultValue: "true",
                        description: "Closes the modal when escape key is pressed",
                    }}
                </OptionsRow>
                <OptionsRow>
                    {{
                        name: "focus",
                        type: "boolean",
                        defaultValue: "true",
                        description: "Puts the focus on the modal when initialized.",
                    }}
                </OptionsRow>
                <OptionsRow>
                    {{
                        name: "get-instance",
                        type: "(modal: IModal): void",
                        defaultValue: "undefined",
                        description: (
                            <p>
                                This callback is fired when modal is initialized and provides <code>modal</code> as controller instance.
                            </p>
                        ),
                    }}
                </OptionsRow>
                <OptionsRow>
                    {{
                        name: "onHidePrevented",
                        type: "(): void",
                        defaultValue: "undefined",
                        description:
                            "This event is fired when the modal is shown, its backdrop is static and a click outside the modal or an escape key press is performed with the keyboard option or data-bs-keyboard set to false.",
                    }}
                </OptionsRow>
                <OptionsRow>
                    {{
                        name: "onHide",
                        type: "(): void",
                        defaultValue: "undefined",
                        description: "This event is fired immediately when the hide instance method has been called.",
                    }}
                </OptionsRow>
                <OptionsRow>
                    {{
                        name: "onHidden",
                        type: "(): void",
                        defaultValue: "undefined",
                        description:
                            "This event is fired when the modal has finished being hidden from the user (will wait for CSS transitions to complete).",
                    }}
                </OptionsRow>

                <OptionsRow>
                    {{
                        name: "onShow",
                        type: "(): void",
                        defaultValue: "undefined",
                        description: "This event fires immediately when the show instance method is called.",
                    }}
                </OptionsRow>
                <OptionsRow>
                    {{
                        name: "onShown",
                        type: "(): void",
                        defaultValue: "undefined",
                        description:
                            "This event is fired when the modal has been made visible to the user (will wait for CSS transitions to complete).",
                    }}
                </OptionsRow>
            </OptionsTable>
        </>
    );
}

function InstanceControlExample(): b.IBobrilNode {
    const [modal, setModal] = b.useState<IModal>({} as IModal);

    return (
        <>
            <Button variant="primary" onClick={() => modal.show()}>
                Show
            </Button>
            <Modal fade get-instance={(modalInstance) => setModal(modalInstance)}>
                <Modal.Dialog>
                    <Modal.Content>
                        <Modal.Header>
                            <Modal.Title>Modal Title</Modal.Title>
                            <CloseButton aria-label="Close" onClick={() => modal.hide()} />
                        </Modal.Header>
                        <Modal.Body>
                            <p>Modal body text goes here.</p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={() => modal.hide()}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={() => modal.hide()}>
                                Save changes
                            </Button>
                        </Modal.Footer>
                    </Modal.Content>
                </Modal.Dialog>
            </Modal>
        </>
    );
}

function ReactiveExample(): b.IBobrilNode {
    const [visible, setVisible] = b.useState(false);
    const [modal, setModal] = b.useState<IModal>({} as IModal);

    return (
        <>
            <Button variant="primary" onClick={() => setVisible(true)}>
                Show
            </Button>
            {visible && (
                <Modal
                    fade
                    get-instance={(modalInstance) => {
                        setModal(modalInstance);
                        modalInstance.show();
                    }}
                    onHidden={() => setVisible(false)}
                >
                    <Modal.Dialog>
                        <Modal.Content>
                            <Modal.Header>
                                <Modal.Title>Modal Title</Modal.Title>
                                <CloseButton aria-label="Close" onClick={() => modal.hide()} />
                            </Modal.Header>
                            <Modal.Body>
                                <p>Modal body text goes here.</p>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={() => modal.hide()}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={() => modal.hide()}>
                                    Save changes
                                </Button>
                            </Modal.Footer>
                        </Modal.Content>
                    </Modal.Dialog>
                </Modal>
            )}
        </>
    );
}

function StaticBackdropExample(): b.IBobrilNode {
    const [visible, setVisible] = b.useState(false);
    const [modal, setModal] = b.useState<IModal>({} as IModal);

    return (
        <>
            <Button variant="primary" onClick={() => setVisible(true)}>
                Show
            </Button>
            {visible && (
                <Modal
                    fade
                    backdrop="static"
                    keyboard={false}
                    get-instance={(modalInstance) => {
                        setModal(modalInstance);
                        modalInstance.show();
                    }}
                    onHidden={() => setVisible(false)}
                >
                    <Modal.Dialog>
                        <Modal.Content>
                            <Modal.Header>
                                <Modal.Title>Modal Title</Modal.Title>
                                <CloseButton aria-label="Close" onClick={() => modal.hide()} />
                            </Modal.Header>
                            <Modal.Body>
                                <p>I will not close if you click outside me. Don't even try to press escape key.</p>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={() => modal.hide()}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={() => modal.hide()}>
                                    Understood
                                </Button>
                            </Modal.Footer>
                        </Modal.Content>
                    </Modal.Dialog>
                </Modal>
            )}
        </>
    );
}

function ScrollableExample(): b.IBobrilNode {
    const [visible, setVisible] = b.useState(false);
    const [modal, setModal] = b.useState<IModal>({} as IModal);

    return (
        <>
            <Button variant="primary" onClick={() => setVisible(true)}>
                Show
            </Button>
            {visible && (
                <Modal
                    fade
                    get-instance={(modalInstance) => {
                        setModal(modalInstance);
                        modalInstance.show();
                    }}
                    onHidden={() => setVisible(false)}
                >
                    <Modal.Dialog scrollable>
                        <Modal.Content>
                            <Modal.Header>
                                <Modal.Title>Modal Title</Modal.Title>
                                <CloseButton aria-label="Close" onClick={() => modal.hide()} />
                            </Modal.Header>
                            <Modal.Body>
                                <LongContent />
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={() => modal.hide()}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={() => modal.hide()}>
                                    Save changes
                                </Button>
                            </Modal.Footer>
                        </Modal.Content>
                    </Modal.Dialog>
                </Modal>
            )}
        </>
    );
}

function VerticallyCenteredExample(): b.IBobrilNode {
    const [visible, setVisible] = b.useState(false);
    const [modal, setModal] = b.useState<IModal>({} as IModal);

    return (
        <>
            <Button variant="primary" onClick={() => setVisible(true)}>
                Show
            </Button>
            {visible && (
                <Modal
                    fade
                    get-instance={(modalInstance) => {
                        setModal(modalInstance);
                        modalInstance.show();
                    }}
                    onHidden={() => setVisible(false)}
                >
                    <Modal.Dialog centered>
                        <Modal.Content>
                            <Modal.Header>
                                <Modal.Title>Modal Title</Modal.Title>
                                <CloseButton aria-label="Close" onClick={() => modal.hide()} />
                            </Modal.Header>
                            <Modal.Body>Modal body.</Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={() => modal.hide()}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={() => modal.hide()}>
                                    Save changes
                                </Button>
                            </Modal.Footer>
                        </Modal.Content>
                    </Modal.Dialog>
                </Modal>
            )}
        </>
    );
}

function GridExample(): b.IBobrilNode {
    const [visible, setVisible] = b.useState(false);
    const [modal, setModal] = b.useState<IModal>({} as IModal);

    return (
        <>
            <Button variant="primary" onClick={() => setVisible(true)}>
                Show
            </Button>
            {visible && (
                <Modal
                    fade
                    get-instance={(modalInstance) => {
                        setModal(modalInstance);
                        modalInstance.show();
                    }}
                    onHidden={() => setVisible(false)}
                >
                    <Modal.Dialog>
                        <Modal.Content>
                            <Modal.Header>
                                <Modal.Title>Modal Title</Modal.Title>
                                <CloseButton aria-label="Close" onClick={() => modal.hide()} />
                            </Modal.Header>
                            <Modal.Body>
                                <Container fluid>
                                    <Row>
                                        <Col md={4} style={gridStyle}>
                                            col-md-4
                                        </Col>
                                        <Col md={4} style={[gridStyle, margin("s", "auto")]}>
                                            col-md-4 ms-auto
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={3} style={[gridStyle, margin("s", "auto")]}>
                                            col-md-3 ms-auto
                                        </Col>
                                        <Col md={2} style={[gridStyle, margin("s", "auto")]}>
                                            col-md-2 ms-auto
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={6} style={[gridStyle, margin("s", "auto")]}>
                                            col-md-6 ms-auto
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={9} style={gridStyle}>
                                            Level 1: col-sm-9
                                            <Row>
                                                <Col span={8} sm={6} style={gridStyle}>
                                                    Level 2: col-8 col-sm-6
                                                </Col>
                                                <Col span={4} sm={6} style={gridStyle}>
                                                    Level 2: col-4 col-sm-6
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Container>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={() => modal.hide()}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={() => modal.hide()}>
                                    Save changes
                                </Button>
                            </Modal.Footer>
                        </Modal.Content>
                    </Modal.Dialog>
                </Modal>
            )}
        </>
    );
}

function SizeExample({ size }: { size?: Breakpoint }): b.IBobrilNode {
    const [visible, setVisible] = b.useState(false);
    const [modal, setModal] = b.useState<IModal>({} as IModal);

    return (
        <>
            <Button variant="primary" onClick={() => setVisible(true)}>
                Show {size ?? "normal"}
            </Button>
            {visible && (
                <Modal
                    fade
                    get-instance={(modalInstance) => {
                        setModal(modalInstance);
                        modalInstance.show();
                    }}
                    onHidden={() => setVisible(false)}
                >
                    <Modal.Dialog size={size}>
                        <Modal.Content>
                            <Modal.Header>
                                <Modal.Title>Modal Title</Modal.Title>
                                <CloseButton aria-label="Close" onClick={() => modal.hide()} />
                            </Modal.Header>
                            <Modal.Body>Modal body.</Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={() => modal.hide()}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={() => modal.hide()}>
                                    Save changes
                                </Button>
                            </Modal.Footer>
                        </Modal.Content>
                    </Modal.Dialog>
                </Modal>
            )}
        </>
    );
}
function FullscreenExample({ size }: { size: Breakpoint | boolean }): b.IBobrilNode {
    const [visible, setVisible] = b.useState(false);
    const [modal, setModal] = b.useState<IModal>({} as IModal);

    return (
        <>
            <Button variant="primary" onClick={() => setVisible(true)}>
                Show {size ?? "normal"}
            </Button>
            {visible && (
                <Modal
                    fade
                    get-instance={(modalInstance) => {
                        setModal(modalInstance);
                        modalInstance.show();
                    }}
                    onHidden={() => setVisible(false)}
                >
                    <Modal.Dialog full-screen={size}>
                        <Modal.Content>
                            <Modal.Header>
                                <Modal.Title>Modal Title</Modal.Title>
                                <CloseButton aria-label="Close" onClick={() => modal.hide()} />
                            </Modal.Header>
                            <Modal.Body>Modal body.</Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={() => modal.hide()}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={() => modal.hide()}>
                                    Save changes
                                </Button>
                            </Modal.Footer>
                        </Modal.Content>
                    </Modal.Dialog>
                </Modal>
            )}
        </>
    );
}
