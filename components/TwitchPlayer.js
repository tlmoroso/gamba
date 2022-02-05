import React, {Component} from "react";

export class TwitchPlayer extends React.Component{
    render() {
        let src = "https://player.twitch.tv/"+"?channel="+this.props.channel+"&autoplay=false"+"&parent=localhost";

        return <div>
            <iframe
                frameBorder="0"
                scrolling="no"
                src={src}
                height="100%"
                width="100%">
            </iframe>
        </div>
    }
}
