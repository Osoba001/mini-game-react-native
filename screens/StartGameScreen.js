import {
  View,
  TextInput,
  StyleSheet,
  Alert,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";
import Colors from "../constants.js/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

const StartGameScreen = ({ onPickNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  const [width, height] = useWindowDimensions();

  const numberInputHandler = (enteredText) => {
    // Remove any non-numeric characters
    const numericValue = enteredText.replace(/[^0-9]/g, "");
    setEnteredNumber(numericValue);
  };
  const resetInputHandler = () => {
    setEnteredNumber("");
  };
  const confirmInputHandler = () => {
    const choseNumber = parseInt(enteredNumber);
    // if (isNaN(choseNumber) || choseNumber < 1 || choseNumber > 100) {
    //   Alert.alert(
    //     "Invalid number!",
    //     choseNumber + "has to be a number betwwn 1 and 99.",
    //     [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
    //   );
    //   return;
    // }
    if (isNaN(choseNumber)) {
      Alert.alert("Invalid number!", choseNumber + "not a number.", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }
    if (choseNumber < 1) {
      Alert.alert("Invalid number!", choseNumber + "is too low.", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }
    if (choseNumber > 100) {
      Alert.alert("Invalid number!", choseNumber + "is too high.", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }

    onPickNumber(choseNumber);
  };

  const marginToDistance = height < 380 ? 30 : 100;

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.rootContainer, { marginTop: marginToDistance }]}>
          <Title>Guess My Number</Title>
          <Card>
            <InstructionText>Enter a Number</InstructionText>
            <TextInput
              style={styles.numberInput}
              maxLength={2}
              keyboardType="number-pad"
              //autoCapitalize="none" //relivant when the imput type is text
              //autoCorrect={false}
              onChange={numberInputHandler}
              value={enteredNumber}
            />
            <View style={styles.buttonsContatiner}>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
              </View>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={confirmInputHandler}>
                  Confirm
                </PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default StartGameScreen;

//const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    //marginTop: deviceHeight < 380 ? 30 : 100,
    alignItems: "center",
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContatiner: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
