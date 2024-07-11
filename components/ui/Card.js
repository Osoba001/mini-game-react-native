import { View, StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants.js/colors";
const Card = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

export default Card;

const deviceWith = Dimensions.get("window").width;

const styles = StyleSheet.create({
  card: {
    marginTop: deviceWith < 380 ? 18 : 36,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4, //Android shadow
    shadowColor: "black", //IOS
    shadowOffset: { width: 0, height: 2 }, //IOS
    shadowRadius: 6, //IOS
    shadowOpacity: 0.25, //IOS
    justifyContent: "center",
    textAlign: "center",
  },
});
