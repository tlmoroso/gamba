import React, {Component} from "react";
import {Grid, Container, Row, Col, Card} from '@nextui-org/react';
import {TwitchPlayer} from "./TwitchPlayer";

export class TwitchChannel extends Component {
    render() {
        return <Grid xs>
            <Card bordered color='primary'>
            <Container wrap="nowrap">
                <Row>
                <Col>
                    <Container>
                        <Row>
                            <h1>{this.props.channel}</h1>
                        </Row>
                        <Row>
                            <p>
                                This is a test. Blah blah.
                            </p>
                        </Row>
                        <Row>
                            <p>
                                (esports)
                            </p>
                        </Row>
                    </Container>
                </Col>
                <Col span={3}>
                    <TwitchPlayer
                        channel={this.props.channel}
                    />
                </Col>
                </Row>
            </Container>
            </Card>
        </Grid>
    }
}
