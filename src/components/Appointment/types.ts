import { RectButtonProps } from "react-native-gesture-handler"

export type GuildProps = {
  id: string;
  name: string;
  icon: null;
  owner: boolean;
}

export type AppointmentProps = {
  id: string;
  guild: GuildProps;
  category: string;
  date: string;
  description: string;
}

export type Props = RectButtonProps & {
  data: AppointmentProps;
}