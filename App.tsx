import { downloadAsync, documentDirectory } from "expo-file-system";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  React.useEffect(() => {
    console.log("begin");

    downloadAsync(
      "https://www.chosic.com/wp-content/uploads/2022/03/alex-productions-ambient-music-nature.mp3",
      `${documentDirectory}/tmp.mp3`
    ).then(() => {
      console.log("complete");
    });
  }, []);
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
