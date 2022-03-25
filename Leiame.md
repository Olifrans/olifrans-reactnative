
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


# AppLoading
Installation
expo install expo-app-loading




Corrigir erro tela vermelha do expo react-native

1- acesse as pastas node_modules/react-native/scripts
dentro da pasta "scripts" no arquivo "launchPackager.bat" adcionar a linha "node "%~dp0..\cli.js" start --projectRoot ../../../"

2- acesse as pastas node_modules/@react-native-community/cli/build/commands/runAndroid/runAndroid.js
Na constante abaixo adcionar "cwd: process.cwd()" conforme abaixo:

const procConfig = {
cwd: process.cwd()
};
