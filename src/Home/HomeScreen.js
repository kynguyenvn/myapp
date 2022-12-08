import React, { useLayoutEffect } from "react";
import { View, Text, Button, SafeAreaView, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-red-500">Home src just works! 🎉</Text>
      <Button
        title="Go to Detail"
        onPress={() => navigation.navigate("Details")}
      />
      <Button
        title="Go to Home2"
        onPress={() => navigation.navigate("Home2")}
      />
      <View>
        <Text className="text-red-500">Here an images! 🎉</Text>
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJgMhcfdWNRQCCckkiYhyYnPbAm8_ZFGajFQ&usqp=CAU",
          }}
          style={{ height: 50, width: 50 }}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
