import React, { ReactElement } from 'react';
import { View, Text, Alert } from 'react-native';

import Button from '../../components/Button';
import ButtonSecondary from '../../components/ButtonSecondary';
import { useAuth } from '../../hooks/auth';

import { styles } from './style';

type Props = {
  closeModal: () => void;
}

export default function Logout({closeModal}: Props): ReactElement {
  const { signOut } = useAuth();

  function handleSignOut() {
    Alert.alert(
      'Logout', 
      'Deseja sair do GamePlay?', 
      [
        { text: 'Não', style: 'cancel' },
        { text: 'Sim', onPress: signOut }
      ]
    );
  }
 
  return (
    <View style={styles.container}>
     
     <Text style={styles.message}>Deseja realmente sair do GamePlay?</Text>

     <View style={styles.boxConfirm}>
      <Button title="Sim, Sair" onPress={() => handleSignOut()} />
     </View>

     <View style={styles.boxCancel}>
      <ButtonSecondary title="Cancelar" onPress={closeModal} />
     </View>
      
    </View>
  );
}