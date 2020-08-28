import * as b from "bobril";
import { Container, Row, Col, padding } from "../../index";

export function HomeContent(): b.IBobrilNode {
    return (
        <Container>
            <Row>
                <Paragraph>
                    <h4>Powered by Bobril</h4>
                    <p>Bobrilstrap transforms Bootstrap framework to components, styles and utilities for react-like framework Bobril.</p>
                </Paragraph>
                <Paragraph>
                    <h4>Type Safe</h4>
                    <p>Bobrilstrap and Bobril both use TypeScript to keep the code reliable and safe.</p>
                </Paragraph>
                <Paragraph>
                    <h4>Easy to use</h4>
                    <p>
                        Bobrilstrap and its components are ready as TSX components which are supposed to be used the standard way is known
                        from Bobril or React.
                    </p>
                </Paragraph>
            </Row>
        </Container>
    );
}

function Paragraph({ children }: { children: b.IBobrilChildren }): b.IBobrilNode {
    return (
        <Col span={12} md={4} style={padding({ side: "t", size: 3 })}>
            {children}
        </Col>
    );
}
