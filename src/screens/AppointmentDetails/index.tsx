import React, { ReactElement, useState, useEffect } from 'react';
import { ImageBackground, Text, View, FlatList, Alert, Share, Platform } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Fontisto } from '@expo/vector-icons';
import * as Linking from 'expo-linking';

import { api } from '../../service/api';

import Background from '../../components/Background';
import Header from '../../components/Header';
import ListHeader from '../../components/ListHeader';
import Member from '../../components/Member';
import { MemberProps } from '../../components/Member/types';
import ListDivider from '../../components/ListDivider';
import ButtonIcon from '../../components/ButtonIcon';
import Load from '../../components/Load';
import { AppointmentProps } from '../../components/Appointment/types';

import { theme } from '../../global/styles/theme';
import BannerImg from '../../assets/banner.png';
import { styles } from './styles';

type Params = {
  appointmentSelected: AppointmentProps
}

type GuildWidgetProps = {
  id: string;
  name: string;
  instant_invite: string;
  members: MemberProps[];
  presence_count: number;
}

export default function AppointmentDetails(): ReactElement {
  const [widget, setWidget] = useState<GuildWidgetProps>({} as GuildWidgetProps);
  const [loading, setLoading] = useState(true);
  const route = useRoute();

  const { appointmentSelected } = route.params as Params;

  async function fetchGuildIngo() {
    try {
      const response = await api.get(`/guilds/${appointmentSelected.guild.id}/widget.json`)
      setWidget(response.data);
    } catch (error) {
      Alert.alert('Verifique as configurações do servidor! Será que o Widget está habilitado?');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchGuildIngo();
  }, []);

  function handleShareInvite() {
    const message =  Platform.OS === "ios" 
      ? `Junte-se a ${appointmentSelected.guild.name}` 
      : widget.instant_invite;

      Share.share({
        message,
        url: widget.instant_invite
      });
  }

  function handleOpenGuild() {
    if(widget.instant_invite !== null) {
      Linking.openURL(widget.instant_invite);
    } else {
      Alert.alert('Não foi possível entrar no servidor! Verifique as configurações.')
    }
  }

  return (
    <Background>
      <Header 
        title="Detalhes" 
        action={
          appointmentSelected.guild.owner && (
            <BorderlessButton onPress={handleShareInvite}>
              <Fontisto 
                name="share" 
                size={24} 
                color={theme.colors.primary}
              />
            </BorderlessButton>
          )
        }
      />

      <ImageBackground source={BannerImg} style={styles.banner}>
        <View style={styles.bannerContent}>
          <Text style={styles.title}>{appointmentSelected.guild.name}</Text>
        
          <Text style={styles.subtitle}>
            {appointmentSelected.description}
          </Text>
        </View>
      </ImageBackground>


      {
        loading ? <Load />
        : (
          <>
            <ListHeader title="Jogadores" subtitle={widget.members ? `Total ${widget.members.length}` : 'Total 0'} />
            <FlatList 
              data={widget.members}
              keyExtractor={item => item.id}
              ItemSeparatorComponent={() => <ListDivider isCentered />}
              renderItem={({item}) => (
                <Member data={item} />
              )}
              style={styles.members}
            />
          </>
        )
      }

      {
        appointmentSelected.guild.owner && (
          <View style={styles.footer}>
              <ButtonIcon title="Entrar na Partida" onPress={handleOpenGuild} />  
          </View>
      )
    }
    </Background>
  );
}