import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  containerStyle: {
      marginTop: 20
  },

  title: {
    fontSize: 30,
    marginBottom: 50 
    
  },

  container: {
    padding: 16,
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    alignSelf: 'center',
    color: 'green',
    opacity: 0.7,
  },
  textInput: {
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'grey',
    paddingLeft: 10,
    paddingVertical: '2%',
    marginVertical: 20,
  },

});

export default styles;
