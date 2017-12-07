import React, { Component } from 'react';
import { Text, View, TouchableHighlight, } from 'react-native';
import { AutoGrowingTextInput } from 'react-native-autogrow-textinput';
import s from './styles'
import { Ionicons } from '@expo/vector-icons';

export default class MessageInput extends Component {

  render() {
    return (
      <View style={s.inputBar}>
        <TouchableHighlight
          style={s.icon}
          onPress={() => { }}
          underlayColor={'#eee'}>
          <Ionicons name="md-camera" size={30} color="#d8d8d8" />
        </TouchableHighlight>
        <TouchableHighlight
          style={s.icon}
          onPress={() => { }}
          underlayColor={'#eee'}>
          <Ionicons name="md-images" size={30} color="#d8d8d8" />
        </TouchableHighlight>
        <AutoGrowingTextInput style={s.textBox}
          ref={(ref) => { this.autogrowInput = ref }}
          multiline={true}
          maxHeight={90}
          minHeight={35}
          onChangeText={(text) => this.props.onChangeText(text)}
          value={this.props.text}
          placeholder={'Write a message...'}
          underlineColorAndroid={'white'} />

        <TouchableHighlight
          style={s.sendButton}
          onPress={() => this.props.onSendPressed()}
          underlayColor={'white'}>
          <Ionicons name="md-send" size={40} color="#0084ff" />
        </TouchableHighlight>
      </View>
    );
  }
}