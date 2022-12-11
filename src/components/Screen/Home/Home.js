import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import styles from './Home.styles';

function Home() {
  const navigation = useNavigation();

  const SeeAll = () => {
    navigation.navigate('SeeAll');
  };

  const Articles = () => {
    navigation.navigate('Articles');
  };
  const Notification = () => {
    navigation.navigate('Notification');
  };

  const Login = () => {
    navigation.navigate('Login');
  };
  const [commece, setCommerce] = useState();

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then((response) => setCommerce(response.data));
  }, []);

  return (
    <View style={styles.Container}>
      <View style={styles.border_Container}>
        <View style={styles.Image_Container}>
          <Image style={styles.dres_Image} source={require('./../../İmages/furniture.jpeg')} />
        </View>

        <View style={styles.text_Containder}>
          <Text style={styles.most_Text}>Most Popular</Text>
          <Text onPress={SeeAll} style={styles.seeAll_Text}>
            See All
          </Text>
        </View>
        <ScrollView style={styles.button_Container} horizontal>
          <TouchableOpacity style={styles.button_One}>
            <Text style={styles.All_Text}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={Articles} style={styles.button_Two}>
            <Text style={styles.Articles_Text}>Articles</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={Login} style={styles.button_Three}>
            <Text style={styles.Login_Text}>Log In</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={Notification} style={styles.button_Four}>
            <Text style={styles.Notification_Text}>Notification</Text>
          </TouchableOpacity>
        </ScrollView>
        <View style={styles.flatList_Container}>
          <FlatList
            numColumns={2}
            data={commece}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return (
                <View style={styles.axiosData_container}>
                  <Image style={styles.axios_Image} source={{ uri: item.image }} />
                  <Text style={styles.category}>{item.category}</Text>
                </View>
              );
            }}
          />
        </View>
      </View>
    </View>
  );
}
export default Home;
