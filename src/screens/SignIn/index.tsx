import React, { ReactElement } from 'react';
import { StatusBar, View, Image,Text } from 'react-native';
import ButtonIcon from '../../components/ButtonIcon'
import IllustrationImg from '../../assets/illustration.png'
import {styles} from './styles'

export default function SignIn(): ReactElement {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <Image source={IllustrationImg} style={styles.image} resizeMode="stretch" />

      <View style={styles.content}>
        <Text style={styles.title}>
          Organize {`\n`}
          suas jogatinas {`\n`}
          facilmente{`\n`}
          </Text>

          <Text style={styles.subititle}>
            Crie grupos para jogar seus games {`\n`}
            favoritos com seus amigos
          </Text>

        <ButtonIcon title="Entrar com o Discord" activeOpacity={0.7} />
      </View>
    </View>
  )
}