import React, { ReactElement } from 'react';
import { View } from 'react-native';
import { styles } from './styles';

type Props = {
  isCentered?: boolean;
}

export default function listHeader({ isCentered }: Props): ReactElement {
  return (
    <View 
      style={[styles.container, 
      isCentered ? { marginVertical : 12 } : { marginTop: 2, marginBottom: 31 }]}
    />
  );
}