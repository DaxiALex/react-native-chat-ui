import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({


  outer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'white'
  },

  messages: {
    flex: 1
  },

  dateContainer: {
    marginTop: 3,
    alignContent: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,


    marginTop: 16,
    flex: 1,


  },

  dateText: {
    alignContent: 'center',
    justifyContent: 'center',
    color: '#acacac'
  }
})


export default styles;
