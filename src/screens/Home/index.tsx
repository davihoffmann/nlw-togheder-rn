import React, { ReactElement, useState } from 'react'
import { View, FlatList, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import Background from '../../components/Background';
import Profile from '../../components/Profile';
import ButtonAdd from '../../components/ButtonAdd';
import CategorySelect from '../../components/CategorySelect';
import ListHeader from '../../components/ListHeader';
import Appointment from '../../components/Appointment';
import ListDivider from '../../components/ListDivider';

import {  styles } from './styles'

const appointments = [
  { 
    id:'1', 
    guild: { id: '1', name: 'Lendários', icon: null, owner: true }, 
    category: '1', 
    date: '22/06 às 20h40min', 
    description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10' 
  },
  { 
    id:'2', 
    guild: { id: '1', name: 'Lendários', icon: null, owner: true }, 
    category: '1', 
    date: '22/06 às 20h40min', 
    description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10' 
  },
]

export default function Home(): ReactElement {
  const navigation = useNavigation();
  const [category, setCategory] = useState('');

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  function handleAppointmentCreate() {
    navigation.navigate('AppointmentCreate');
  }

  function handleAppointmentDatail() {
    navigation.navigate('AppointmentDetails');
  }

  return (
    <Background>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd onPress={handleAppointmentCreate} />
      </View>

      <CategorySelect 
        categorySelected={category} 
        selectCategory={handleCategorySelect} 
      />
      
      <ListHeader title="Partidas Agendadas" subtitle="Total 6" />
    
      <FlatList 
        data={appointments} 
        keyExtractor={item => item.id} 
        style={styles.matches}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <ListDivider />}
        renderItem={({item}) => (
          <Appointment data={item} onPress={() => handleAppointmentDatail()} />
        )}
        contentContainerStyle={{ paddingBottom: 69 }}
      />
    </Background>
  );
}