import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  notification_Text: {
    fontSize: 20,
    fontWeight: 'bold',
    left: 10,
  },
  Container: {
    flex: 1,
    backgroundColor: 'white',
  },
  Image: {
    borderRadius: '300%',
    height: 250,
    width: '100%',
  },
  welcome_Text: {
    fontWeight: 'bold',
    fontSize: 22,
    textAlign: 'center',
  },
  InputUsername: {
    height: 50,
    width: '95%',
    backgroundColor: '#F7F5F2',
    borderRadius: 10,
  },
  Input_Container: {
    alignItems: 'center',
    top: 20,
  },
  InputPassword: {
    height: 50,
    width: '95%',
    backgroundColor: '#F7F5F2',
    borderRadius: 10,
    marginTop: 10,
  },
  forgetText_Container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    top: 20,
    right: 5,
  },

  SignUp_Text: {
    textAlign: 'center',
    marginTop: 12,
    fontSize: 20,
    color: 'white',
  },
  buttonSignUp: {
    marginTop: 10,
    height: 50,
    width: '90%',
    borderRadius: 30,
    backgroundColor: '#DE3163',
  },
  textText_Container: {
    flexDirection: 'row',
    justifyContent: 'center',
    top: 10,
  },
  account_Text: {
    fontSize: 15,
  },
  Signup_Text: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  forget_Text: {
    fontSize: 15,
    top: 10,
  },
  Icon: {
    left: 5,
  },
  button_Container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonHeight: {
    marginTop: '50%',
  },
});

export default styles;
