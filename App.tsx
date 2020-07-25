import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "@shopify/restyle";

import { theme, LoadAssets } from "./src/components/";
import { MainStackNavigator } from "./src/Home";

const fonts = {
  Regular: require("./assets/fonts/SF-Pro-Display-Regular.otf"),
  Bold: require("./assets/fonts/SF-Pro-Display-Bold.otf"),
  Semibold: require("./assets/fonts/SF-Pro-Display-Semibold.otf"),
  Medium: require("./assets/fonts/SF-Pro-Display-Medium.otf"),
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <LoadAssets {...{ fonts }}>
        <SafeAreaProvider>
          <MainStackNavigator />
        </SafeAreaProvider>
      </LoadAssets>
    </ThemeProvider>
  );
}
