import { RectButtonProps } from "react-native-gesture-handler"
import { GuildProps } from "../Guild/types"

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