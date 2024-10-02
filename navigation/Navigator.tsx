import {createStackNavigator} from '@react-navigation/stack';
import AuthStack from './AuthStack';
import AppStack from './AppStack';

const Stack = createStackNavigator();
export default function Navigator() {
  return (
    <>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="auth" component={AuthStack} />
        <Stack.Screen name="app" component={AppStack} />
      </Stack.Navigator>
    </>
  );
}
