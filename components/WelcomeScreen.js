import * as React from "react";
import { Text, ScrollView, StyleSheet, Image, View } from "react-native";
import { useColorScheme } from "react-native";

export default function WelcomeScreen() {
  const colorScheme = useColorScheme();
  return (
    <ScrollView
      indicatorStyle={"white"}
      style={[
        styles.container,
        colorScheme === "light"
          ? { backgroundColor: "#fff" }
          : { backgroundColor: "#333333" },
      ]}
    >
      <View style={{ backgroundColor: "white" }}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../img/Logo.png")}
            accessible={true}
            accessibilityLabel={"Little Lemon Logo"}
          />
        </View>
      </View>
      <Text
        style={[
          styles.title,
          colorScheme === "light" ? { color: "black" } : { color: "#EDEFEE" },
        ]}
      >
        Little Lemon, your local Mediterranean Bistro
      </Text>

      <Text
        style={[
          styles.regularText,
          colorScheme === "light" ? { color: "black" } : { color: "#EDEFEE" },
        ]}
      >
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us!
      </Text>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../img/food1.png")}
          resizeMode="cover"
          accessible={true}
          accessibilityLabel={"Dinner table"}
        />
        <Image
          style={styles.image}
          source={require("../img/food2.png")}
          resizeMode="cover"
          accessible={true}
          accessibilityLabel={"Catch of the day"}
        />
        <Image
          style={styles.image}
          source={require("../img/food3.png")}
          resizeMode="cover"
          accessible={true}
          accessibilityLabel={"chef slicing a Little Lemon "}
        />
        <Image
          style={styles.image}
          source={require("../img/food4.png")}
          resizeMode="cover"
          accessible={true}
          accessibilityLabel={"Fresh mussels"}
        />
        <Text
          style={[
            styles.title,
            colorScheme === "light" ? { color: "black" } : { color: "#EDEFEE" },
          ]}
        >
          color scheme: {colorScheme}
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 16,
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: "#EDEFEE",
    textAlign: "center",
  },
  regularText: {
    fontSize: 16,
    padding: 10,
    marginVertical: 8,
    color: "#EDEFEE",
    textAlign: "center",
  },
  logoContainer: {
    alignItems: "center", // Center horizontally
    marginBottom: 0,
  },
  logo: {
    height: 100,
    width: 300,
    resizeMode: "contain",
  },
  title: {
    marginTop: 16,
    paddingHorizontal: 40,
    paddingVertical: 20,

    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  imageContainer: {
    alignItems: "center", // Center all images horizontally
  },
  image: {
    width: 350,
    height: 250,
    borderRadius: 10,
    marginVertical: 10,
    borderColor: "#EDEFEE",
    borderWidth: 2,
  },
});
