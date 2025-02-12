import React, { useState, useEffect } from "react";
import {
  FlatList,
  StatusBar,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Button,
} from "react-native";
import { styles } from "./styles";

let originalData = [];

const Home = ({ navigation }) => {
  const [myData, setMyData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [favorites, setFavorites] = useState([]); // State to manage favorites

  useEffect(() => {
    fetch(
      "https://data.gov.sg/api/action/datastore_search?resource_id=d_17f5382f26140b1fdae0ba2ef6239d2f&limit=100"
    )
      .then((response) => response.json())
      .then((json) => {
        if (json.success && json.result.records) {
          const sortedData = json.result.records.sort((a, b) => a._id - b._id);
          setMyData(sortedData);
          originalData = sortedData;
        }
      })
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  const filterData = (text) => {
    setSearchText(text);
    if (text !== "") {
      const filteredData = originalData.filter((item) =>
        item.street.toUpperCase().includes(text.toUpperCase())
      );
      setMyData(filteredData);
    } else {
      setMyData(originalData);
    }
  };

  const renderItem = ({ item }) => (
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
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <StatusBar />
      <Text style={styles.header}>HDB Property Data</Text>
      <TextInput
        style={styles.searchBar}
        placeholder="Search by Street Name..."
        placeholderTextColor="#b0c4de"
        value={searchText}
        onChangeText={filterData}
      />
      <FlatList
        data={myData}
        renderItem={renderItem}
        keyExtractor={(item) => `${item.blk_no}-${item.street}`}
      />
      <Button
        title="View Favorites"
        onPress={() => navigation.navigate("Favorites", { favorites })}
      />
    </View>
  );
};

export default Home;