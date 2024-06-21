import React from "react";
import { Text, View } from "react-native"
import { StatusBar } from 'expo-status-bar';
import styles from './Style'
import { GenLogo } from "../../components/GenLogo/GenLogo";
import { GenText } from "../../components/GenText/GenText";
import { GenButton } from "../../components/GenButton/GenButton";

export default function Home() {
    return(
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <GenLogo/>
            </View>
            <View style={styles.buttonContainer}>
                <GenButton/>
            </View>
            <StatusBar style="auto" />
        </View>
    )
}