import React, { useEffect } from "react";
const TwitchPlayer = ({ username }) => {
  useEffect(() => {
    var options = {
      width: 854,
      height: 300,
      channel: username
    };
    var player = new window.Twitch.Player("twitchPlayerJS", options);
    player.setVolume(0.5);
  }, [username]);

  return <div id="twitchPlayerJS"></div>;
};

export default TwitchPlayer;
