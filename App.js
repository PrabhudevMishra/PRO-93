import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import TopTabNavigator from "./navigation/topTabNavigator";
import WelcomeScreen from "./screens/welcomeScreen";

export default function App() {
  return <AppContainer />;
}

const switchNaviagtor = createSwitchNavigator({
  Welcome: { screen: WelcomeScreen },
  TabNavigator: { screen: TopTabNavigator },
});

const AppContainer = createAppContainer(switchNaviagtor);
