import React, { ReactElement } from 'react';
import { View, Text, FlatList } from 'react-native';

import Guild from '../../components/Guild';
import ListDivider from '../../components/ListDivider';

import { styles } from './styles';

const guilds = [
  {id: '1', name: 'Lendários', icon: null, owner: true},
  {id: '2', name: 'Lendários', icon: null, owner: true},
]

export default function Guilds(): ReactElement {
 
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={item => item.id}
        data={guilds}
        ItemSeparatorComponent={() => <ListDivider />}
        renderItem={({item}) => (
          <Guild data={item} />
        )}
      />
    </View>
  );
}