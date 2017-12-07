import React, { Component } from 'react';
import {
    View,
    Text,
    ListView,
    Image,
    ActivityIndicator,
    TouchableHighlight
} from 'react-native';
import { connect } from 'react-redux';
import { headerStyle } from '../../styles';
import s from './styles'
import { findRoomByUser, sendMessage } from '../../actions';

import { ChatContainer } from '../../containers'

class Conversation extends Component {

    static navigationOptions = ({ navigation }) => ({
        headerTitle: (
            <View style={s.headerContainer}>
                <Image style={s.headerImg} source={{ uri: navigation.state.params.friend.photoURL }} />
                <TouchableHighlight
                    onPress={() => {navigation.navigate('Profile', navigation.state.params.friend)}}
                    underlayColor={'#eee'}>
                    
                    <Text style={s.headerText}>{navigation.state.params.friend.displayName}</Text>

                </TouchableHighlight>

            </View>
        ),
        ...headerStyle,
    });


    componentWillMount() {
        // const { me } = this.props;
        const { friend } = this.props.navigation.state.params;
        const me = {nickname: "User", uid: 0}
        this.props.findRoomByUser(me, friend);
    }

    onSend = (message) => {
        if(!message.length) return;
        const { me, roomKey } = this.props;
        const { friend } = this.props.navigation.state.params;
        this.props.sendMessage(me, friend, message, roomKey);
    }

    render() {
        if (this.props.loading) {
            return (
                <View style={s.containerIndicator}>
                    <ActivityIndicator size="large" color="purple" animating />
                </View>
            );
        }
        return (
            <View style={s.container}>
                <ChatContainer
                    messages={this.props.messages}
                    user={{
                        _id: this.props.me.uid
                    }}
                    onSend={this.onSend.bind(this)}
                ></ChatContainer>
            </View>
        );
    }
}

export default connect(state => ({
    me: state.authentication.user,
    loading: state.chat.loading,
    messages: state.chat.messages,
    roomKey: state.chat.roomKey
}), { findRoomByUser, sendMessage })(Conversation);
