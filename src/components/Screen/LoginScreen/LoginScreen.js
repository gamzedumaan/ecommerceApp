import Icon from '@expo/vector-icons/Octicons';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, View, SafeAreaView, Image, TextInput, TouchableOpacity } from 'react-native';

import styles from './LoginScreen.styles';

function LoginScreen() {
  const { goBack } = useNavigation();

  const [username, setUsername] = React.useState();
  const [password, setPassword] = React.useState();


  const navigation = useNavigation();
  const SignUp = () => {
    navigation.navigate('Register', {
      username,
      password,

    });
  };

  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.border_Container}>
        <Icon
          style={styles.Icon}
          onPress={() => goBack()}
          name="arrow-left"
          size={30}
          color="black"
        />

        <Image style={styles.Image} source={require('./../../İmages/vectorimages.png')} />

        <Text style={styles.welcome_Text}>Welcome Back</Text>
        <View style={styles.Input_Container}>
          <TextInput
            placeholder="Username"
            selectionColor="black"
            style={styles.InputUsername}
            onChangeText={(text) => setUsername(text)}
            value={username}
          />

          <TextInput
            placeholder="Password"
            selectionColor="black"
            onChangeText={(text) => setPassword(text)}
            style={styles.InputPassword}
            value={password}
          />
        </View>
        <View style={styles.forgetText_Container}>
          <Text style={styles.forget_Text}>Forget Password ? </Text>
        </View>
        <View style={styles.buttonHeight}>
          <View  style={styles.button_Container}>
            <TouchableOpacity  onPress={SignUp} style={styles.buttonSignUp}>
              <Text style={styles.SignUp_Text}>Sign Up</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.textText_Container}>
            <Text style={styles.account_Text}>Dont have an account ?</Text>
            <Text style={styles.Signup_Text}>Sign Up</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default LoginScreen;
