import React, { ReactElement } from 'react';
import { TextInput, TextInputProps } from 'react-native'

import { styles } from './styles'

export default function SmallInput({...rest}: TextInputProps): ReactElement {
  return (
    <TextInput 
      style={styles.container}
      keyboardType="numeric"
      {...rest}
    />
  );
}