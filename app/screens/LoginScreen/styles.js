import { StyleSheet } from 'react-native';
import { colors, dimensions } from '../../styles';

const styles = StyleSheet.create({

  title: {
    fontSize: 30,
    marginBottom: 50,
    
  },

  container: {
    padding: 16,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.white,
    alignItems: 'center',
  },

  text: {
    alignSelf: 'center',
    color: colors.green,
    opacity: 0.7,
  },
  textInput: {
    width: 250,
    backgroundColor: colors.white,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.gray,
    paddingLeft: dimensions.indent,
    paddingVertical: '2%',
    marginVertical: dimensions.doubleIndent,
  },

});

export default styles;
