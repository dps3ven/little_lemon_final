import * as React from 'react';
import { useState, useEffect } from 'react';
import LittleLemonHeader from './LittleLemonHeader';
import { useNavigation } from "@react-navigation/native";

import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  Pressable,
  Button,
  Alert
} from 'react-native';


const Separator = () => <View style={styles.separator} />;
const url = "https://raw.githubusercontent.com/Meta-Mobile-Developer-PC/Working-With-Data-API/main/capstone.json"

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  const onProfileButtonPressed = () => {
    navigation.navigate('Profile');
  };

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);


  return (
    <ScrollView style={styles.container}>
      <LittleLemonHeader />
      <View style={styles.mainContainer}
      >
        <Text style={styles.logoText}>
          Little Lemon
        </Text>
        <Text style={styles.subheadingText}>
          Chicago
        </Text>
        <View>
          <Text
            style={styles.headingSection}>
            We are a family owner Mediterranean restaurant, focused on traditional recipes service with a modern twist.
          </Text>
        </View>
      </View>

      {/* <Text style={styles.infoSection}>
                ORDER FOR DELIVERY!
            </Text> */}
      <View style={styles.buttonsContainer}
      >
      <Pressable
        onPress={() => Alert.alert('Filter on Starters')}
        style={styles.filterButton}>
        <Text>Starters</Text>
      </Pressable>
      <Pressable
        onPress={() => Alert.alert('Filter on Entrees')}
        style={styles.filterButton}>
        <Text>Entrees</Text>
      </Pressable>
      <Pressable
        onPress={() => Alert.alert('Filter on Salads')}
        style={styles.filterButton}>
        <Text>Salads</Text>
      </Pressable>
      </View>
      <Separator />
      <View style={styles.section}>
        <Text style={styles.infoSection}
        >
          Greek Salad
        </Text>
        <Image
          style={styles.menuImage}
          source={{ uri: 'https://github.com/Meta-Mobile-Developer-PC/Working-With-Data-API/blob/main/images/greekSalad.jpg?raw=true' }}
        //resizeMode="contain"
        >
        </Image>
      </View>
      <View>
        <Text style={styles.descSection}>
          Stuff about Greek Salad
        </Text>
        <Text style={styles.descSection}>
          $7.99
        </Text>
      </View>
      <Separator />
      <View style={styles.section}>
        <Text style={styles.infoSection}>
          Bruschetta
        </Text>
        <Image
          style={styles.menuImage}
          source={{ uri: 'https://github.com/Meta-Mobile-Developer-PC/Working-With-Data-API/blob/main/images/bruschetta.jpg?raw=true' }}
          //resizeMode="contain"
        >
        </Image>
      </View>
      <View>
        <Text style={styles.descSection}>
          Stuff about Bruschetta
        </Text>
        <Text style={styles.descSection}>
          $9.99
        </Text>
      </View>
      <Separator />
      <View style={styles.section}>
        <Text style={styles.infoSection}>
          Pasta
        </Text>
        <Image
          style={styles.menuImage}
          source={{ uri: 'https://github.com/Meta-Mobile-Developer-PC/Working-With-Data-API/blob/main/images/pasta.jpg?raw=true' }}
          //resizeMode="contain"
        >
        </Image>
      </View>
      <View>
        <Text style={styles.descSection}>
          Stuff about Pasta
        </Text>
        <Text style={styles.descSection}>
          $14.99
        </Text>
      </View>
      <Separator />
      {/* <Pressable
        onPress={() => onProfileButtonPressed()}
        style={styles.activeButton}>
        <Text style={styles.buttonText}>Profile</Text>
      </Pressable> */}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    margin: 5,
    backgroundColor: '#495E57',
  },
  logoText: {
    marginHorizontal: 5,
    color: '#F4CE14',
    textAlign: 'left',
    fontSize: 40,
    fontFamily: 'Kailasa',
    fontWeight: 'medium'
  },
  subheadingText: {
    marginHorizontal: 5,
    color: 'white',
    textAlign: 'left',
    fontSize: 24,
    fontFamily: 'Kailasa',
    fontWeight: 'medium'
  },
  button: {
    fontSize: 11,
    padding: 10,
    marginHorizontal: 20,
    backgroundColor: '#F4CE14',
    borderColor: '#F4CE14',
    borderWidth: 2,
    borderRadius: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    margin: 10,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 15,
  },
  image: {
    height: 250,
    width: 250,
  },
  menuImage: {
    height: 75,
    width: 75,
  },
  sectionButton: {
    flexDirection: 'row',
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 20,
    marginTop: 20,
  },
  infoSection: {
    margin: 15,
    fontSize: 18,
    padding: 5,
    color: 'black',
    textAlign: 'left',
  },
  descSection: {
    marginLeft: 17,
    fontSize: 12,
    padding: 2,
    color: 'black',
    textAlign: 'left',
  },
  headingSection: {
    fontSize: 18,
    padding: 7,
    marginVertical: 8,
    color: 'white',
    textAlign: 'left',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  filterButton: {
    fontSize: 22,
    padding: 10,
    backgroundColor: '#C0C0C0',
    borderColor: '#C0C0C0',
    borderRadius: 10,
  },
});