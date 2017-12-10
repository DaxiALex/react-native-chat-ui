import { StyleSheet } from 'react-native';
import { colors, fontSizes } from '../../styles';


const styles = StyleSheet.create({

  containerIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

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
    backgroundColor: colors.white,
  },


});


export default styles;
