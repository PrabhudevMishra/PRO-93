import "react-native-gesture-handler";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import NotesStack from "./notesStack";
import ScheduleScreen from "../screens/scheduler";
import TaskScreen from "../screens/tasks";

const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Notes">
      <Tab.Screen name="Notes" component={NotesStack} />
      <Tab.Screen name="DailyTasks" component={TaskScreen} />
      <Tab.Screen name="Schedule" component={ScheduleScreen} />
    </Tab.Navigator>
  );
};

export default TopTabNavigator;
