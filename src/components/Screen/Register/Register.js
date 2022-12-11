import Icon from '@expo/vector-icons/Octicons';
import { useNavigation, useRoute, us } from '@react-navigation/native';
import React, { useEffect } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ActivityIndicator,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import styles from './Register.styles';

function Register() {
  const route = useRoute();
  const { goBack } = useNavigation();

  const [show, setShow] = React.useState(true);

  const navigation = useNavigation();
  const Login = () => {
    navigation.navigate('Login');
  };

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 300);
  }, []);

  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.border_Container}>
        <View style={styles.ActivityIndicator_Container}>
          <ActivityIndicator size={24} color="red" animating={show} />
        </View>

        <Icon
          style={styles.Icon}
          onPress={() => goBack()}
          name="arrow-left"
          size={30}
          color="black"
        />
        <Image style={styles.Image} source={require('./../../İmages/vectorimages.png')} />
        <View style={styles.Input_Container}>
          <TextInput placeholder="Username" selectionColor="black" style={styles.InputUsername}>
            <Text style={styles.username}>{route.params.username}</Text>
          </TextInput>
          <TextInput
            placeholder="Password"
            selectionColor="black"
            keyboardType="numeric"
            secureTextEntry
            style={styles.InputPassword}>
            <Text style={styles.password}>{route.params.password}</Text>
          </TextInput>

          <TextInput placeholder="Email id" selectionColor="black" style={styles.InputEmail}>
            <Text style={styles.email_Text}>{route.params.username}</Text>
          </TextInput>
          <TextInput
            placeholder="Conform Password"
            selectionColor="black"
            style={styles.InputConform}>
            <Text style={styles.conformP_Text}>{route.params.username}</Text>
          </TextInput>
        </View>

        <View style={{ marginTop: '30%' }}>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <TouchableOpacity style={styles.buttonSignUp}>
              <Text style={styles.SignUp_Text}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.textText_Container}>
          <Text style={styles.account_Text}>Alredy have been account</Text>
          <Text onPress={Login} style={styles.Login_Text}>
            Login
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
export default Register;
