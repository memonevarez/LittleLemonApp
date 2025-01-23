import React, { useEffect, useState } from "react";

import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from "react-native";

// Array provided in exercise scenario
// const menuItemsToDisplay = [
//   { name: "Hummus", price: "$5.00", id: "1A" },
//   { name: "Moutabal", price: "$5.00", id: "2B" },
//   { name: "Falafel", price: "$7.50", id: "3C" },
//   { name: "Marinated Olives", price: "$5.00", id: "4D" },
//   { name: "Kofta", price: "$5.00", id: "5E" },
//   { name: "Eggplant Salad", price: "$8.50", id: "6F" },
//   { name: "Lentil Burger", price: "$10.00", id: "7G" },
//   { name: "Smoked Salmon", price: "$14.00", id: "8H" },
//   { name: "Kofta Burger", price: "$11.00", id: "9I" },
//   { name: "Turkish Kebab", price: "$15.50", id: "10J" },
//   { name: "Fries", price: "$3.00", id: "11K" },
//   { name: "Buttered Rice", price: "$3.00", id: "12L" },
//   { name: "Bread Sticks", price: "$3.00", id: "13M" },
//   { name: "Pita Pocket", price: "$3.00", id: "14N" },
//   { name: "Lentil Soup", price: "$3.75", id: "15O" },
//   { name: "Greek Salad", price: "$6.00", id: "16Q" },
//   { name: "Rice Pilaf", price: "$4.00", id: "17R" },
//   { name: "Baklava", price: "$3.00", id: "18S" },
//   { name: "Tartufo", price: "$3.00", id: "19T" },
//   { name: "Tiramisu", price: "$5.00", id: "20U" },
//   { name: "Panna Cotta", price: "$5.00", id: "21V" },
// ];

const Separator = () => <View style={menuStyles.separator} />;
const Header = () => <Text style={menuStyles.headerText}>View Menu</Text>;
// Component to render name and price per item
const Item = ({ name, price }) => (
  <View style={menuStyles.innerContainer}>
    <Text style={menuStyles.itemText}>{name}</Text>
    <Text style={menuStyles.itemText}>{"$" + price}</Text>
  </View>
);

const MenuItemsFlatList = () => {
  const [isLoading, setLoading] = useState(true);
  const [menuItemsToDisplay, setMenuItemsToDisplay] = useState([]);

  const getMenu = async () => {
    try {
      const response = await fetch(
        "https://raw.githubusercontent.com/Meta-Mobile-Developer-PC/Working-With-Data-API/main/menu-items-by-category.json"
      );
      const json = await response.json();
      setMenuItemsToDisplay(json.menu);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMenu();
  }, []);

  const renderItem = ({ item }) => (
    <Item name={item.title} price={item.price} />
  );

  return (
    <View style={menuStyles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={menuItemsToDisplay}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          ItemSeparatorComponent={Separator}
          ListHeaderComponent={Header}
        ></FlatList>
      )}
    </View>
  );
};

const menuStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#495E57",
  },
  itemText: {
    color: "#F4CE14",
    fontSize: 20,
  },
  separator: {
    borderBottomWidth: 1,
    borderCOlor: "#EDEFEE",
  },
  headerText: {
    color: "black",
    fontSize: 20,
    paddingVertical: 8,
    flexWrap: "wrap",
    textAlign: "center",
  },
});
export default MenuItemsFlatList;
