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
  connect_Text: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
    top:10
  },
  tobring_Text: {
    textAlign: 'center',
    fontSize: 17,
    top:30,
  },
  Image: {
    borderRadius: '300%',
    height: 250,
    width: '100%',
  },
  textContainer_Text: {
    alignSelf: 'center',
    marginTop: 20,
  },
  button_Container: {
    marginTop: 100,
    left: 20,
  },

  buttonTwo: {
    marginTop: 10,
    height: 50,
    width: '90%',
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#66101F',
  },
  login_Text: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 20,
    color: 'white',
  },
  SignUp_Text: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 20,
  },
  buttonOne:{
    height: 50,
    width: '90%',
    borderRadius: 30,
    backgroundColor: '#DE3163',

  }

});

export default styles;
