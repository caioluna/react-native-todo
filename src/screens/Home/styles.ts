import { StyleSheet } from "react-native";
import { colors } from "../../themes/theme";

export const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    backgroundColor: colors.gray700,
  },

  text: {
    color: colors.gray100,
  },

  logo: {
    marginTop: 24,
    width: 110,
    height: 32,
  },

  formWrapper: {
    paddingHorizontal: 24,
    bottom: -37,
    flexDirection: 'row',
    zIndex: 1,
  },

  textInput: {
    flex: 1,
    height: 54,
    paddingHorizontal: 16,
    marginRight: 4,

    fontSize: 16,
    fontFamily: 'Inter_400Regular',
    color: colors.gray100,
    backgroundColor: colors.gray500,
    
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: colors.gray700,
    borderRadius: 8,
  },

  buttonContainer: {
    width: 52,
    height: 52,

    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 6,
    backgroundColor: colors.blueDark,
  },
  
  image: {
    width: 16,
    height: 16,
  }
});