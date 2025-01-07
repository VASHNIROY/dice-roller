import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import React, { useState } from "react";
import DiceOne from "./assets/dice1.png";
import DiceTwo from "./assets/dice2.png";
import DiceThree from "./assets/dice3.png";
import DiceFour from "./assets/dice4.png";
import DiceFive from "./assets/dice5.png";
import DiceSix from "./assets/dice6.png";

const App = () => {
  const [uri, SetUri] = useState(DiceOne);
  const playButtonTapped = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;

    switch (randomNumber) {
      case 1:
        SetUri(DiceOne);
        break;
      case 2:
        SetUri(DiceTwo);
        break;
      case 3:
        SetUri(DiceThree);
        break;
      case 4:
        SetUri(DiceFour);
        break;
      case 5:
        SetUri(DiceFive);
        break;
      case 6:
        SetUri(DiceSix);
        break;
      default:
        SetUri(DiceOne);
        break;
    }
  };
  return (
    <>
      <View style={styles.container}>
        <Image style={styles.image} source={uri} />
        <Pressable onPress={playButtonTapped}>
          <Text style={styles.gamePlayButton}>Play Game</Text>
        </Pressable>
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222831",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,
  },
  gamePlayButton: {
    fontSize: 20,
    marginTop: 30,
    color: "#F2A365",
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderColor: "#30475E",
    borderRadius: 5,
    borderWidth: 3,
    fontWeight: "bold",
  },
});
