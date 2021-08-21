import React from "react"; //player component
import "./Player.css";
import Sidebar from "./Sidebar";
import Body from "./Body";
import Footer from "./Footer";

function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player__body">
        {/*siderbar */}
        <Sidebar />
        {/*body */}
        <Body spotify={spotify} />
      </div>
      {/*footer */}
      <Footer spotify={spotify} />
    </div>
  );
}

export default Player;
