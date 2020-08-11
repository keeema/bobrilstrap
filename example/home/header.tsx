import * as b from "bobril";
import * as images from "../images/images";
import * as routes from "../routes";
import { Container, Row, Col, Button, margin, padding, order, textAlign } from "../../index";

export function HomeHeader(): b.IBobrilNode {
    return (
        <main style={[masterHeadStyle]}>
            <Container>
                <Row>
                    <Col span={6} md={4} style={[margin({ side: "x", size: "auto" }), order(2, "md")]}>
                        <div style={[images.bobrilstrap, margin({ side: "x", size: "auto" })]}></div>
                    </Col>
                    <Col md={8} style={[padding({ side: "r", size: 5, breakpoint: "md" }), textAlign("center"), textAlign("left", "md")]}>
                        <h1 style={masterHeadTitleStyle}>Bobrilstrap</h1>
                        <p style={leadStyle}>
                            Build awesome responsive mobile-first applications based on framework Bobril and its wrapper for Bootstrap.
                        </p>
                        <Button variant="dark" href={b.urlOfRoute(routes.documentation.name)}>
                            Get Started
                        </Button>
                    </Col>
                </Row>
            </Container>
        </main>
    );
}

export const masterHeadStyle = b.styleDef({ paddingTop: "5rem", paddingBottom: "5rem", backgroundColor: "LightGray" });
export const masterHeadTitleStyle = b.styleDef({ fontSize: "4rem" });
export const leadStyle = b.styleDef({ fontSize: "1.5rem" });
