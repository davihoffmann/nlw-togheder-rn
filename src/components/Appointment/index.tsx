import React, { ReactElement } from 'react';
import { View, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler'
import { LinearGradient } from 'expo-linear-gradient';

import GuildIcon from '../GuildIcon';

import { categories } from '../../utils/categories';

import PlayerSvg from '../../assets/player.svg';
import CalendarSvg from '../../assets/calendar.svg';

import { Props } from './types'
import { styles } from './styles';
import { theme } from '../../global/styles/theme';

export default function Appointment({ data, ...rest }: Props):ReactElement {
  const [category] = categories.filter(item => item.id === data.category);
  const { owner } = data.guild;
  const { primary, on, secondary50, secondary70 } = theme.colors

  return (
    <RectButton {...rest}>
      <View style={styles.container}>
        <LinearGradient 
          style={styles.guildIconContainer} 
          colors={[secondary50, secondary70]}
        >
          <GuildIcon guildId={data.guild.id} iconId={data.guild.icon} />
        </LinearGradient>

        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>{data.guild.name}</Text>

            <Text style={styles.category}>{category.title}</Text>
          </View>

          <View style={styles.footer}>
            <View style={styles.dateInfo}>
              <CalendarSvg />
              <Text style={styles.date}>{data.date}</Text>
            </View>
          

            <View style={styles.playersInfo}>
              <PlayerSvg fill={owner ? primary : on} />

              <Text style={[styles.player, {color: owner ? primary : on}]}>
                {owner ? 'Anfitrião' : 'Visitante'}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </RectButton>
  );
}