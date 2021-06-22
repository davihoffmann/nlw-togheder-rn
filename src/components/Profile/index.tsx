import React, { ReactElement } from 'react';
import { View, Text } from 'react-native'

import Avatar from '../Avatar';

import { styles } from './styles'

export default function Profile(): ReactElement {
  return (
    <View style={styles.container}>

      <Avatar urlImage="https://github.com/davihoffmann.png" />

      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>
            Olá
          </Text>

          <Text style={styles.username}>
            Davi
          </Text>
        </View>

        <Text style={styles.message}>
          Hoje é dia de vitória
        </Text>
      </View>

    </View>
  )
}