import Icon from '@expo/vector-icons/FontAwesome5';
import Icon2 from '@expo/vector-icons/Fontisto';
import Icon3 from '@expo/vector-icons/Fontisto';
import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native';

import styles from './Articles.styles';

function Articles() {
  const navigation = useNavigation();

  const Home = () => {
    navigation.navigate('Home');
  };
  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.border_Container}>
        <View style={styles.Text_Container}>
          <View style={styles.articlesText_Container}>
            <Text style={styles.articles_Text}>Latest Articles</Text>
          </View>
          <View style={styles.area_Container}>
            <View style={styles.area}>
              <View style={styles.texts_Container}>
                <Text style={styles.technology_Text}>TECHNOLOGY</Text>
                <Text style={styles.well_Text}>Well, well, well, how the turntables</Text>
                <Text style={styles.text_Text}>
                  It is a long established fact that a reader will be distracted by the readable
                  content of a page when looking at its layout. as opposed to using 'Content here,
                  content here', making it look like readable English...
                </Text>
                <Text style={styles.readMore_Text}>Read More..</Text>
                <View style={styles.Icon_Container}>
                  <Icon2 style={styles.Icon2} name="favorite" size={24} color="black" />
                  <Icon style={styles.Icon} name="share" size={24} color="black" />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.whats_text_Container}>
            <Text style={styles.whats_Text}>What's included in Pro version</Text>
          </View>
          <View>
            <View style={styles.IconAndTex}>
              <Icon3 name="check" size={20} color="black" />
              <Text style={styles.Add_Text}>Add-free interFace</Text>
            </View>
            <View style={styles.IconAndTex}>
              <Icon3 name="check" size={20} color="black" />
              <Text style={styles.Add_Text}>Advance Analtic</Text>
            </View>
            <View style={styles.IconAndTex}>
              <Icon3 name="check" size={20} color="black" />
              <Text style={styles.Add_Text}>Unilmited Shopping</Text>
            </View>
            <View style={styles.IconAndTex}>
              <Icon3 name="check" size={20} color="black" />
              <Text style={styles.Add_Text}>All music and sound effect</Text>
            </View>
            <View style={styles.IconAndTex}>
              <Icon3 name="check" size={20} color="black" />
              <Text style={styles.Add_Text}>All music and sound effect</Text>
            </View>
          </View>
          <View style={styles.button_Container}>
            <TouchableOpacity onPress={Home} style={styles.button}>
              <Text style={styles.next_Text}>Get Home</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Articles;
