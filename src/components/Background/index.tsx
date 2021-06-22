import React, { ReactElement, ReactNode } from 'react';
import { LinearGradient } from 'expo-linear-gradient'
import { styles } from './styles'
import { theme } from '../../global/styles/theme';

type Prop = {
  children: ReactNode;
}

export default function Bckground({ children } : Prop): ReactElement {
  const {secondary80, secondary100} = theme.colors;
  return (
    <LinearGradient style={styles.container}
      colors={[secondary80, secondary100]}
    >
      {children}
    </LinearGradient>
  )
}