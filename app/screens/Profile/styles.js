import { StyleSheet } from 'react-native';
import { colors, dimensions, fontSizes } from '../../styles';

const styles = StyleSheet.create({

  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 73,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray,
  },

  headerImg: {
    width: 45,
    height: 45,
    borderRadius: 25,

  },

  headerText: {
    fontSize: fontSizes.big,
    marginLeft: 8,
    fontWeight: 'bold',
  },

  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.white,
  },

  profileImg: {
    marginTop: 35,
    marginBottom: dimensions.indent,
    width: 200,
    height: 200,
    borderRadius: 200,
  },

  textInfo: {
    marginVertical: dimensions.indent,
    fontSize: fontSizes.big,
    fontWeight: 'bold',

  },

  button: {
    marginVertical: dimensions.indent,
    width: 150,
    height: 40,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.red,


  },

  buttonText: {
    fontSize: fontSizes.big,
    fontWeight: 'bold',
    color: colors.white,
  },

  modal: {
    alignItems: 'center',
    justifyContent: 'center',
  
  },

  modalImg: {
    height: '80%',
    width: '100%',
  },

  
});


export default styles;
