import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from '../MainScreen';
import LoginScreen from '../LoginScreen';
import SignupScreen from '../SignupScreen';

const Stack = createNativeStackNavigator();
export default function index() {
    return (
        <NavigationContainer >
            <Stack.Navigator >

                <Stack.Screen

                    name="MainScreen"
                    component={MainScreen}
                    options={{ headerShown: false }}

                />
                <Stack.Screen

                    name="LoginScreen"
                    component={LoginScreen}
                    options={{ title: 'LoginScreen', headerShown: false }}

                />
                <Stack.Screen

                    name="SignupScreen"
                    component={SignupScreen}
                    options={{ title: 'SignupScreen', headerShown: false }}

                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

