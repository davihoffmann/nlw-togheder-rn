import React, { ReactElement } from 'react';
import { Image } from 'react-native';
import { styles } from './styles';

export default function GuildIcon():ReactElement {
  const uri = "https://cdn.iconscout.com/icon/free/png-256/discord-283279.png";
  return (
      <Image 
        source={{uri}}
        style={styles.image}
        resizeMode="cover"
      />
  );
}