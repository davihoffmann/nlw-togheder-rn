import React, { ReactElement } from 'react';
import { TextInput, TextInputProps } from 'react-native'

import { styles } from './styles'

export default function TextArea({...rest}: TextInputProps): ReactElement {
  return (
    <TextInput 
      style={styles.container}
      {...rest}
    />
  );
}