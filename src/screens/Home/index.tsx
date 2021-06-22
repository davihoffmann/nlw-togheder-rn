import React, { ReactElement } from 'react'
import { View } from 'react-native';

import Profile from '../../components/Profile';

import {  styles } from './styles'

export default function Home(): ReactElement {
  return (
    <View>
      <View style={styles.header}>
        <Profile />
      </View>

    </View>
  );
}