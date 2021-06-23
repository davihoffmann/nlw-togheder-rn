import React, { ReactElement, ReactNode } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import { theme } from '../../global/styles/theme';
import { styles } from './styles';

type Props = {
  title: string;
  action?: ReactNode; 
}

export default function Header({ title, action }: Props): ReactElement {
  const navigation = useNavigation();
  const { secondary100, secondary40, heading } = theme.colors;

  function handleBack() {
    navigation.goBack();
  }

  return (
    <LinearGradient colors={[secondary100, secondary40]} style={styles.container}>
      <BorderlessButton onPress={handleBack}>
        <Feather name="arrow-left" size={24} color={heading} />
      </BorderlessButton>

      <Text style={styles.title}>{title}</Text>

      {action && (
        <View>
          {action}
        </View>
      )}
    </LinearGradient>
  );
}