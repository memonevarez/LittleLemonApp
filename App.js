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

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <LittleLemonHeader />
        {/* <WelcomeScreen />
        <MenuItemsSectionList /> 
        <FeedbackForm />*/}
        <LoginScreen />
      </View>
      <View style={{ backgroundColor: "#495E57" }}>
        <LittleLemonFooter />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#495E57",
  },
});
