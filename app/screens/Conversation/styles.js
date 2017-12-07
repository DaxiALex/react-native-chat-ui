import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  containerIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 73,
    borderBottomWidth: 1,
    borderBottomColor: 'grey'
  },

  headerImg: {
    width: 45,
    height: 45,
    borderRadius: 25

  },

  headerText: {
      fontSize: 20,
      marginLeft: 8,
      fontWeight: 'bold'
  },

  container: {
    flex: 1,
    backgroundColor: '#fefefe'
  },

  outer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'white'
  },

  messages: {
    flex: 1
  },

  //InputBar

  inputBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    paddingVertical: 3,
  },

  textBox: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'gray',
    flex: 1,
    fontSize: 16,
    paddingHorizontal: 10
  },

  sendButton: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 15,
    marginLeft: 5,
    paddingRight: 15,
    borderRadius: 5,
    backgroundColor: 'blue'
  },

  //MessageBubble

  messageBubble: {
    borderRadius: 5,
    marginTop: 8,
    marginRight: 10,
    marginLeft: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: 'row',
    flex: 1
  },

  messageBubbleLeft: {
    backgroundColor: 'grey',
  },

  messageBubbleTextLeft: {
    color: 'white'
  },

  messageBubbleRight: {
    backgroundColor: 'blue'
  },

  messageBubbleTextRight: {
    color: 'white'
  },
})


export default styles;
