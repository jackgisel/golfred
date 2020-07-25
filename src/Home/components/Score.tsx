import React from "react";
import { TouchableOpacity, Alert, Modal, View } from "react-native";
import { Box, Text, Button } from "../../components";

interface ScoreProps {
  round: {};
  courseName: string;
  datePlayed: string;
  score: number;
  key: string;
  removeRound: (r: {}) => void;
}

const Score = ({
  round,
  courseName,
  datePlayed,
  score,
  removeRound,
}: ScoreProps) => {
  const [show, setShow] = React.useState(false);
  const assureDelete = () => {
    Alert.alert(
      "Delete round?",
      courseName + " - " + datePlayed,
      [
        {
          text: "Cancel",
          onPress: () => true,
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: () => removeRound(round),
        },
      ],
      { cancelable: false }
    );
  };
  return (
    <TouchableOpacity
      style={{ width: "80%" }}
      onPress={() => setShow(true)}
      onLongPress={() => assureDelete()}
    >
      <Box
        backgroundColor="white"
        flexDirection="row"
        justifyContent="space-between"
        borderRadius="xl"
        padding="l"
        marginVertical="s"
        alignItems="center"
      >
        <Box>
          <Text variant="body" color="black">
            {courseName}
          </Text>
          <Text>{datePlayed}</Text>
        </Box>
        <Text variant="title" color="black">
          {score}
        </Text>
      </Box>
      <Modal visible={show} transparent={true} animationType="slide">
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            backgroundColor: "none",
          }}
        >
          <Box
            flex={0.6}
            backgroundColor="white"
            borderTopLeftRadius="l"
            borderTopRightRadius="l"
            alignItems="center"
          >
            <Text
              marginTop="xl"
              variant="title"
              color="black"
              marginBottom="s"
              textTransform="capitalize"
            >
              {courseName}
            </Text>
            <Text variant="subtitle" color="black" marginBottom="xl">
              {datePlayed}
            </Text>
            <Box
              flexDirection="row"
              marginBottom="xl"
              width="80%"
              justifyContent="space-between"
            >
              <Box alignItems="center">
                <Text variant="subtitle" color="black" marginBottom="s">
                  Score
                </Text>
                <Text variant="title" color="black">
                  {score}
                </Text>
              </Box>
              <Box alignItems="center">
                <Text variant="subtitle" color="black" marginBottom="s">
                  Rating
                </Text>
                <Text variant="title" color="black">
                  {round.rating}
                </Text>
              </Box>
              <Box alignItems="center">
                <Text variant="subtitle" color="black" marginBottom="s">
                  Slope
                </Text>
                <Text variant="title" color="black">
                  {round.slope}
                </Text>
              </Box>
            </Box>
            <Box alignItems="center">
              <Button
                disabled={false}
                variant="primary"
                label="Close"
                onPress={() => setShow(false)}
              />
              <Button
                disabled={false}
                variant="delete"
                label="Delete"
                onPress={() => assureDelete()}
              />
            </Box>
          </Box>
        </View>
      </Modal>
    </TouchableOpacity>
  );
};

export default Score;
