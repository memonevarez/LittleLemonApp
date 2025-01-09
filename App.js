import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LittleLemonHeader from "./components/LittleLemonHeader";
import LittleLemonFooter from "./components/LittleLemonFooter";
import WelcomeScreen from "./components/WelcomeScreen";
import MenuItems from "./components/MenuItems";
import MenuItemsFlatList from "./components/MenuItemsFlatList";
import MenuItemsSectionList from "./components/MenuItemsSectionList";
import FeedbackForm from "./components/FeedbackForm";
import LoginScreen from "./components/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerStyle: { backgroundColor: "#495E57" } }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ title: "Home" }}
        />
        <Stack.Screen name="Menu" component={MenuItemsSectionList} />
      </Stack.Navigator>
    </NavigationContainer>
  );

  // <View style={styles.container}>
  //       <LittleLemonHeader />
  //       <WelcomeScreen />
  //       <FeedbackForm />
  //       <MenuItemsSectionList />

  //       <LoginScreen />
  //     </View>
  //     <View style={{ backgroundColor: "#495E57" }}>
  //       <LittleLemonFooter />
  //     </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#495E57",
  },
});
