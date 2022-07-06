import React from "react";

import { View, StyleSheet, Image } from "react-native";

import Logo from '../../../assets/logo.png'

import Texto from "../../components/Texto";

export default function Descricao() {
    return (
        <>
            <Texto style={styles.nome}>Cesta de Verduras</Texto>
            <View style={{ flexDirection: 'row' }}>
                <Image source={Logo} style={styles.imagemF} />
                <Texto style={styles.fazenda}>Jenny Jack farms</Texto>
            </View>
            <Texto style={styles.descricao}>Produtos selecionados diretamente da fazenda pra sua cozinha</Texto>
            <Texto style={styles.preco}>R$ 40,00</Texto>
        </>
    )
}


const styles = StyleSheet.create({
    nome: {
        color: '#464646',
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold"
    },
    imagemF: {
        width: 32,
        height: 32
    },
    fazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 10
    },
    descricao: {
        color: "#a3a3a3",
        fontSize: 16,
        lineHeight: 26
    },
    preco: {
        color: "#2a9f85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8
    },
    ordem: {
        flexDirection: "row",
    }
})