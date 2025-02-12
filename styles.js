import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FDF6EC", // Warm, soft beige background for better contrast
  },
  header: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#2E4053", // Dark slate color for better readability
    textAlign: "center",
    marginBottom: 20,
  },
  searchBar: {
    borderWidth: 1,
    borderColor: "#5DADE2", // Soft blue border for subtle contrast
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#D6EAF8", // Light blue background for ease on the eyes
    marginBottom: 20,
    fontSize: 16,
    color: "#2E4053",
  },
  itemBox: {
    borderWidth: 1,
    borderColor: "#5DADE2", // Blue accent for a fresh look
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    backgroundColor: "#A9DFBF", // Soft green for a friendly, inviting feel
  },
  itemTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1B2631", // Darker contrast for better visibility
    marginBottom: 5,
  },
  itemText: {
    fontSize: 16,
    color: "#2E4053",
  },
  detailsTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1B2631",
    marginBottom: 10,
  },
  detailsText: {
    fontSize: 18,
    color: "#2E4053",
    marginVertical: 4,
  },
  detailsSold: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#E74C3C", // Red for emphasis but not too harsh
    marginVertical: 4,
  },
  favoriteButton: {
    marginTop: 20,
    padding: 12,
    backgroundColor: "#FFD700",
    borderRadius: 10,
    alignItems: "center",
  },
  favoriteButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000000",
  },
});

