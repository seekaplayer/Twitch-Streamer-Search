import React from "react";

const Footer = () => {
  return (
    <footer className="text-center mt-5">
      &copy; {new Date().getFullYear()} Streamer Search, Created by{" "}
      <a href="https://seekaplayer.com">Seekaplayer</a> All Rights Reserved.
    </footer>
  );
};

export default Footer;
