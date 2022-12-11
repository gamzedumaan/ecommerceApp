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
  Icon: {
    left: 5,
  },
  ActivityIndicator_Container: {
    zIndex: 1,
    marginTop: '70%',
    marginLeft: '35%',
    position: 'absolute',
    justifyContent: 'center',
  },
  Image: {
    borderRadius: '300%',
    height: 250,
    width: '100%',
  },
  InputUsername: {
    height: 50,
    width: '95%',
    backgroundColor: '#F7F5F2',
    borderRadius: 10,
  },
  InputPassword: {
    height: 50,
    width: '95%',
    backgroundColor: '#F7F5F2',
    borderRadius: 10,
    marginTop: 10,
  },
  Input_Container: {
    alignItems: 'center',
    marginTop:50,
  },
  buttonSignUp: {
    marginTop: 10,
    height: 50,
    width: '90%',
    borderRadius: 30,
    backgroundColor: '#DE3163',
  },

  SignUp_Text: {
    textAlign: 'center',
    marginTop: 12,
    fontSize: 20,
    color: 'white',
  },

  textText_Container: {
    flexDirection: 'row',
    justifyContent: 'center',
    top: 10,
  },
  Login_Text: {
    fontSize:15,
    fontWeight:'bold'
  },
  InputEmail:{
    height: 50,
    width: '95%',
    backgroundColor: '#F7F5F2',
    borderRadius: 10,
    top:10
  },
  InputConform:{
    height: 50,
    width: '95%',
    backgroundColor: '#F7F5F2',
    borderRadius: 10,
    top:20

  }
});

export default styles;
