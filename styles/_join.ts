import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 24,
    textAlign: "center"
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 12,
    width: "50%",
    alignSelf: "center",
    borderRadius: 8,
    marginBottom: 12,
  },
  button: {
    backgroundColor: "#000",
    paddingVertical: 14,
    borderRadius: 8,
    width: "50%",
    alignSelf: "center",
    alignItems: "center",
    marginTop: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600"
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 16
  },
  link: {
    color: "#000",
    fontWeight: "600"
  },
  small: {
    color: "#666"
  }

});

export { styles };