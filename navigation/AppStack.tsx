import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Homescreen from '../screens/HomeScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import OrderScreen from '../screens/OrdersScreen';
import SavedScreen from '../screens/SavedScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {height: 60, margin: 10, borderRadius: 20,position:'absolute'},
        
      }}>
      <Tab.Screen
        name="Home"
        component={Homescreen}
        options={{
          tabBarIcon: () => <Icon name="home" size={30} color={'#1BAC4B'} />,
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="Orders"
        component={OrderScreen}
        options={{
          tabBarIcon: () => <Icon name="list" size={30} color={'#1BAC4B'} />,
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="Saved"
        component={SavedScreen}
        options={{
          tabBarIcon: () => (
            <Icon name="heart-outline" size={30} color={'#1BAC4B'} />
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: () => (
            <Icon name="person-outline" size={30} color={'#1BAC4B'} />
          ),
          tabBarShowLabel: false,
        }}
      />
    </Tab.Navigator>
  );
}

export default function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tab"
        component={TabNavigation}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
