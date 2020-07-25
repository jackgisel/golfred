import React from "react";
import { StyleSheet, View } from "react-native";

import { Text, Box } from ".";
import { TextInput } from "react-native-gesture-handler";

interface InputProps {
  label: string;
  value: string;
  type: string;
  last?: boolean;
}

const Input = ({ label, value, onValueChange, type, last }: InputProps) => {
  return (
    <>
      <Box marginTop="m" alignItems="flex-start" width="90%">
        <Text variant="subtitle">{label}</Text>
      </Box>
      <Box
        backgroundColor="white"
        borderRadius="m"
        borderColor="green"
        borderWidth={3}
        width="90%"
        height={50}
        justifyContent="center"
        paddingHorizontal="s"
      >
        <TextInput
          defaultValue={value}
          onChangeText={(text) => onValueChange(text)}
          style={{ fontSize: 24 }}
          maxLength={type === "number" ? 6 : 25}
          keyboardType={type === "number" ? "decimal-pad" : "default"}
          returnKeyType={last ? "done" : "next"}
        />
      </Box>
    </>
  );
};

export default Input;

const styles = StyleSheet.create({});
