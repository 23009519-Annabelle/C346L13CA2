import React from "react";
import { View, Text, FlatList, TouchableOpacity, Alert } from "react-native";
import { styles } from "./styles";

const Favorites = ({ route, navigation }) => {
  const { favorites, setFavorites } = route.params;

  const handleRemoveFavorite = (item) => {
    const updatedFavorites = favorites.filter((fav) => fav._id !== item._id);
    setFavorites(updatedFavorites);
    Alert.alert("Removed from Favorites", `${item.street}, Blk ${item.blk_no} has been removed from your favorites.`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Favorited Properties</Text>
      {favorites.length > 0 ? (
        <FlatList
          data={favorites}
          keyExtractor={(item) => `${item.blk_no}-${item.street}`}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.itemBox}
              onPress={() => navigation.navigate("Details", { flatDetails: item, favorites, setFavorites })}
            >
              <Text style={styles.itemTitle}>
                {item.street}, Blk {item.blk_no}
              </Text>
              <Text style={styles.itemText}>Total Units: {item.total_dwelling_units}</Text>
              <Text style={styles.itemText}>Year Completed: {item.year_completed}</Text>
              <Text style={styles.itemText}>Max Floor Level: {item.max_floor_lvl}</Text>
              <TouchableOpacity
                style={styles.removeButton}
                onPress={() => handleRemoveFavorite(item)}
              >
                <Text style={styles.removeButtonText}>❌ Remove from Favorites</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          )}
        />
      ) : (
        <Text style={styles.itemText}>No favorites added yet.</Text>
      )}
    </View>
  );
};

export default Favorites;
