import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import T from 'prop-types';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import { loginSuccess } from '../../actions';
import s from './styles';

class LoginScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userId: '',
      nickname: '',
    };
  }

  componentWillReceiveProps() {
    if (!this.state.nickname) {
      this.setState({ userId: '', nickname: '' }, () => {
        this.props.navigation.navigate('MenuScreen');
      });
    }
  }

  _userIdChanged = (userId) => {
    this.setState({ userId });
  }

  _nicknameChanged = (nickname) => {
    this.setState({ nickname });
  }

  _onButtonPress = () => {
    const { nickname } = this.state;
    this.props.navigation.navigate('MenuScreen');
    this.props.loginSuccess({ nickname });
  }

  render() {
    return (

      <View style={s.container}>
        <Text style={s.title}>Wellcome to Chat!</Text>

        <Text style={s.text}>Enter name:</Text>

        <TextInput
          placeholder='example: Jone'
          underlineColorAndroid='white'
          value={this.state.nickname}
          onChangeText={this._nicknameChanged}
          style={[s.textInput]}
        />
                    

        <Button
          title='Connect'
          onPress={this._onButtonPress}
        />
        <KeyboardSpacer />
      </View>

    );
  }
}

LoginScreen.propTypes = {
  loginSuccess: T.func,
  navigation: T.object,

};

export default connect(null, { loginSuccess })(LoginScreen);

