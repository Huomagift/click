import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    backgroundColor: "#fff",
  },
  title: { fontSize: 40, fontWeight: "700", marginBottom: 8 },
  subtitle: { fontSize: 16, color: "#666", marginBottom: 32, textAlign: "center" },
  primaryButton: {
    width: "100%",
    paddingVertical: 14,
    alignItems: "center",
    backgroundColor: "#000",
    borderRadius: 8,
    marginBottom: 12,
  },
  primaryButtonText: { color: "#fff", fontWeight: "600" },
  secondaryButton: {
    width: "100%",
    paddingVertical: 14,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 8,
  },
  secondaryButtonText: { color: "#000", fontWeight: "600" },
});

export {styles};