const api = "https://api.twitch.tv/helix";
const clientID = "jnca89k0yl45epdx8i2q1u7qnffne4";

export const getTwitchUser = async user => {
  const param1 = "users";
  const param2 = "login";
  const returnedResponse = await fetch(`${api}/${param1}?${param2}=${user}`, {
    headers: {
      "Client-ID": clientID
    }
  });
  const userData = await returnedResponse.json();
  return userData;
};

export const getTwitchStream = async (user, first = 1) => {
  const param1 = "streams";
  const param2 = "first";
  const param3 = "user_login";
  const returnedResponse = await fetch(
    `${api}/${param1}?${param2}=${first}&${param3}=${user}`,
    {
      headers: {
        "Client-ID": clientID
      }
    }
  );
  const streamData = await returnedResponse.json();
  return streamData;
};

export const getChannelData = async userID => {
  const param1 = "channels";
  const param2 = userID;
  const returnedResponse = await fetch(`${api}/${param1}/${param2}`, {
    headers: {
      "Client-ID": clientID
    }
  });
  const channelData = await returnedResponse.json();
  console.log(channelData);
  return channelData;
};
