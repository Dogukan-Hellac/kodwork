import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import JobListScreen from './screens/JobListScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerTintColor:'red', headerTitleAlign:'center'}}>
        <Stack.Screen name="Jobs" component={JobListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;