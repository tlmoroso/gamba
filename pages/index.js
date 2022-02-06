import { useTheme, Text, Grid } from "@nextui-org/react";
import {TwitchChannel} from "../components/TwitchChannel";
import {ZoomList} from "../components/ZoomList";

const { List } = require('immutable');

export default function Home() {
    const { theme } = useTheme();
    const channels = List([
        "LEC",
        "Brawlhalla",
        "RocketLeague",
        "monstercat"
    ]);

    let channel_elements = channels.map(channel => <TwitchChannel channel={channel}/>);

  return (
      <div css={{ov:'hidden'}}>
        <Grid.Container direction='column'>
            <Grid>
                <Text
                    h1
                    size={60}
                    css={{
                        textGradient: '45deg, $yellow500 0%, $yellow200 30%'
                    }}
                    weight="bold"
                >
                    Gamba!
                </Text>
            </Grid>
            <Grid css={{top:0,bottom:0,left:0,right:0}}>
                <ZoomList>
                    {channel_elements}
                </ZoomList>
            </Grid>
        </Grid.Container>
      </div>
  )
}
