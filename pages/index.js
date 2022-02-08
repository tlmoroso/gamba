import {useTheme, Text, Grid, Button} from "@nextui-org/react";
import {TwitchChannel} from "../components/TwitchChannel";
import {ZoomList} from "../components/ZoomList";
import {
    TWITCH_CLIENT_ID,
    TWITCH_CLIENT_ID_PARAM,
    TWITCH_FORCE_VERIFY_PARAM, TWITCH_OAUTH_URI,
    TWITCH_REDIRECT_URI_LOCAL_DEV,
    TWITCH_REDIRECT_URI_PARAM,
    TWITCH_RESPONSE_TYPE_PARAM,
    TWITCH_RESPONSE_TYPE_TOKEN,
    TWITCH_SCOPE_PARAM,
    TWITCH_STATE_PARAM, TWITCH_TOKEN_BEARER_QUERY_VALUE
} from "../constants";
import {useRouter, withRouter} from "next/router";
import {Component} from "react";

const { List } = require('immutable');
const axios = require('axios');
const path = require('path');

export default function Index(props) {
    const theme = useTheme();
    const router = useRouter();
    console.log("Props="+props.toString());

    return <Home theme={theme} router={router} {...props} />
}

export async function getServerSideProps(ctx) {
    return {
        props: {
            query: ctx.query
        }
    }
}

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {token: "", csrf_token: process.env.csrf_token,};
    }

    componentDidMount() {
        const twitchPathParser = new RegExp("\\/#access_token=(?<token>\\w+)&scope=(?<scope>(([a-zA-Z]_)*[a-zA-Z])*)&state=(?<state>(\\d+))&token_type=(?<token_type>[a-zA-Z]+)");
        console.log(this.props.router.asPath.match(twitchPathParser));

        let twitch_info = this.props.router.asPath.match(twitchPathParser);

        if (twitch_info) {console.log(twitch_info.groups);}

        if (twitch_info && (parseInt(twitch_info.groups.state) === this.state.csrf_token)) {
            console.log("CSRF Token matched ours.");
            if (twitch_info.groups.token_type === TWITCH_TOKEN_BEARER_QUERY_VALUE) {
                this.setState({token: twitch_info.groups.token});
                console.log("Twitch Redirect Token Hash: " + twitch_info.groups.token);
            }
        } else {
            console.log("CSRF Token did not match ours. Ours="+this.state.csrf_token+" Theirs="+twitch_info.groups.state);
        }

        // console.log("Twitch OAuth URL: " + TWITCH_OAUTH_URI + twitch_query_params.toString());

        // axios.get({
        //     baseurl: TWITCH_OAUTH_URI + twitch_query_params.toString(),
        //     headers: {'Content-Type':'application/x-www-form-urlencoded'}
        // })
        //     .then(resp => {
        //         console.log("Twitch Oauth response: " + resp.toString());
        //         console.log("Router queries: " + queries.toString());
        //         if (queries.state && (queries.state === this.state.csrf_token)) {
        //             console.log("CSRF Token matched ours.");
        //             if (queries.token_type === TWITCH_TOKEN_BEARER_QUERY_VALUE) {
        //                 this.setState({token: document.location.hash});
        //                 console.log("Twitch Redirect Token Hash: " + document.location.hash);
        //             }
        //         }
        //     })
        //     .catch(error => {
        //         console.log("Twitch Oauth Error: " + error.toString());
        //     });
    }

    render() {
        const { theme } = this.props.theme;
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
                        {this.loginToTwitch()}
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

    loginToTwitch() {
        if (this.state.token === "") {
            let twitch_query_params = new URLSearchParams();
            twitch_query_params.append(TWITCH_CLIENT_ID_PARAM, TWITCH_CLIENT_ID);
            twitch_query_params.append(TWITCH_REDIRECT_URI_PARAM, TWITCH_REDIRECT_URI_LOCAL_DEV);
            twitch_query_params.append(TWITCH_RESPONSE_TYPE_PARAM, TWITCH_RESPONSE_TYPE_TOKEN);
            twitch_query_params.append(TWITCH_SCOPE_PARAM, "");
            twitch_query_params.append(TWITCH_FORCE_VERIFY_PARAM, "true");
            twitch_query_params.append(TWITCH_STATE_PARAM, this.state.csrf_token);

            let twitch_url = TWITCH_OAUTH_URI + twitch_query_params.toString()

            return (
                <a href={twitch_url}>
                    <Button color="secondary" clickable={true}>Twitch Login</Button>
                </a>
            )
        } else {
            return (
                <Button color="secondary" ghost={true} bordered={true} clickable={false}>Logged In</Button>
            )
        }
    }
}
