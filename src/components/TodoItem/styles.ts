import {StyleSheet} from "react-native";
import {colors, fonts} from "../../themes/theme"

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    width: '100%',
    height: 64,
    paddingRight: 10,
    marginBottom: 8,

    backgroundColor: colors.gray500,

    borderWidth: 1,
    borderColor: colors.gray400,
    borderRadius: 8
  },
  
  trash: {
    width: 32,
    height: 32,
  },

  pressable: {
    height: 40,
    paddingLeft: 16,
    paddingRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  pressed: {
    overflow: 'hidden',
    padding: 3,
    backgroundColor: colors.purpleDark,
    borderRadius: 99,
  },
  
  empty: {
    width: 18,
    height: 18,
    borderWidth: 2,
    borderColor: colors.blue,
    borderRadius: 99,
  },

  text: {
    flex: 1,
    color: colors.gray100,
    fontFamily: fonts.regular,
    lineHeight: 20,
  },

  textStriken: {
    flex: 1,
    color: colors.gray300,
    fontFamily: fonts.regular,
    lineHeight: 20,
    textDecorationLine: 'line-through',
  }
})