import Icon from '@expo/vector-icons/Octicons';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React, { useEffect } from 'react';
import { View, Text, SafeAreaView, FlatList, Image, TextInput } from 'react-native';

import styles from './SeeAll.styles';

function SeeAll() {
  const { goBack } = useNavigation();

  const [all, setAll] = React.useState();

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then((response) => setAll(response.data));
  }, []);

  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.border_Container}>
        <View style={styles.Icon_Container}>
          <Icon
            style={styles.Icon}
            onPress={() => goBack()}
            name="arrow-left"
            size={30}
            color="black"
          />
          <Text style={styles.products_Text}>PRODUCTS</Text>
        </View>
        <View style={styles.line_Container}>
          <View style={styles.line} />
        </View>
        <View style={{ right: 5 }}>
          <FlatList
            numColumns={2}
            data={all}
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
    </SafeAreaView>
  );
}
export default SeeAll;
