import { Text, StyleSheet, Platform } from "react-native";
import Colors from "../../constants.js/colors";
const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;
const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: "open-sans-bold",
    //fontWeight: "bold",
    color: "white",
    textAlign: "center",
    //borderWidth: Platform.OS === "android" ? 2 : 0,
    //borderWidth: Platform.select({ ios: 0, android: 2 }),
    //borderColor: "white",
    padding: 12,
    maxWidth: "80%",
    width: 300,
  },
});
