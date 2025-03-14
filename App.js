import react from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import SearchScreen from './src/screens/SearchScreen';
import Restuarant from './src/components/Restuarant';


const Stack = createNativeStackNavigator();

const App =()=>{
  return (
  <NavigationContainer>
      <Stack.Navigator initialRouteName="SearchBusiness">  
        <Stack.Screen name="SearchBusiness"  component={SearchScreen} options={{ title: "Search food by Area" }}  />
        <Stack.Screen name="RestaruantDetails"  component={Restuarant} options={{ title: "Search food by Area" }}  />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});

export default App;
