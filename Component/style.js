import {StyleSheet} from 'react-native';

const COLORS = {primary: '#1F145C', white: '#FFF'};

export default StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  
  header: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },
  
  clearButton: {
    backgroundColor: '#F6AE45',
    paddingVertical:7,
    paddingHorizontal:17,
    borderRadius: 10,
    color: 'white',
  },


  text: {
    fontWeight: 'bold',
    paddingLeft: 20,
    fontSize: 20,
    color: '#F6AE45',
  },

  listItem: {
    flex: 1,
    flexDirection: 'row',
    padding: 20,
    backgroundColor: COLORS.white,
    elevation: 4,
    shadowColor: 'gray',
    shadowOpacity: 90,
    borderRadius: 6,
    marginVertical: 10,
  },

  listItemFlex: {
    flex: 1,
  },

  textItem: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#F6AE45',
  },

  actionItem: {
    height: 25,
    width: 25,
    backgroundColor: '#010101',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginRight: 10,
  },

  textChecklist: {
    color: COLORS.white,
  },

  textDeleteList: {
    backgroundColor: 'red',
    color: 'white',
    padding: 3,
    borderRadius: 4,
  },

  footer: {
    position: 'absolute',
    bottom: 0,
    color: COLORS.white,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  inputContainer: {
    backgroundColor: COLORS.white,
    elevation: 40,
    flex: 1,
    height: 50,
    marginVertical: 20,
    marginRight: 20,
    borderRadius: 30,
    paddingHorizontal: 20,
  },

  iconContainer: {
    height: 50,
    width: 50,
    backgroundColor: '#F6AE45',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
