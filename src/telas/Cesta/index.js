import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Detalhes from "./componentes/Detalhes";
import Topo from "./componentes/Topo";

import Item from "./componentes/Item";

export default function Cesta({ topo, detalhes, itens }) {
  return;
  <>
    <FlatList
      data={itens.lista}
      renderItem={Item}
      keyExtractor={({ nome }) => nome}
      ListHeaderComponent={() => {
        return;
        <>
          <Topo {...topo} />
          <View style={estilos.cesta}>
            <Detalhes {...detalhes} />
          </View>
        </>;
      }}
    />
  </>;
}

const estilos = StyleSheet.create({
  titulo: {
    color: "#464646",
    fontWeight: "bold",
    marginTop: 32,
    marginBottom20,
    lineHeight: 32,
  },
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});
