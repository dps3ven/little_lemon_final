import * as React from 'react';
import { useState, useEffect } from 'react';
import { ScrollView, Text, StyleSheet, TextInput, Image, Button, View, Pressable, Alert, Checkbox } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native";

export default function Onboarding() {

  const navigation = useNavigation();
  const [email, onChangeEmail] = useState('');
  const [firstname, onChangefirstname] = useState('');
  const [lastname, onChangelastname] = useState('');
  const [isDisabled, onChangeDisabled] = useState(true)

  const onHomeButtonPressed = () => {
    navigation.navigate("Home");
  };

  const submitable = (email != "" && email)

  const storeData = async () => {
    try {
      await AsyncStorage.setItem('firstName', JSON.stringify(firstname));
      await AsyncStorage.setItem('lastName', JSON.stringify(lastname));
      await AsyncStorage.setItem('emailAddress', JSON.stringify(email));
      onHomeButtonPressed()
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* <Text style={styles.headingSection}>Welcome to Little Lemon</Text> */}
      <Image
        style={styles.image}
        source={require('../img/little_lemon_logo.jpg')}
        resizeMode="contain"
        accessibile={true}
        accessibilityLabel={'Little Lemon Logo'}
      >
      </Image>
      <Text style={styles.infoSection}>Tell us about yourself</Text>
      <TextInput
        style={styles.input}
        value={firstname}
        placeholder={'first name'}
        onChangeText={onChangefirstname}
      >
      </TextInput>
      <TextInput
        style={styles.input}
        value={lastname}
        placeholder={'last name'}
        onChangeText={onChangelastname}
      >
      </TextInput>
      <TextInput
        style={styles.input}
        value={email}
        placeholder={'email address'}
        keyboardType={'email-address'}
        onChangeText={onChangeEmail}
      >
      </TextInput>
      <Pressable
        disabled={submitable ? !isDisabled : isDisabled}
        onPress={() => storeData()}
        style={submitable ? styles.activeButton : styles.disabledButton}>
        <Text style={styles.buttonText}>Next</Text>
      </Pressable>
      {/* <Button title='Next' onPress={onHomeButtonPressed} /> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
  },
  image: {
    height: 250,
    width: 250,
    marginLeft: 40,
  },
  input: {
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: '#EDEFEE',
    backgroundColor: 'white',
  },
  infoSection: {
    fontSize: 24,
    padding: 10,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  activeButton: {
    fontSize: 22,
    padding: 10,
    marginVertical: 80,
    margin: 100,
    backgroundColor: '#F4CE14',
    borderColor: '#F4CE14',
    borderWidth: 2,
    borderRadius: 20,
  },
  disabledButton: {
    fontSize: 22,
    padding: 10,
    marginVertical: 80,
    margin: 100,
    borderWidth: 2,
    borderRadius: 20,
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 25,
  },
});
