import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { loginSuccess } from '../../actions';
import s from './styles'
import { headerStyle } from '../../styles';
import KeyboardSpacer from 'react-native-keyboard-spacer';

class LoginScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userId: '',
            nickname: ''
        }
    }

    componentWillReceiveProps(props) {
        const { user, error } = props;
        if (!this.state.nickname) {
            this.setState({ userId: '', nickname: '' }, () => {
                this.props.navigation.navigate('MenuScreen');

            })
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
            <View style={{
                backgroundColor: '#fff', flex: 1,
                alignItems: 'center',
            }}>

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
                        buttonStyle={{ backgroundColor: 'grey' }}
                        title='Connect'
                        onPress={this._onButtonPress}
                    />
                    <KeyboardSpacer/> 
                </View>

            </View>
        )
    }
}

export default connect(state => ({}), { loginSuccess })(LoginScreen);


