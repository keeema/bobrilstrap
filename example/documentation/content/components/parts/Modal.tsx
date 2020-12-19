import * as b from "bobril";
import { IRouteWithNavDefinition } from "../../../../common/routing";
import { Anchor } from "../../../../common/Anchor";
import { Example } from "../../../../common/Example";
import { Button, IModal, Modal } from "../../../../../index";
import { Code } from "../../../../common/Code";
import { Lead } from "../../../../common/Lead";
import { CloseButton } from "../../../../../src/components/CloseButton";

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
            <Lead>Add dialogs to your site for lightboxes, user notifications, or completely custom content.</Lead>
            <Anchor name="modal-examples">
                <h2>Examples</h2>
            </Anchor>
            <Anchor name="modal-native">
                <h3>Native instance control</h3>
            </Anchor>
            <p>
                One way to define modal is to just call <code>modal controller instance</code> methods on the rendered model.
            </p>
            <Example>
                <InstanceControlExmaple />
            </Example>
            <Code language="tsx">{`function InstanceControlExmaple(): b.IBobrilNode {
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

<InstanceControlExmaple />`}</Code>
            <Anchor name="modal-reactive-and-native">
                <h3>Reactive and native</h3>
            </Anchor>
            <p>
                Better way is to combine native functionality with reactive composition of <code>virtual-dom</code>.
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
        </>
    );
}

function InstanceControlExmaple(): b.IBobrilNode {
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
