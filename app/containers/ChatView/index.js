import React, { Component } from 'react';
import { connect } from 'react-redux';
import T from 'prop-types';
import { Text, View, ScrollView, Keyboard } from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import moment from 'moment';
// import uuid from 'uuid';
import s from './styles';
import { Bubble, MessageInput } from '../../components';

class ChatView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      messages: this.props.messages,
      inputBarText: '',
    };
  }

  componentWillMount() {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow.bind(this));
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide.bind(this));
  }
  
  componentDidMount() {
    setTimeout(() => {
      this.scrollView.scrollToEnd();
    });
  }

  componentDidUpdate() {
    setTimeout(() => {
      this.scrollView.scrollToEnd();
    });
  }
  
  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  keyboardDidShow() {
    this.scrollView.scrollToEnd();
  }

  keyboardDidHide() {
    this.scrollView.scrollToEnd();
  }

  _sendMessage() {
    this.setState({
      inputBarText: '',
    });
    this.props.onSend(this.state.inputBarText);
  }

  _onChangeInputBarText(text) {
    this.setState({
      inputBarText: text,
      messages: this.state.messages,
    });
  }

  _onInputSizeChange() {
    setTimeout(() => {
      this.scrollView.scrollToEnd({ animated: false });
    });
  }

  render() {
    const msg = this.state.messages;

    const messages = [];
    for (let i = 0; i < msg.length - 1; i++) {
      messages.push(
        <Bubble key={Math.random() * 19} userId={msg[i].user._id} text={msg[i].text} />,
      );
      // const randomKey = uuid.v1();
      const min10 = 600000;
      const hours24 = 86400000;
      const time = msg[i + 1].createdAt - msg[i].createdAt;

      if (time > min10) {
        messages.push(
          <View key={Math.random() * 18} style={s.dateContainer2}>
            <View style={s.dateContainer}>
              <Text style={s.dateText}>
                {moment(msg[i + 1].createdAt).format(time > hours24 ? 'DD MMM HH:mm' : 'HH:mm')}
                
              </Text>
            </View>
          </View>,

        );
      }
    }
    messages.push(
      <Bubble
        key={Math.random() * 20}
        userId={msg[msg.length - 1].user._id}
        text={msg[msg.length - 1].text}
      />,
    );

    return (
      <View style={s.outer}>
        <ScrollView ref={(ref) => { this.scrollView = ref; }} style={s.container}>
          {messages}
        </ScrollView>
        <MessageInput
          onSendPressed={() => this._sendMessage()}
          onSizeChange={() => this._onInputSizeChange()}
          onChangeText={(text) => this._onChangeInputBarText(text)}
          text={this.state.inputBarText}
        />
        <KeyboardSpacer />
      </View>
    );
  }
}

ChatView.propTypes = {
  messages: T.any,
  onSend: T.func,
};

export default connect(state => ({
  messages: state.chat.messages,
}))(ChatView);
