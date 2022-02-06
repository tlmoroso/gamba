import React, {Component} from "react";
import {Grid, Container, Row, Col, Card, Button, Divider, Text} from '@nextui-org/react';
import {TwitchPlayer} from "./TwitchPlayer";

export class TwitchChannel extends Component {
    render() {
        return <Grid>
            <Card bordered color='primary'>
                <Container wrap="nowrap" gap={0}>
                    <Row align={"center"}>
                        <Col>
                            <Card css={{mw:'$96', linearGradient: '120deg, $yellow500 20%, $yellow300 80%', p:0}}>
                                <Card.Header css={{pt:0, pb:0}}>
                                    <h1>{this.props.channel}</h1>
                                </Card.Header>
                                <Divider/>
                                <Card.Body>
                                    <p>
                                        This is a test. Blah blah.
                                    </p>
                                </Card.Body>
                                <Divider/>
                                <Card.Footer>
                                    <Text css={{mr:'$4'}} color="#FFFFFF" h5>Tags:</Text>
                                    <Button clickable={false} rounded size='xs' color="secondary">esports</Button>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col span={4}>
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
