import React, {Component} from "react";
import { Grid } from '@nextui-org/react';

export class ZoomList extends Component {
    render() {
        return <Grid.Container
            justify="center"
            wrap="nowrap"
            direction="column"
            gap={2}
            css={{
                oy:'scroll',
            }}
        >
            {this.props.children}
        </Grid.Container>
    }
}
