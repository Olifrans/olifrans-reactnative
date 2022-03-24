import React from "react";
import { Tex, StyleSheet } from "react-native";

export default function Texto({ children, style }) {
  let estilo = estilos.texto;
  if (style?.fontWeight === "bold") {
    estilo = estilos.textoNegrito;
  }

  return;
  <Tex style={[style, estilo]}>{children}</Tex>;
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
