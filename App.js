import React from 'react';
import { withExpoSnack } from 'nativewind';

import { Text, View } from 'react-native';
import { styled } from 'nativewind';

const StyledView = styled(View)
const StyledText = styled(Text)

const App = () => {
  return (
<View className="flex-1 items-center justify-center">
      <Text className="text-fuchsia-200">Styling just works! 🎉</Text>
    </View>
  );
}

// This demo is using a external compiler that will only work in Expo Snacks.
// You may see flashes of unstyled content, this will not occur under normal use!
// Please see the documentation to setup your application
export default withExpoSnack(App);