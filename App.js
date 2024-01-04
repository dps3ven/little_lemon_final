import * as React from 'react';
import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboarding from './screens/Onboarding';
import Home from './screens/Home';
import Profile from './screens/Profile';
import SplashScreen from './screens/SplashScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
 
function App() {

    const Stack = createNativeStackNavigator();
    const [isLoading, setIsLoading] = useState(true);
    const [isOnboardingCompleted, setIsOnboardingCompleted] = useState(false);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setIsLoading(false);
    //     }, 1000);
    // }, []);

    useEffect(() => {
        const removeData = async () => {
            try {
                await AsyncStorage.removeItem('firstName');
                await AsyncStorage.removeItem('lastName');
                await AsyncStorage.removeItem('emailAddress');
            } catch (error) {
                console.log(error);
            }
        };
        const firstLoad = async () => {
            try {
                const firstName = await AsyncStorage.getItem('firstName');
                const lastName = await AsyncStorage.getItem('lastName');
                const emailAddress = await AsyncStorage.getItem('emailAddress');
                if (emailAddress != " " && emailAddress != null) {
                    setIsOnboardingCompleted(true)
                }
                else {
                    setIsOnboardingCompleted(false)
                }
                setIsLoading(false)
            } catch (err) {
                console.log(err);
            }
        };
        //removeData();
        firstLoad();
    }, [])

    if (isLoading) {
        // We haven't finished reading from AsyncStorage yet
        return <SplashScreen />;
    }

    return (
        isOnboardingCompleted ? (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="Profile" component={Profile} />
                </Stack.Navigator>
            </NavigationContainer>
        ) : (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Onboarding" component={Onboarding} />
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="Profile" component={Profile} />
                </Stack.Navigator>
            </NavigationContainer>
        )


    );
}
export default App;