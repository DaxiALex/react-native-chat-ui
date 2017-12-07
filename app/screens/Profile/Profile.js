import React, { Component } from 'react';
import {
    View,
    Text,
    ListView,
    Image,
    TouchableOpacity
} from 'react-native';
import { headerStyle } from '../../styles';
import s from './styles'
import Modal from 'react-native-modal';


class Profile extends Component {

    state = {
        isModalVisible: false
    }

    static navigationOptions = ({ navigation }) => ({
        headerTitle: (
            <View style={s.headerContainer}>
                <Image style={s.headerImg} source={{ uri: navigation.state.params.photoURL }} />
                <Text style={s.headerText}>{navigation.state.params.displayName}</Text>


            </View>
        ),
        ...headerStyle,
    });

    onImgPress = () => {
        this.setState({ isModalVisible: true })
    }
    _onBackdropPress = () => {
        this.setState({ isModalVisible: false })
    }

    render() {
        let status = this.props.navigation.state.params.status;
        let notification = this.props.navigation.state.params.notification;
        let statusColor = status === 'online' ? 'green' : 'red';
        let notificationColor = notification === 'on' ? 'green' : 'red';

        return (
            <View style={s.container}>
                <TouchableOpacity onPress={this.onImgPress}>
                    <Image style={s.profileImg} source={{ uri: this.props.navigation.state.params.photoURL }} />
                </TouchableOpacity>

                <Text style={s.textInfo}>Status: <Text style={{ color: statusColor }}>{status}</Text></Text>
                <Text style={s.textInfo}>Notification: <Text style={{ color: notificationColor }}>{notification}</Text></Text>
                <TouchableOpacity style={s.button}>
                    <Text style={s.buttonText}>BLOCK USER</Text>
                </TouchableOpacity>
                <TouchableOpacity style={s.button}>
                    <Text style={s.buttonText}>DELETE CHAT</Text>
                </TouchableOpacity>

                <Modal
                    isVisible={this.state.isModalVisible}
                    onBackdropPress={this._onBackdropPress}
                >
                    <View style={s.modal}>

                        <Image style={s.modalImg} source={{ uri: this.props.navigation.state.params.photoURL }} />
                    </View>
                </Modal>
            </View>

        );
    }
}

export default Profile;
