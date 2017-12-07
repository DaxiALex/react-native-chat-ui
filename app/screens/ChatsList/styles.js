import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefefe'
},
containerIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
},
container: {
    flex: 1, 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between'
},
row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 73,
    borderBottomWidth: 1,
    borderBottomColor: 'grey'
},
avatar: {
    borderRadius: 50,
    width: 65,
    height: 65,
    borderWidth: 1,
    marginLeft: 10,
},
name: {
    fontSize: 18,
    paddingLeft: 15,
    color: '#000',
    fontWeight: 'bold',
},
time: {
  fontSize: 12,
  paddingLeft: 15,
  justifyContent: 'flex-end',
  marginRight: 10
},
text: {
  fontSize: 14,
  paddingLeft: 15,
  color: 'grey'
},
modal: {
  backgroundColor: 'white',
  padding: 16,
  borderRadius: 8,
  alignItems: 'center',
  justifyContent: 'center'

},
buttonContainer: {
  flex: 1, 
  flexDirection: 'row', 
  alignItems: 'center', 
  marginVertical: 30

},
modalButton: {
  flex: 1,
  width: '40'
},
modalText: {
  padding: 25,
}

});

export default styles;