import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import HomeIcon from './../../Icons/HomeIcon';
import styles from './FirstHome.styles';

function FirstHome() {
  const navigation = useNavigation();

  const Home = () => {
    navigation.navigate('Home');
  };

  const [changeColor, setChangeColor] = React.useState(0);

  const handleClick = () => {
    setChangeColor(!changeColor);
  };

  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.border_Container}>
        <View style={styles.icon_Container}>
          <HomeIcon />
        </View>
        <View style={styles.texts_Container}>
          <Text style={styles.start_Text}>Start by creating </Text>
          <Text style={styles.account_Text}>an account</Text>
          <Text style={styles.It_Text}>
            It is now very easy to reach the best quality among all
          </Text>
        </View>
        <View style={styles.button_Container}>
          <TouchableOpacity onPress={Home} style={styles.button}>
            <Text style={styles.next_Text}>Next</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.Line_Container}>
          <View
            style={{
              height: 3,
              width: '35%',
              backgroundColor: changeColor ? 'grey' : 'black',
              borderRadius: 50,
              margin: 5,
            }}
          />
          <View style={styles.lineTwo} />
          <View style={styles.lineThree} />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default FirstHome;
