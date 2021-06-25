import React, { ReactElement, useEffect } from 'react';
import { useState } from 'react';
import { View, FlatList } from 'react-native';

import Guild from '../../components/Guild';
import { GuildProps } from '../../components/Guild/types';
import ListDivider from '../../components/ListDivider';
import Load from '../../components/Load';
import { api } from '../../service/api';

import { styles } from './styles';

type Props = {
  handleGuildSelect: (guild: GuildProps) => void;
}

export default function Guilds({ handleGuildSelect }: Props): ReactElement {
  const [guilds, setGuilds] = useState<GuildProps[]>([]);
  const [loading, setLoading] = useState(false);

  async function fetchGuilds() {
    const response = await api.get('/users/@me/guilds');

    setGuilds(response.data);
    setLoading(false);
  }

  useEffect(() => {
    fetchGuilds()
  }, []);
 
  return (
    <View style={styles.container}>
      {
        loading 
        ? <Load />
        : <FlatList
            keyExtractor={item => item.id}
            data={guilds}
            ItemSeparatorComponent={() => <ListDivider isCentered />}
            showsVerticalScrollIndicator={false}
            style={styles.guilds}
            renderItem={({item}) => (
              <Guild data={item} onPress={() => handleGuildSelect(item)} />
            )}
            contentContainerStyle={{paddingBottom: 68, paddingTop: 103}}
            ListHeaderComponent={() => <ListDivider isCentered />}
          />
      }
    </View>
  );
}