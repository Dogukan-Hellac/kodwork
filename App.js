import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import JobListScreen from './screens/JobListScreen';
import JobDetailScreen from './screens/JobDetailScreen';
import FavoritesScreen from './screens/FavoritesScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerTintColor: 'red', headerTitleAlign: 'center' }}>
      <Stack.Screen name="Jobs" component={JobListScreen} />
      <Stack.Screen name="Details" component={JobDetailScreen} />
    </Stack.Navigator>
  )
}

function StackFavorite() {
  return (
    <Stack.Navigator screenOptions={{ headerTintColor: 'red', headerTitleAlign: 'center' }}>
      <Stack.Screen name="Favorites" component={FavoritesScreen} />
    </Stack.Navigator>
  )
}

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{ headerShown: false }}>
        <Drawer.Screen name="Home" component={StackNavigator} options={{title:'Jobs'}} />
        <Drawer.Screen name="FavoritesList" component={StackFavorite} options={{title:'Favorites'}}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;