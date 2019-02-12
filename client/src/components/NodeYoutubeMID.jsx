import React from "react";
import YouTube from "react-youtube";

class NodeYoutubeMID extends React.Component {
  render() {
    const opts = {
      height: "390",
      width: "650",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    };

    return (
      <YouTube videoId="U8XF6AFGqlc" opts={opts} onReady={this._onReady} />
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default NodeYoutubeMID;
