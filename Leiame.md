
# Expo Installation
Installing Expo CLI
https://docs.expo.dev/introduction/why-not-expo/
https://docs.expo.dev/get-started/installation/
npm install --global expo-cli



# Comando para criar um projeto react-native
expo init olifrans-cesta



# Using a Google Font
https://docs.expo.dev/guides/using-custom-fonts/#using-a-google-font

expo install expo-font @expo-google-fonts/inter
expo install expo-font @expo-google-fonts/montserrat


import { useFonts, Inter_900Black } from '@expo-google-fonts/montserrat';

let [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }