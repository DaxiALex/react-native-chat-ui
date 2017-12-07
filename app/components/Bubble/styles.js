import { StyleSheet } from 'react-native';
import { colors, dimensions } from '../../styles';

const indent = dimensions.indent * 1.5;

const styles = StyleSheet.create({

       messageBubble: {
              borderRadius: 24,
              marginTop: 4,
              marginRight: 10,
              marginLeft: 10,
              paddingHorizontal: 15,
              paddingVertical: 10,
              backgroundColor: '#e9e9e9',
              flex: 1,
              maxWidth: '75%',
              alignItems: 'center',

        
    },

});

export default styles;
