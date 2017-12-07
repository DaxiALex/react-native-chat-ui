import React, { Component } from 'react';
import { Text, View, } from 'react-native';
import s from './styles'


export default class Bubble extends Component {
  render() {

    let id = this.props.userId || 0

    let align = id === 0 ? 'flex-end' : 'flex-start'
    let color = id === 0 ? '#fefefe' : '#000000'
    let background = id === 0 ? '#0084ff' : '#e9e9e9'

    return (
      <View style={{flex: 1, alignItems: align}}>
        <View style={[s.messageBubble, {backgroundColor: background}  ]}>
            <Text style={{color: color, fontSize:16}}>
             {this.props.text}
           </Text>
       </View>
      </View>

      );
  }
}

