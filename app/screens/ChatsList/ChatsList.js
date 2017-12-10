import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
    ListView,
    ActivityIndicator,
    TouchableOpacity,
    Image,
} from 'react-native';
import T from 'prop-types';
import { connect } from 'react-redux';
import Modal from 'react-native-modal';
import { headerStyle } from '../../styles';
import s from './styles';
import { fetchListContact } from '../../actions';

class ChatsList extends Component {
  static navigationOptions = {
    title: 'Chats List',
    ...headerStyle,
  }

  state = {
    isModalVisible: false,
  }
  componentWillMount() {
    this.props.fetchListContact(this.props);
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  onRowPressed = (friend) => {
    this.props.navigation.navigate('TabProfile', { friend });
  }

  onLongPressRow = () => {
    this.setState({ isModalVisible: true });
  }

  getLastMessage = () => {

  }

  createDataSource({ contacts }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });
    this.dataSource = ds.cloneWithRows(contacts);
  }

  _onBackdropPress = () => {
    this.setState({ isModalVisible: false });
  }
  renderRow = (item) => (
    <TouchableOpacity
      onPress={this.onRowPressed.bind(this, item)}
      onLongPress={this.onLongPressRow.bind(this, item)}
      style={s.row}
    >
      <Image source={{ uri: item.photoURL }} style={s.avatar} />
      <View style={s.dataContainer}>
        <View style={s.messageInfoContainer}>
          <Text style={s.name} >{item.displayName}</Text>
          <Text style={s.time} >12:45</Text>
        </View>
        <View>
          <Text style={s.text} >Hey, how are you?</Text>
        </View>
      </View>

    </TouchableOpacity>
        )

  render() {
    if (this.props.loading) {
      return (
        <View style={s.containerIndicator}>
          <ActivityIndicator size='large' color='grey' animating />
        </View>
      );
    }
    return (
      <View style={s.mainContainer}>
        <Modal
          isVisible={this.state.isModalVisible}
          onBackdropPress={this._onBackdropPress}
        >
          <View style={s.modal}>
            <Text style={s.modalText}>Delete this chat?</Text>
            <View style={s.buttonContainer}>
              <Button
                title='Yes'
                onPress={() => {}}
                style={s.modalButton}
              />
            </View>

          </View>
        </Modal>

        <View style={s.listContainer}>
          <ListView
            enableEmptySections
            dataSource={this.dataSource}
            renderRow={this.renderRow.bind(this)}
          />
        </View>
      </View>
      

    );
  }
}

ChatsList.propTypes = {
  loading: T.bool,
//   contacts: T.func,
//   me: T.func,
//   messages: T.func,
  fetchListContact: T.func,
  navigation: T.object,
    
};


export default connect(state => ({
  contacts: state.contact.contacts,
  loading: state.contact.loading,
  me: state.authentication.user,
  messages: state.chat.messages,
}), { fetchListContact })(ChatsList);
