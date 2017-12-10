import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modal';
import T from 'prop-types';
import { headerStyle } from '../../styles';
import s from './styles';


class Profile extends Component {
    
  static navigationOptions = ({ navigation }) => ({
    headerTitle: (
      <View style={s.headerContainer}>
        <Image style={s.headerImg} source={{ uri: navigation.state.params.photoURL }} />
        <Text style={s.headerText}>{navigation.state.params.displayName}</Text>
      </View>
          ),
    ...headerStyle,
  });

  state = {
    isModalVisible: false,
  }


  onImgPress = () => {
    this.setState({ isModalVisible: true });
  }
  _onBackdropPress = () => {
    this.setState({ isModalVisible: false });
  }

  render() {
    const navigationParams = this.props.navigation.state.params;
    const status = navigationParams.status;
    const notification = navigationParams.notification;
    const statusColor = status === 'online' ? 'green' : 'red';
    const notificationColor = notification === 'on' ? 'green' : 'red';

    return (
      <View style={s.container}>
        <TouchableOpacity onPress={this.onImgPress}>
          <Image style={s.profileImg} source={{ uri: navigationParams.photoURL }} />
        </TouchableOpacity>

        <Text style={s.textInfo}>Status:
          <Text style={{ color: statusColor }}>
            {status}
          </Text>
        </Text>

        <Text style={s.textInfo}>Notification:
          <Text style={{ color: notificationColor }}>
            {notification}
          </Text>
        </Text>

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
            <Image style={s.modalImg} source={{ uri: navigationParams.photoURL }} />
          </View>
        </Modal>
      </View>

    );
  }
}

Profile.propTypes = {
  navigation: T.object,
  
};
export default Profile;
