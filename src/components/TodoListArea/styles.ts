import {StyleSheet} from "react-native";
import {colors, fonts} from "../../themes/theme";

export const styles = StyleSheet.create({
  container: {
    top: 15,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    paddingTop: 55,
    backgroundColor: colors.gray600,
  },

  statusContainer: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 24,
    justifyContent: 'space-between',
  },
  
  statusWrapper: {
    flexDirection: 'row',
  },
  
  created: {
    color: colors.blue,
    fontFamily: fonts.bold,
  },
  
  concluded: {
    color: colors.purple,
    fontFamily: fonts.bold,
  },

  clipboardContainer: {
    width: '100%',
    alignItems: 'center',
  },

  divider: {
    width: '100%',
    marginBottom: 48,
    marginHorizontal: 24,

    borderTopWidth: 1,
    borderColor: colors.gray400,
  },

  clipboard: {
    width: 56,
    height: 56,
  },

  clipboardText: {
    color: colors.gray300,
  },

  counterContainer: {
    width: 25,
    height: 20,
    marginLeft: 8,

    borderRadius: 99,
    backgroundColor: colors.gray400,

    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: colors.gray200,
    fontFamily: fonts.bold,
    fontSize: 12,
  }
})