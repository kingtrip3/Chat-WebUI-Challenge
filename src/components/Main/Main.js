import React, { Component } from "react";
import "./Main.css";
import Conversations from "../conversations/Conversations";
import MyProfile from "../myprofile/MyProfile";
import Profile from "../profile/Profile";
import Chat from "../chat/Chat";

export default class Main extends Component {
  render() {
    return (
      <div className="main__chatbody">
        <Conversations />
        <MyProfile />
        <Chat />
        <Profile />
      </div>
    );
  }
}
