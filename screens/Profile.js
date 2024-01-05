import * as React from 'react';
import { useState, useEffect } from 'react';
import CheckBox from 'expo-checkbox'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    View,
    Text,
    ScrollView,
    Alert,
    TextInput,
    StyleSheet,
    Image,
    Pressable,
} from 'react-native';

export default function Profile() {
    const [email, onChangeEmail] = React.useState('');
    const [firstname, onChangefirstname] = React.useState('');
    const [phonenumber, onChangephonenumber] = React.useState('555-1212');
    const [isstatusChecked, setstatusChecked] = useState(false);
    const [ispasswordChecked, setpasswordChecked] = useState(false);
    const [isspecialofferChecked, setspecialofferChecked] = useState(false);
    const [isnewsletterChecked, setnewsletterChecked] = useState(false);

    const clearData = () => {
        onChangefirstname()
        onChangeEmail()
        onChangephonenumber()
        setnewsletterChecked()
        setpasswordChecked()
        setspecialofferChecked()
        setstatusChecked()
    }

    useEffect(() => {
        const retrieveData = async () => {
            try {
                const firstname = await AsyncStorage.getItem('firstName');
                onChangefirstname(firstname)
                const email = await AsyncStorage.getItem('emailAddress');
                onChangeEmail(email)
                console.log(firstname)
                console.log(email)
            } catch (err) {
                console.log(err);
            }
        };
        retrieveData();
    }, [])
    return (
        <ScrollView style={styles.container}>
            <View style={styles.section}>
                <Image
                    style={styles.placeholderImage}
                    source={require('../img/initials_placeholder.png')}
                    resizeMode="contain"
                >
                </Image>
                <Pressable onPress={() => Alert.alert('Change Profile')} style={styles.button}>
                    <Text style={styles.buttonText}>Change</Text>
                </Pressable>
                <Pressable onPress={() => Alert.alert('Remove Profile')}style={styles.button}>
                    <Text style={styles.buttonText}>Remove</Text>
                </Pressable>
            </View>
            <Text style={styles.headingSection}>Personal information</Text>
            <Text style={styles.infoSection}>
                First Name
            </Text>
            <TextInput
                style={styles.input}
                value={firstname}
                placeholder={'first name'}
                onChangeText={onChangefirstname}
            >
            </TextInput>
            <Text style={styles.infoSection}>
                Email
            </Text>
            <TextInput
                style={styles.input}
                value={email}
                placeholder={'email'}
                onChangeText={onChangeEmail}
                keyboardType='email-address'
            >
            </TextInput>
            <Text style={styles.infoSection}>
                Phone Number
            </Text>
            <TextInput
                style={styles.input}
                value={phonenumber}
                placeholder={'phone'}
                onChangeText={onChangephonenumber}
                keyboardType='phone-pad'
            >
            </TextInput>
            <Text style={styles.infoSection}>
                Email Notifications
            </Text>
            <View style={styles.section}>
                <CheckBox
                    value={isstatusChecked}
                    onValueChange={setstatusChecked}
                    style={styles.checkbox}
                />
                <Text>Order statuses</Text>
            </View>
            <View style={styles.section}>
                <CheckBox
                    value={ispasswordChecked}
                    onValueChange={setpasswordChecked}
                    style={styles.checkbox}
                />
                <Text>Password changes</Text>
            </View>
            <View style={styles.section}>
                <CheckBox
                    value={isspecialofferChecked}
                    onValueChange={setspecialofferChecked}
                    style={styles.checkbox}
                />
                <Text>Special offers</Text>
            </View>
            <View style={styles.section}>
                <CheckBox
                    value={isnewsletterChecked}
                    onValueChange={setnewsletterChecked}
                    style={styles.checkbox}
                />
                <Text>Newsletter</Text>
            </View>
            <Pressable onPress={() => clearData()} style={styles.button}>
                <Text style={styles.buttonText}>Log out</Text>
            </Pressable>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
    },
    input: {
        margin: 2,
        borderWidth: 1,
        padding: 5,
        fontSize: 16,
        borderColor: '#EDEFEE',
        backgroundColor: 'white',
        borderRadius: 10,
    },
    button: {
        padding: 10,
        marginHorizontal: 20,
        backgroundColor: '#F4CE14',
        borderColor: '#F4CE14',
        borderWidth: 2,
        borderRadius: 20,
    },
    logOutButton: {
        padding: 10,
        marginHorizontal: 10,
        marginVertical: 3,
        backgroundColor: '#F4CE14',
        borderColor: '#F4CE14',
        borderWidth: 2,
        borderRadius: 20,
        width: 300,
    },
    buttonText: {
        color: 'black',
        textAlign: 'center',
        fontSize: 15,
    },
    image: {
        height: 250,
        width: 250,
        margin: 10,
        borderRadius: 2,
    },
    placeholderImage: {
        height: 80,
        width: 80,
        marginHorizontal: 10,
    },
    checkbox: {
        alignSelf: 'left',
        margin: 8,
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    infoSection: {
        margin: 2,
        fontSize: 12,
        padding: 5,
        color: 'black',
        textAlign: 'left',
    },
    headingSection: {
        fontSize: 18,
        padding: 5,
        marginVertical: 8,
        color: 'black',
        textAlign: 'left',
    },
});