import React, { ReactElement, useState } from 'react';
import { View, Text, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

// import Background from '../../components/Background';
import Header from '../../components/Header';
import CategorySelect from '../../components/CategorySelect';
import GuildIcon from '../../components/GuildIcon';
import SmallInput from '../../components/SmallInput';
import TextArea from '../../components/TextArea';
import Button from '../../components/Button';
import ModalView from '../../components/ModalView';
import Background from '../../components/Background';
import Guilds from '../Guilds';
import { GuildProps } from '../../components/Guild/types';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';


export default function AppointmentCreate(): ReactElement {
  const [visibleModal, setVisibleModal] = useState(false);
  const [category, setCategory] = useState('');
  const [guild, setGuild] = useState<GuildProps>({} as GuildProps);

  function handleCategorySelect(categoryId: string) {
    setCategory(categoryId);
  }

  function handleOpenModal() {
    setVisibleModal(true);
  }

  function handleCloseModal() {
    setVisibleModal(false);
  }

  function handleGuildSelect(guildSelect: GuildProps) {
    setGuild(guildSelect);
    setVisibleModal(false);
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
      <Background>
        <ScrollView keyboardShouldPersistTaps="handled">
          <Header 
            title="Agendar Partida" 
          />

          <Text style={[styles.label, { marginLeft: 24, marginBottom: 18, marginTop: 26 }]}>
            Categoria
          </Text>

          <CategorySelect 
            hasCheckBox 
            categorySelected={category} 
            selectCategory={handleCategorySelect}
          />

          <View style={styles.form}>
            <RectButton onPress={handleOpenModal}>
              <View style={styles.select}>
                {
                  guild.icon 
                    ? <GuildIcon /> 
                    : <View style={styles.image} />
                }

                <View style={styles.selectBody}>
                  <Text style={styles.label}>
                    { guild.name ? guild.name : 'Selecione um servidor' }
                  </Text>
                </View>

                <Feather 
                  name="chevron-right" 
                  size={18} 
                  color={theme.colors.heading}
                />
              </View>
            </RectButton>

            <View style={styles.field}>
              <View>
                <Text style={[styles.label, { marginBottom: 12 }]}>Dia e mês</Text>

                <View style={styles.column}>
                  <SmallInput maxLength={2} />
                    <Text style={styles.divider}>
                      /
                    </Text>
                    <SmallInput maxLength={2} />
                </View>
              </View>

              <View>
                <Text style={[styles.label, { marginBottom: 12 }]}>Hora e Minuto</Text>

                <View style={styles.column}>
                  <SmallInput maxLength={2} />
                    <Text style={styles.divider}>
                      :
                    </Text>
                    <SmallInput maxLength={2} />
                </View>
              </View>
            </View>

            <View style={[styles.field, { marginBottom: 12 }]}>
              <Text style={styles.label}>Descrição</Text>

              <Text style={styles.caracteresLimit}>Max 100 caracteres</Text>
            </View>
            <TextArea multiline maxLength={100} numberOfLines={5} autoCorrect={false} />

            <View style={styles.footer}>
                <Button title="Agendar" />
            </View>

          </View>
        </ScrollView>
      </Background>
      
      <ModalView visible={visibleModal} closeModal={handleCloseModal}>
        <Guilds handleGuildSelect={handleGuildSelect} />
      </ModalView>
    </KeyboardAvoidingView>
  );
}