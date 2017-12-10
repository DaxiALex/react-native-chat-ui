import { StyleSheet } from 'react-native';
import { colors, dimensions } from '../../styles';

const styles = StyleSheet.create({
    
  inputBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    paddingVertical: 3,
    borderTopWidth: 2,
    borderColor: colors.border,
    alignItems: 'center',
    paddingTop: 3,
  },
    
  textBox: {
    flex: 1,
    fontSize: 16,
    paddingHorizontal: dimensions.indent,
    paddingVertical: 2,
        
  },

  icon: {
    marginVertical: -dimensions.indent,
    marginLeft: -3,
    paddingHorizontal: 3,
    paddingVertical: 3,
    height: '100%',
  },
    
});

export default styles;
