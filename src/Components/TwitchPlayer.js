import React, { useEffect } from "react";
const TwitchPlayer = ({ username }) => {
  useEffect(() => {
    var options = {
      channel: username
    };
    var player = new window.Twitch.Player("twitchPlayerJS", options);
    player.setVolume(0.5);
  }, [username]);

  return (
    <>
      <div className="twitchPlayer">
        <div id="twitchPlayerJS"></div>
      </div>
    </>
  );
};

export default TwitchPlayer;
