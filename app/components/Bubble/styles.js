import { StyleSheet } from 'react-native';
import { colors, dimensions } from '../../styles';


const styles = StyleSheet.create({

  container: {
    flex: 1,
  },

  messageBubble: {
    flex: 1,
    borderRadius: 24,
    marginTop: 4,
    marginRight: dimensions.indent,
    marginLeft: dimensions.indent,
    paddingHorizontal: dimensions.indentWithHalf,
    paddingVertical: dimensions.indentWithHalf,
    backgroundColor: colors.lightgrey,
    maxWidth: '75%',
    alignItems: 'center',
  },

  text: {
    fontSize: 16,
  },


});

export default styles;
