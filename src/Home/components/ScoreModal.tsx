import React from "react";
import { View, Modal, AsyncStorage, Dimensions } from "react-native";
import { Input, Button, Box, Text } from "../../components";
import moment from "moment";

interface ScoreModalProps {
  vis: boolean;
  setVis: () => void;
  addRound: ({}) => void;
}

const { height } = Dimensions.get("window");

const ScoreModal = ({ vis, setVis, addRound }: ScoreModalProps) => {
  const [name, setName] = React.useState("");
  const [score, setScore] = React.useState("");
  const [rating, setRating] = React.useState("");
  const [slope, setSlope] = React.useState("");

  return (
    <Modal animationType="slide" transparent={true} visible={vis}>
      <View
        style={{
          flex: 1,
          justifyContent: "flex-start",
          backgroundColor: "rgba(4,4,4,0.3)",
        }}
      >
        <Box
          borderBottomLeftRadius="xl"
          borderBottomRightRadius="xl"
          backgroundColor="white"
          flex={height > 700 ? 0.7 : 0.8}
          padding="xl"
          alignItems="center"
          justifyContent="center"
        >
          <Text variant="title" color="green">
            Add new score:
          </Text>
          <Input
            value={name}
            onValueChange={(text) => setName(text)}
            label="Course Name"
            type="string"
          />
          <Input
            value={score}
            onValueChange={(text) => setScore(text)}
            label="Score"
            type="number"
          />
          <Input
            value={rating}
            onValueChange={(text) => setRating(text)}
            label="Rating"
            type="number"
          />
          <Input
            value={slope}
            onValueChange={(text) => setSlope(text)}
            label="Slope"
            type="number"
            last
          />
          <Box marginTop="m">
            <Button
              label="Add"
              disabled={
                name.length < 2 ||
                rating.length < 2 ||
                slope.length < 2 ||
                score.length < 2
              }
              onPress={
                name.length < 2 ||
                rating.length < 2 ||
                slope.length < 2 ||
                score.length < 2
                  ? () => alert("Enter valid data")
                  : async () => {
                      addRound({
                        courseName: name,
                        rating,
                        slope,
                        score,
                        datePlayed: moment().format("MMMM DD"),
                      });

                      setName("");
                      setRating("");
                      setSlope("");
                      setScore("");
                      setVis(false);
                    }
              }
            />
            <Button
              label="Close"
              variant="primary"
              disabled={
                name.length < 2 ||
                rating.length < 2 ||
                slope.length < 2 ||
                score.length < 2
              }
              onPress={() => setVis(false)}
            />
          </Box>
        </Box>
      </View>
    </Modal>
  );
};

export default ScoreModal;
