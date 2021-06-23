import React, { ReactElement } from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

type Props = {
  title: string;
  subtitle: string;
}

export default function ListHeader({ title, subtitle }: Props):ReactElement {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{ title }</Text>
      <Text style={styles.subtitle}>{ subtitle }</Text>
    </View>
  );
}