import React from "react";
import { StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useTheme } from "@shopify/restyle";

import { Text } from ".";

interface ButtonProps {
  label: string;
  variant: "primary" | "blue";
  onPress: () => void;
  disabled: boolean;
}

const Button = ({ variant, label, onPress, disabled }: ButtonProps) => {
  const theme = useTheme<theme>();
  const backgroundColor =
    variant === "primary" ? theme.colors.black : theme.colors.green;
  const color = theme.colors.white;
  return (
    <RectButton
      style={[styles.container, { backgroundColor }]}
      {...{ onPress, disabled }}
    >
      <Text variant={"body"} style={{ color }}>
        {label}
      </Text>
    </RectButton>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    marginVertical: 4,
    borderRadius: 25,
    height: 50,
    width: 245,
    justifyContent: "center",
    alignItems: "center",
  },
});
