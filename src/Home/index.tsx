import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./Home";
import { Routes } from "../components/Navigation";

const MainStack = createStackNavigator<Routes>();
export const MainStackNavigator = () => {
  return (
    <MainStack.Navigator headerMode="none">
      <MainStack.Screen name="Home" component={Home} />
    </MainStack.Navigator>
  );
};
