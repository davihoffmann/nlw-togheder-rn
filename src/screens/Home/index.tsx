import React, { ReactElement, useState, useCallback, useEffect } from 'react'
import { View, FlatList } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Background from '../../components/Background';
import Profile from '../../components/Profile';
import ButtonAdd from '../../components/ButtonAdd';
import CategorySelect from '../../components/CategorySelect';
import ListHeader from '../../components/ListHeader';
import Appointment from '../../components/Appointment';
import { AppointmentProps } from '../../components/Appointment/types';
import ListDivider from '../../components/ListDivider';
import Load from '../../components/Load';
import ModalSmall from '../../components/ModalSmall';
import Logout from '../Logout';

import { COLLECTION_APPOINTMENTS } from '../../configs/database';

import {  styles } from './styles';

export default function Home(): ReactElement {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState('');
  const [appointments, setAppointments] = useState<AppointmentProps[]>([]);
  const [showModalLogout, setShowModalLogout] = useState(false);

  function handleShowModalLogout() {
    setShowModalLogout(true);
  }

  function handleCloseModalLogout() {
    setShowModalLogout(false);
  }
  
  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  function handleAppointmentCreate() {
    navigation.navigate('AppointmentCreate');
  }

  function handleAppointmentDatail(appointmentSelected: AppointmentProps) {
    navigation.navigate('AppointmentDetails', { appointmentSelected });
  }

  async function loadAppointments() {
    const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
    const storageResponse: AppointmentProps[] = storage ? JSON.parse(storage): [];

    if(category) {
      setAppointments(storageResponse.filter(item => item.category === category));
    } else {
      setAppointments(storageResponse);
    }

    setLoading(false);
  }
  
  useFocusEffect(useCallback(() => {
    loadAppointments();
  }, [category]));

  return (
    <>
      <Background>
        <View style={styles.header}>
          <Profile handleOpenModal={handleShowModalLogout} />
          <ButtonAdd onPress={handleAppointmentCreate} />
        </View>

        <CategorySelect 
          categorySelected={category} 
          selectCategory={handleCategorySelect} 
        />
        
        {
          loading 
          ? <Load />
          : (
              <>
                <ListHeader title="Partidas Agendadas" subtitle={`Total ${appointments.length}`} />
                <FlatList 
                  data={appointments} 
                  keyExtractor={item => item.id} 
                  style={styles.matches}
                  showsVerticalScrollIndicator={false}
                  ItemSeparatorComponent={() => <ListDivider />}
                  renderItem={({item}) => (
                    <Appointment data={item} onPress={() => handleAppointmentDatail(item)} />
                  )}
                  contentContainerStyle={{ paddingBottom: 69 }}
                />
            </>
          )
        }
      </Background>

      <ModalSmall visible={showModalLogout}>
        <Logout closeModal={handleCloseModalLogout} />
      </ModalSmall>
    </>
  );
}