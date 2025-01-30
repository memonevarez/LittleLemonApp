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
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import SubscribeScreen from "./components/SubscribeScreen";
import Preferences from "./components/Preferences";

export default function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  // initialRouteName="Login"
  // screenOptions={{ headerStyle: { backgroundColor: "#495E57" } }}
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Welcome") {
              iconName = focused
                ? "information-circle"
                : "information-circle-outline";
            } else if (route.name === "Menu") {
              iconName = "list";
            } else if (route.name === "Newsletter") {
              iconName = "newspaper-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ title: "Home" }}
        />
        <Tab.Screen name="Menu" component={MenuItemsFlatList} />
        <Tab.Screen name="Newsletter" component={SubscribeScreen} />
        <Tab.Screen name="Preferences" component={Preferences} />
      </Tab.Navigator>
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
