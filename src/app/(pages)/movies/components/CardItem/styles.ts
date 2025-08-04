import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    margin: 15,
    elevation: 2,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 15,
  },
  image: {
    height: 250,
    zIndex: 2,
    borderRadius: 10,
  },
  button: {
    alignItems: "flex-end",
    marginTop: -37.6,
    zIndex: 10,
    alignSelf: "flex-end",
  },
  buttonText: {
    width: 100,
    backgroundColor: "#09a6ff",
    opacity: 1,
    padding: 8,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
