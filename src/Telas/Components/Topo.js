import React from "react";
import { Image, StyleSheet, Dimensions } from "react-native";

import TopoImg from '../../../assets/topo.png'

import Texto from "../../components/Texto";

const width = Dimensions.get('screen').width

export default function Topo() {
    return (
        <>
            <Image style={styles.topo} source={TopoImg} />
            <Texto style={styles.titulo}>Detalhe da cesta</Texto>
        </>
    )
}

const styles = StyleSheet.create({
    titulo: {
        width: '100%',
        position: 'absolute',
        textoAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        color: "#fff",
        fontWeight: "bold",
        padding: 16
    },
    topo: {
        width: "100%",
        //Pega altura e divide pela largura e divide pelo with
        height: 578 / 768 * width
    }
})