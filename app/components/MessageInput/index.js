import React from 'react';
import { View, TouchableHighlight } from 'react-native';
import T from 'prop-types';
import { AutoGrowingTextInput } from 'react-native-autogrow-textinput';
import { Ionicons } from '@expo/vector-icons';
import s from './styles';
import { colors } from '../../styles';

const MessageInput = ({
  onSendPressed,
  onChangeText,
  text,
}) =>

 (
   <View style={s.inputBar}>

     <TouchableHighlight
       style={s.icon}
       onPress={() => { }}
       underlayColor={colors.white}
     >
       <Ionicons name='md-camera' size={30} color={colors.gray} />
     </TouchableHighlight>


     <TouchableHighlight
       style={s.icon}
       onPress={() => { }}
       underlayColor={colors.lightgrey}
     >
       <Ionicons name='md-images' size={30} color={colors.gray} />
     </TouchableHighlight>


     <AutoGrowingTextInput
       style={s.textBox}
       ref={(ref) => { this.autogrowInput = ref; }}
       multiline
       maxHeight={90}
       minHeight={35}
       onChangeText={(txt) => onChangeText(txt)}
       value={text}
       placeholder={'Write a message...'}
       underlineColorAndroid={colors.white}
     />


     <TouchableHighlight
       style={s.sendButton}
       onPress={() => onSendPressed()}
       underlayColor={colors.white}
     >
       <Ionicons name='md-send' size={40} color={colors.blue} />
     </TouchableHighlight>
   </View>
  );


MessageInput.propTypes = {
  onSendPressed: T.func,
  onChangeText: T.func,
  text: T.any,
};

export default MessageInput;
