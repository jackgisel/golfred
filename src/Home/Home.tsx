import React from "react";
import { View, ScrollView, AsyncStorage } from "react-native";
import { Box, Text, Button, theme } from "../components";
import { Score, ScoreModal } from "./components";

const Home = () => {
  const [vis, setVis] = React.useState(false);
  const [rounds, setRounds] = React.useState([]);
  const [handicap, setHandicap] = React.useState(0);

  async function getRounds() {
    AsyncStorage.getItem("rounds").then((res) => {
      let localRounds = res ? JSON.parse(res || "") : [];
      setRounds(localRounds);
    });
  }

  React.useEffect(() => {
    getRounds();
  }, []);

  async function addScore(round: {}) {
    const newRounds = [...rounds, round];
    AsyncStorage.setItem("rounds", JSON.stringify(newRounds)).then(() => {
      setRounds(newRounds);
    });
  }

  async function removeScore(round: {}) {
    const newRounds = rounds.filter((r) => r !== round);
    AsyncStorage.setItem("rounds", JSON.stringify(newRounds)).then(() => {
      setRounds(newRounds);
    });
  }

  React.useEffect(() => {
    if (rounds.length > 0) calculateHandicap();
  }, [rounds]);

  function calculateHandicap() {
    let sum = 0;
    rounds.forEach((cur) => {
      let score = Number(cur.score);
      let rating = Number(cur.rating);
      let slope = Number(cur.slope);

      sum += ((score - rating) * 113) / slope;
    });
    setHandicap((sum / rounds.length).toFixed(1));
  }

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.green }}>
      <Box
        flex="1"
        backgroundColor="green"
        justifyContent="center"
        alignItems="center"
      >
        {rounds.length > 0 ? (
          <Text variant="handicap">
            {(+handicap > -1 ? "+" : "") + handicap}
          </Text>
        ) : (
          <Text variant="title" margin="l" textAlign="center" fontSize={40}>
            Enter a score to get a handicap
          </Text>
        )}

        <Text variant="title" textAlign="center">
          Welcome back!
        </Text>
        <Box marginVertical="l">
          <Button
            variant="primary"
            label="Enter new score"
            onPress={() => setVis(true)}
          />
        </Box>
        <Box justifyContent="space-between" width="75%" flexDirection="row">
          <Text variant="title">Rounds: </Text>
          <Text variant="title">{rounds.length}</Text>
        </Box>
      </Box>
      {rounds.length > 0 && (
        <ScrollView
          style={{ flex: 1, margin: 0, padding: 0 }}
          contentContainerStyle={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {rounds.map((round) => {
            return (
              <Score
                removeRound={(r) => removeScore(r)}
                key={round.courseName + "" + round.datePlayed}
                {...{ round, ...round }}
              />
            );
          })}
        </ScrollView>
      )}
      <ScoreModal
        addRound={(round: {}) => {
          addScore(round);
        }}
        {...{ vis, setVis }}
      />
    </View>
  );
};

export default Home;
