import { StyleSheet } from 'react-native';
import { colors, dimensions } from '../../styles';


const styles = StyleSheet.create({
  dataContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  containerIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  listContainer: {
    marginVertical: 2,
  },
  messageInfoContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 73,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  avatar: {
    borderRadius: 50,
    width: 65,
    height: 65,
    borderWidth: 1,
    marginLeft: dimensions.indent,
  },
  name: {
    fontSize: 18,
    paddingLeft: dimensions.doubleIndent,
    color: colors.black,
    fontWeight: 'bold',
  },
  time: {
    fontSize: 12,
    paddingLeft: dimensions.doubleIndent,
    justifyContent: 'flex-end',
    marginRight: dimensions.indent,
  },
  text: {
    fontSize: 14,
    paddingLeft: dimensions.doubleIndent,
    color: colors.gray,
  },
  modal: {
    backgroundColor: colors.white,
    padding: dimensions.indent,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',

  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: dimensions.tripleIndent,

  },
  modalButton: {
    flex: 1,
    width: '40',
  },
  modalText: {
    padding: dimensions.tripleIndent,
  },

});

export default styles;
