import React, { Component } from 'react';
import { Text, View, ScrollView, KeyboardAvoidingView, Keyboard } from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import s from './styles'
import { headerStyle } from '../../styles';
import { connect } from 'react-redux';
import { Bubble, MessageInput } from '../../components'
import moment from 'moment';

class ChatView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      messages: this.props.messages,
      inputBarText: ''
    }
  }

  componentWillMount () {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow.bind(this));
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide.bind(this));
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  keyboardDidShow (e) {
    this.scrollView.scrollToEnd();
  }

  keyboardDidHide (e) {
    this.scrollView.scrollToEnd();
  }

  componentDidMount() {
    setTimeout(function() {
      this.scrollView.scrollToEnd();
    }.bind(this))
  }

  componentDidUpdate() {
    setTimeout(function() {
      this.scrollView.scrollToEnd();
    }.bind(this))
  }

  _sendMessage() {

    this.setState({
      inputBarText: ''
    });
    this.props.onSend(this.state.inputBarText)
  }

  _onChangeInputBarText(text) {
    this.setState({
      inputBarText: text,
      messages: this.state.messages,
    });
  }

  _onInputSizeChange() {
    setTimeout(function() {
      this.scrollView.scrollToEnd({animated: false});
    }.bind(this))
  }

  render() {
    let msg = this.state.messages;

    var messages = [];
    for (let i=0; i < msg.length-1; i++ ){

      messages.push(
        <Bubble key={i} userId={msg[i].user._id} text={msg[i].text}/>
      );

      if (msg[i + 1].createdAt - msg[i].createdAt >= 600000) {
        messages.push(
          <View style={{ flex: 1, alignItems: "center" }}>
            <View style={s.dateContainer}>
              <Text style={s.dateText}>
              {moment(msg[i + 1].createdAt).format("DD MMM YYYY hh:mm a")}
                
              </Text>
            </View>

          </View>

        );
      }

    }
    messages.push(
      <Bubble key={msg.length-1} userId={msg[msg.length-1].user._id} text={msg[msg.length-1].text}/>
    );

    return (
              <View style={s.outer}>
                  <ScrollView ref={(ref) => { this.scrollView = ref }} style={s.messages}>
                    {messages}
                  </ScrollView>
                  <MessageInput onSendPressed={() => this._sendMessage()} 
                            onSizeChange={() => this._onInputSizeChange()}
                            onChangeText={(text) => this._onChangeInputBarText(text)}
                            text={this.state.inputBarText}/>
                  <KeyboardSpacer/>             
              </View>
            );
  }
}

export default connect(state => ({
  messages: state.chat.messages,
}))(ChatView);





