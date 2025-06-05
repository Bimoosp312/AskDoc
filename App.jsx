import React from "react";
import { View, StyleSheet } from "react-native";
import HomeScreen from "./src/screens/Home/HomeScreen";
import ChatScreen from "./src/screens/Chat/ChatScreen";
import ProfileScreen from "./src/screens/Profile/ProfileScreen";

const App = () => {
  return (
    <View style={styles.container}>
      <HomeScreen />
       <ChatScreen />
      <ProfileScreen /> 
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
