import React from "react";
import LottieView from "lottie-react-native";

export default class DiaryAnimation extends React.Component {
  render() {
    return (
      <LottieView
        source={require("../assets/63775-planner-icon-preview.json")}
        autoPlay
        loop
        style={{ width: "60%" }}
      />
    );
  }
}
