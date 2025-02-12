import React from "react";
import { View, Text, FlatList } from "react-native";
import { styles } from "./styles";

const Favorites = ({ route }) => {
  const { favorites } = route.params;

  return (

    <View style={styles.container}>
      <Text style={styles.header}>Favorited Properties</Text>
      {favorites.length > 0 ? (
        <FlatList
          data={favorites}
          keyExtractor={(item) => `${item.blk_no}-${item.street}`}
          renderItem={({ item }) => (
            <View style={styles.itemBox}>
              <Text style={styles.itemTitle}>
                {item.street}, Blk {item.blk_no}
              </Text>
              <Text style={styles.itemText}>Total Units: {item.total_dwelling_units}</Text>
              <Text style={styles.itemText}>Year Completed: {item.year_completed}</Text>
              <Text style={styles.itemText}>Max Floor Level: {item.max_floor_lvl}</Text>
            </View>
          )}
        />
      ) : (
        <Text style={styles.itemText}>No favorites added yet.</Text>
      )}
    </View>
  );
};

export default Favorites;
