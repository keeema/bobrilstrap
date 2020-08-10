import * as b from "bobril";
import * as images from "../images/images";
import * as routes from "../routes";
import { Container } from "../../src/layouts/container";
import { Row } from "../../src/layouts/row";
import { Col } from "../../src/layouts/col";
import { Button } from "../../src/components/button";

export function Home(): b.IBobrilNode {
    return (
        <main style={[masterHeadStyle]}>
            <Container>
                <Row>
                    <Col span={8}>
                        <h1 style={masterHeadTitleStyle}>Bobrilstrap</h1>
                        <p style={leadStyle}>
                            Build awesome responsive mobile-first applications based on framework Bobril and its wrapper for Bootstrap.
                        </p>
                        <Button variant="dark" href={b.urlOfRoute(routes.documentation.name)}>
                            Get Started
                        </Button>
                    </Col>
                    <Col span={4}>
                        <div style={images.bobrilstrap}></div>
                    </Col>
                </Row>
            </Container>
        </main>
    );
}

export const masterHeadStyle = b.styleDef({ paddingTop: "5rem", paddingBottom: "5rem", backgroundColor: "LightGray" });
export const masterHeadTitleStyle = b.styleDef({ fontSize: "4rem" });
export const leadStyle = b.styleDef({ fontSize: "1.5rem" });
