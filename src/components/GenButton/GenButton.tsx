import React, { useState } from 'react';
import { View, Button, Text, Pressable } from 'react-native';
import * as Clipboard from 'expo-clipboard'


import { styles } from './GenButtonStyle';
import { GenText } from '../GenText/GenText';
import generatePass from '../../services/passwordService';

export function GenButton() {
    const[pass, setPass] = useState('')

    function handleGenerateButton(){
        let generateToken = generatePass()
        setPass(generateToken)
    }

    function handleCopyButton(){
        Clipboard.setStringAsync(pass)
        console.log("fui pressionado")
    }

  return (
    <>
         <GenText pass={pass}/>
         <Pressable onPress={handleGenerateButton}
            style={styles.button}>
            <Text style={styles.textButton}>
                Generate
            </Text>
         </Pressable>
         <Pressable onPress={handleCopyButton}
             style={styles.button}>
            <Text style={styles.textButton}>
                Copy
            </Text>
         </Pressable>
    </>
  );
}