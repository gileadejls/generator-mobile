import React from 'react';
import { TextInput } from 'react-native';

import { styles } from './GenTextStyle';

interface GenTextInputProps{
    pass:string

}

export function GenText(props:GenTextInputProps) {
  return (
    <>
        <TextInput placeholder='password' 
        style={styles.inputer}
        value={props.pass}
        />
    </>
  );
}