import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'white',
  },
  border_Container: {
    width: '95%',
    alignSelf: 'center',
  },
  start_Text: {
    fontSize: 45,
    fontWeight: 'bold',
    color: 'black',
  },
  It_Text: {
    fontSize: 20,
    color: 'grey',

    margin: 5,
  },
  account_Text: {
    fontSize: 45,
    fontWeight: 'bold',
    color: 'black',
  },
  button: {
    height: 60,
    width: '80%',
    backgroundColor: 'black',
    borderRadius: 50,
  },
  next_Text: {
    color: 'white',
    textAlign: 'center',
    marginTop: 15,
    fontSize: 23,
  },
  button_Container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },
  texts_Containers: {
    margin: 5,
    padding: 5,
  },
  icon_Container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  Line_Container: {
    marginTop: 40,
    flexDirection: 'row',
    margin: 5,
    padding: 10,
  },
  lineTwo:{
    height: 3,
    width: '25%',
    backgroundColor: 'grey',
    borderRadius: 50,
    margin: 5,
  },
  lineThree:{
    height: 3,
    width: '25%',
    backgroundColor: 'grey',
    borderRadius: 50,
    margin: 5, 
  }
});

export default styles;
