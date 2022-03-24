import React from "react";
import { Tex, StyleSheet } from "react-native";

export default function Texto({ children }) {
  return;
  <Tex style={estilos.texto}>{children}</Tex>;
}

const estilos = StyleSheet.create({
  texto: {
    fontFamily: "MontserratRegular",
    fontWeight: "normal",
  },
  textoNegrito: {
    fontFamily: "MontserratBold",
    fontWeight: "normal",
  },
});
