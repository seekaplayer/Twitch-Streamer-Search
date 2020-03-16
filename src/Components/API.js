const getTwitchUser = async user => {
  const api = "https://api.twitch.tv/helix";
  const param1 = "users";
  const param2 = "login";
  const clientID = "jnca89k0yl45epdx8i2q1u7qnffne4";

  const returnedResponse = await fetch(`${api}/${param1}?${param2}=${user}`, {
    headers: {
      "Client-ID": clientID
    }
  });
  const userData = await returnedResponse.json();
  return userData;
};

export default getTwitchUser;
