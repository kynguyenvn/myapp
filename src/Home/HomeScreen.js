import React, { useLayoutEffect } from "react";
import {
  View,
  Text,
  Button,
  SafeAreaView,
  Image,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  ChevronDownIcon,
  UserIcon,
  AdjustmentsVerticalIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="bg-white pt-5">
      {/* header */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJgMhcfdWNRQCCckkiYhyYnPbAm8_ZFGajFQ&usqp=CAU",
          }}
          style={{ height: 30, width: 30 }}
          className="w-50 h-50 p4 rounded-full bg-blue-600"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>
        <UserIcon size={35} color="#00CCBB" />
      </View>
      {/* search */}

      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row space-x-2 bg-gray-200 p-3">
          <MagnifyingGlassIcon size={20} color="gray" />
          <TextInput
            placeholder="Restaurants and cuisines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsVerticalIcon size={20} color="#00CCBB" />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
