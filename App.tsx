import React from "react";

import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

const App = () => {
  return (
    <View className="flex-1 items-center justify-center bg-black">
      <Text className="text-white text-4xl">Hello 🚀</Text>
      <Text className="text-gray-100 text-center px-3 mt-5">This is a simple template of React Native application with integration of Native Wind.</Text>
      <StatusBar style="inverted" />
    </View>
  );
};

export default App;
