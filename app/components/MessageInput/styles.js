import { StyleSheet } from 'react-native';
import { colors, dimensions } from '../../styles';

const indent = dimensions.indent * 1.5;

const styles = StyleSheet.create({
         //InputBar
    
      inputBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 5,
        paddingVertical: 3,
        borderTopWidth: 2,
        borderColor: '#d8d8d8',
        alignItems: 'center',
      },
    
      textBox: {
        flex: 1,
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 2,
        
      },

      icon: {
        marginVertical: -10,
        marginLeft: -3,
        paddingHorizontal: 3,
        paddingVertical: 3,
        height: '100%'
      }
    
});

export default styles;
