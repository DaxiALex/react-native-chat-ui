import { StyleSheet } from 'react-native';
import { colors, dimensions } from '../../styles';

const styles = StyleSheet.create({

  outer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
  },

  container: {
    flex: 1,
  },

  dateContainer: {
    alignContent: 'center',
    justifyContent: 'center',
    paddingHorizontal: dimensions.indentWithHalf,
    paddingVertical: dimensions.indent,
    marginTop: dimensions.indentWithHalf,
    flex: 1,
  },

  dateContainer2: {
    alignItems: 'center',
    flex: 1,
  },

  dateText: {
    alignContent: 'center',
    justifyContent: 'center',
    color: colors.darkgray,
    fontSize: 14,
    fontWeight: 'bold',
  },
  
});


export default styles;
