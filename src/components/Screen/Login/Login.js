import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, Image,StatusBar } from 'react-native';

import styles from './Login.styles';

function Login() {
  const navigation = useNavigation();
  const LoginScreen = () => {
    navigation.navigate('LoginScreen');
  };
  const [changeColor, setChangeColor] = React.useState(0);

  const handleClick = () => {
    setChangeColor(!changeColor);
  };

  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.border_Container}>
        <Image style={styles.Image} source={require('./../../İmages/vectorimages.png')} />
        <View style={styles.textContainer_Text}>
          <Text style={styles.connect_Text}>Connect</Text>
          <Text style={styles.tobring_Text}>
            To bring you closer to the products and things you love. Connect with what you wnt
          </Text>
        </View>
        <View style={styles.button_Container}>
          <TouchableOpacity onPress={LoginScreen} style={styles.buttonOne}>
            <Text
              onPress={handleClick}
              style={[
                styles.changeColor,
                {
                  textAlign: 'center',
                  marginTop: 10,
                  fontSize: 20,
                  color: changeColor ? 'white' : 'grey',
                },
              ]}>
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonTwo}>
            <Text style={styles.SignUp_Text}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
export default Login;
