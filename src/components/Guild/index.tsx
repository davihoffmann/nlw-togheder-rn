import React, { ReactElement } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

import GuildIcon from '../GuildIcon';

import { Props } from './types';
import { styles } from './styles';
import { theme } from '../../global/styles/theme';

export default function Guild({ data, ...rest}: Props): ReactElement {
  return (
    <TouchableOpacity 
      style={styles.container} 
      activeOpacity={0.7} 
      {...rest}
    >
      <GuildIcon />

      <View style={styles.content}>
        <View>
          <Text style={styles.title}>{data.name}</Text>

          <Text style={styles.type}>
            {data.owner ? 'Administrador' : 'Convidado'}
          </Text>
        </View>
      </View>

      <Feather 
        name="chevron-right" 
        color={theme.colors.heading} 
        size={24}
      />
    </TouchableOpacity>
  );
}