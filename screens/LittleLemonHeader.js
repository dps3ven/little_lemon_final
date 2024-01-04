import * as React from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import Profile from './Profile';
import { useNavigation } from "@react-navigation/native";

export default function LittleLemonHeader() {
  const navigation = useNavigation();

  const onProfileButtonPressed = () => {
    navigation.navigate('Profile');
  };

  return (
    <View style={styles.section}>
      <Button
        title="Profile"
        color="black"
        onPress={() => onProfileButtonPressed()}
      />
      <Button
        title="Cart"
        color="black"
        onPress={() => Alert.alert('Go To Cart')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    flex:1,
    gap: 55,
    padding: 10,
    flexDirection: 'row',
    alignContent: 'center',
    marginLeft: 150,
  },
});
