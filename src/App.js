import React, { useState } from "react";
import Header from "./Components/Templates/Header";
import Form from "./Components/Form";
import { getTwitchUser, getTwitchStream } from "./Components/API";
import Results from "./Components/Results";
import Footer from "./Components/Templates/Footer";
import { render } from "react-dom";

function App() {
  const [user, setUser] = useState("");
  const [userData, setUserData] = useState(null);
  const [streamData, setStreamData] = useState(null);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [renderResults, setRenderResults] = useState(false);

  const updateUsername = twitchUser => {
    setUser(twitchUser);
  };

  const submitUser = async event => {
    event.preventDefault();
    if (user <= 0) {
      setError(true);
      setErrorMsg("You didn't type in a username! Try again!");
      setUserData("");
    } else {
      setError(false);
      const userDataReturn = await getTwitchUser(user);
      const streamDataReturn = await getTwitchStream(user);
      if (userDataReturn.data[0] === undefined) {
        setError(true);
        setErrorMsg("There was no user by that name!");
        setUserData("");
      } else {
        setError(false);
        setRenderResults(true);
        setUserData(userDataReturn);
        setStreamData(streamDataReturn);
      }
    }
  };

  const toggleRender = () => {
    if (renderResults) {
      setRenderResults(false);
      setUser("");
      setUserData("");
      setStreamData(null);
    }
  };

  return (
    <>
      <Header />
      <div className="container mt-4">
        {error ? <div className="alert alert-twitch">{errorMsg}</div> : null}
        {!renderResults ? (
          <Form
            formAction="/"
            formMethod="POST"
            updateUsername={updateUsername}
            submitUser={submitUser}
          />
        ) : (
          <Results
            toggleRender={toggleRender}
            streamData={streamData}
            dataRender={userData}
          />
        )}
        <Footer />
      </div>
    </>
  );
}

export default App;
