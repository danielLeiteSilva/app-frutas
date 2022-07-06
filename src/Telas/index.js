import React from "react";

import { StyleSheet, View } from "react-native";

import Topo from "./Components/Topo";
import Descricao from "./Components/Descricao";

export function Cesta() {
    return (
        <>
            <Topo />

            <View style={styles.cesta}>
                <Descricao />
            </View>
        </>

    )
}

const styles = StyleSheet.create({
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16
    }
})