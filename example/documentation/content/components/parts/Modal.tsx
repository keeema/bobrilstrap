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
            <Anchor name="modal-reactive">
                <h3>Reactive</h3>
            </Anchor>
            <p>
                Second way is to use reactive <code>virtual-dom</code> composition.
            </p>
            <p>
                If <code>get-instance</code> prop is not defined then <code>{`<Modal>`}</code> is initiated automatically as visible when
                the element appears in DOM.
            </p>
            <p>This way has incomplete fade-out animation while closing.</p>
            <Example>
                <ReactiveNoAnimation />
            </Example>
            <Code language="tsx">{`function ReactiveNoAnimation(): b.IBobrilNode {
    const [visible, setVisible] = b.useState(false);

    return (
        <>
            <Button variant="primary" onClick={() => setVisible(true)}>
                Show
            </Button>
            {visible && (
                <Modal fade>
                    <Modal.Dialog>
                        <Modal.Content>
                            <Modal.Header>
                                <Modal.Title>Modal Title</Modal.Title>
                                <CloseButton aria-label="Close" onClick={() => setVisible(false)} />
                            </Modal.Header>
                            <Modal.Body>
                                <p>Modal body text goes here.</p>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={() => setVisible(false)}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={() => setVisible(false)}>
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

<ReactiveNoAnimation />`}</Code>
            <Anchor name="modal-reactive-and-native">
                <h3>Reactive and native</h3>
            </Anchor>
            <p>
                Better and fully working way is to combine native functionality with reactive composition of <code>virtual-dom</code>. It
                allows you to use animations and gives you advantages of reactive behavior.
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
                test
            </Modal>
        </>
    );
}

function ReactiveNoAnimation(): b.IBobrilNode {
    const [visible, setVisible] = b.useState(false);

    return (
        <>
            <Button variant="primary" onClick={() => setVisible(true)}>
                Show
            </Button>
            {visible && (
                <Modal fade>
                    <Modal.Dialog>
                        <Modal.Content>
                            <Modal.Header>
                                <Modal.Title>Modal Title</Modal.Title>
                                <CloseButton aria-label="Close" onClick={() => setVisible(false)} />
                            </Modal.Header>
                            <Modal.Body>
                                <p>Modal body text goes here.</p>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={() => setVisible(false)}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={() => setVisible(false)}>
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
