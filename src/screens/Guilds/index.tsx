import React, { ReactElement } from 'react';
import { View, Text, FlatList } from 'react-native';

import Guild from '../../components/Guild';
import { GuildProps } from '../../components/Guild/types';
import ListDivider from '../../components/ListDivider';

import { styles } from './styles';

const guilds = [
  {id: '1', name: 'Lendários', icon: null, owner: true},
  {id: '2', name: 'Galera do Game', icon: null, owner: true},
]

type Props = {
  handleGuildSelect: (guild: GuildProps) => void;
}

export default function Guilds({ handleGuildSelect }: Props): ReactElement {
 
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={item => item.id}
        data={guilds}
        ItemSeparatorComponent={() => <ListDivider />}
        showsVerticalScrollIndicator={false}
        style={styles.guilds}
        renderItem={({item}) => (
          <Guild data={item} onPress={() => handleGuildSelect(item)} />
        )}
      />
    </View>
  );
}