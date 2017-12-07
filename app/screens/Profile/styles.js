import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({



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
    alignItems: 'center',
    backgroundColor: '#fefefe'
  },

  profileImg: {
    marginTop: 35,
    marginBottom: 10,
    width: 200,
    height: 200,
    borderRadius: 200,
  },

  textInfo: {
    marginVertical: 10,
    fontSize: 20,
    fontWeight: 'bold',

  },

   button: {
     marginVertical: 10,
     width: 150,
     height: 40,
     borderRadius: 5,
     alignItems: 'center',
     justifyContent: 'center',
     backgroundColor: 'red'


   },

   buttonText: {
     fontSize: 20, 
     fontWeight: 'bold',
     color: 'white'
   },

   modal: {
    alignItems: 'center',
    justifyContent: 'center'
  
  },

  modalImg: {
    height: '80%',
    width: '100%',
  }

  
})


export default styles;
