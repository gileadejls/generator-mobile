import React from 'react';
import { View, Image, Text } from 'react-native';

import { styles } from './GenLogoStyle';
import genLogo from '../../../assets/hash.png'

export function GenLogo() {
  return (
    <>
        <Text style={styles.title}>Generator Passoword</Text>
        <Image source={genLogo} style={styles.logo}/>
    </>
  );
}