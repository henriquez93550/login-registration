import React from "react";
import YouTube from "react-youtube";

class CSSyoutubeHRD extends React.Component {
  render() {
    const opts = {
      height: "390",
      width: "600",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    };

    return (
      <YouTube videoId="M3qBpPw77qo" opts={opts} onReady={this._onReady} />
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default CSSyoutubeHRD;
