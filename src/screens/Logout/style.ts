import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 24,
  },
  message: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.title700,
    textAlign: 'center',
    fontSize: 30,
    marginBottom: 20
  },
  boxConfirm: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  boxCancel: {
    paddingHorizontal: 20,
    paddingVertical: 5,
  }
});