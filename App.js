import * as React from "react";
import { View, Text, Button, Image, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { withExpoSnack } from "nativewind";
import HomeScreen from "./src/Home/HomeScreen";

function HomeScreen2({ navigation }) {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-red-500">Home just works! 🎉</Text>
      <Image
        source={{
          // uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJgMhcfdWNRQCCckkiYhyYnPbAm8_ZFGajFQ&usqp=CAU",
          uri: "https://reactnative.dev/img/tiny_logo.png",
        }}
        // style={{ height: 50, width: 50 }}
        className="w-50 h-50 bg-gray-300"
      />
    </View>
  );
}

function DetailsScreen() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-red-500">Details Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Home2" component={HomeScreen2} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default withExpoSnack(App);
