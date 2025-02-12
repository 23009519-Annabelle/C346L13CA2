import React from "react";
import { Text, ScrollView, TouchableOpacity, Alert } from "react-native";
import { styles } from "./styles";

const Details = ({ route, navigation }) => {
  const { flatDetails, favorites, setFavorites } = route.params;

  const isFavorite = favorites.some((item) => item._id === flatDetails._id);

  const handleFavorite = () => {
    if (isFavorite) {
      // Remove from favorites
      const updatedFavorites = favorites.filter((item) => item._id !== flatDetails._id);
      setFavorites(updatedFavorites);
      Alert.alert("Removed from Favorites", `${flatDetails.street}, Blk ${flatDetails.blk_no} has been removed from your favorites.`);
    } else {
      // Add to favorites
      setFavorites([...favorites, flatDetails]);
      Alert.alert("Added to Favorites", `${flatDetails.street}, Blk ${flatDetails.blk_no} has been added to your favorites.`);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.detailsTitle}>
        {flatDetails.street}, Blk {flatDetails.blk_no}
      </Text>
      <Text style={styles.detailsText}>Max Floor Level: {flatDetails.max_floor_lvl}</Text>
      <Text style={styles.detailsText}>Year Completed: {flatDetails.year_completed}</Text>
      <Text style={styles.detailsText}>
        Residential: {flatDetails.residential === "Y" ? "Yes" : "No"}
      </Text>
      <Text style={styles.detailsText}>
        Commercial: {flatDetails.commercial === "Y" ? "Yes" : "No"}
      </Text>
      <Text style={styles.detailsText}>
        Market/Hawker: {flatDetails.market_hawker === "Y" ? "Yes" : "No"}
      </Text>
      <Text style={styles.detailsText}>
        Multi-Storey Carpark: {flatDetails.multistorey_carpark === "Y" ? "Yes" : "No"}
      </Text>
      <Text style={styles.detailsText}>Total Units: {flatDetails.total_dwelling_units}</Text>
      <Text style={styles.detailsSold}>1-Room Sold: {flatDetails["1room_sold"]}</Text>
      <Text style={styles.detailsSold}>2-Room Sold: {flatDetails["2room_sold"]}</Text>
      <Text style={styles.detailsSold}>3-Room Sold: {flatDetails["3room_sold"]}</Text>
      <Text style={styles.detailsSold}>4-Room Sold: {flatDetails["4room_sold"]}</Text>
      <Text style={styles.detailsSold}>5-Room Sold: {flatDetails["5room_sold"]}</Text>
      <Text style={styles.detailsSold}>Executive Sold: {flatDetails["exec_sold"]}</Text>

      {/* Add to Favorite Button */}
      <TouchableOpacity style={styles.favoriteButton} onPress={handleFavorite}>
        <Text style={styles.favoriteButtonText}>
          {isFavorite ? "❤️ Remove from Favorites" : "❤️ Add to Favorites"}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Details;
