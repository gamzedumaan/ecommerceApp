import Icon5 from '@expo/vector-icons/EvilIcons';
import Icon6 from '@expo/vector-icons/FontAwesome';
// eslint-disable-next-line import/no-duplicates
import Icon4 from '@expo/vector-icons/Ionicons';
import Icon7 from '@expo/vector-icons/Ionicons';
import Icon3 from '@expo/vector-icons/MaterialCommunityIcons';
import Icon2 from '@expo/vector-icons/MaterialIcons';
import Icon from '@expo/vector-icons/Octicons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View, SafeAreaView, Alert } from 'react-native';

import styles from './Notification.styles';

function Notification({ navigation: { goBack } }) {
  const Button = () => {
    Alert.alert('Not Notifications');
  };

  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.border_Container}>
        <View style={styles.IconAndText_Container}>
          <Icon onPress={() => goBack()} name="arrow-left" size={30} color="black" />
          <Text style={styles.notification_Text}>Notification</Text>
        </View>

        <View style={styles.area}>
          <View style={styles.one_Container}>
            <View style={styles.square} />
            <Icon2
              style={styles.Icon2}
              onPress={Button}
              name="notifications"
              size={24}
              color="white"
            />
            <View style={styles.circle_Container}>
              <Text style={styles.custom_Text}>Use Custom NoteCostum</Text>
              <View style={styles.circle} />
            </View>
          </View>
        </View>

        <Text style={styles.Today}>Today</Text>
        <View style={styles.areaTwo}>
          <View style={styles.one_Container}>
            <View style={styles.circleTwo} />
            <View style={styles.circle_Container}>
              <Icon3 style={styles.Icon3} name="brightness-percent" size={24} color="white" />
              <View style={styles.texts_Container}>
                <Text style={styles.special_Text}>30 % Special Discount!</Text>
                <Text style={styles.onlytoday_Text}>Special promostion only volid today</Text>
              </View>
            </View>
          </View>
        </View>
        <Text style={styles.yesterday_Text}>Yesterday</Text>
        <View style={styles.areaThree}>
          <View style={styles.one_Container}>
            <View style={styles.circleThree} />
            <View style={styles.circle_Container}>
              <Icon4 style={styles.Icon4} name="wallet-outline" size={24} color="white" />
              <View style={styles.texts_Container}>
                <Text style={styles.successfull_Text}>Top Up E- Wallet Successful!</Text>
                <Text style={styles.topUp_Text}>You have the top up </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.areaFour}>
          <View style={styles.one_Container}>
            <View style={styles.circleFour} />
            <View style={styles.circle_Container}>
              <Icon5 style={styles.Icon5} name="location" size={30} color="white" />
              <View style={styles.texts_Container}>
                <Text style={styles.successfull_Text}>Top Up E- Wallet Successful!</Text>
                <Text style={styles.topUp_Text}>You have the top up </Text>
              </View>
            </View>
          </View>
        </View>
        <Text style={styles.december_Text}>December 22. 2024</Text>
        <View style={styles.areaSix}>
          <View style={styles.one_Container}>
            <View style={styles.circleSix} />
            <View style={styles.circle_Container}>
              <Icon6 style={styles.Icon6} name="credit-card-alt" size={24} color="white" />
              <View style={styles.texts_Container}>
                <Text style={styles.connected_Text}>Credit Card Connected!</Text>
                <Text style={styles.credit_Text}>Credit Card have been </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.areaSeven}>
          <View style={styles.one_Container}>
            <View style={styles.circleSeven} />
            <View style={styles.circle_Container}>
              <Icon7 style={styles.Icon7} name="person" size={24} color="white" />
              <View style={styles.texts_Container}>
                <Text style={styles.connected_Text}>Account Setup Successful!</Text>
                <Text style={styles.credit_Text}>Your account have been </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
export default Notification;
