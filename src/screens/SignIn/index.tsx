import React, { ReactElement } from 'react';
import { View, Image,Text } from 'react-native';
import ButtonIcon from '../../components/ButtonIcon'
import IllustrationImg from '../../assets/illustration.png'
import {styles} from './styles'

export default function SignIn(): ReactElement {
  return (
    <View style={styles.container}>
      
      <Image source={IllustrationImg} style={styles.image} resizeMode="stretch" />

      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se {'\n'}
          e organize suas {'\n'}
          jogatinas{'\n'}
          </Text>

          <Text style={styles.subititle}>
            Crie grupos para jogar seus games {'\n'}
            favoritos com seus amigos
          </Text>

        <ButtonIcon title="Entrar com o Discord" activeOpacity={0.7} />
      </View>
    </View>
  )
}