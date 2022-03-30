import { View } from 'react-native'
import React  from 'react'
import  {createNativeStackNavigator}  from '@react-navigation/native-stack'
import  {NavigationContainer}  from '@react-navigation/native'
import Home from './Home'
import Search from './Search'
import Addpost from './Addpost'
import Profile from './Profile'
import Message from './Message'
import { Provider } from 'react-native-paper'


function App() {
  const Stack=createNativeStackNavigator();
  return (
    <Provider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen name="Home" component={Home} options={{headerShown:false,animationTypeForReplace:'push'}} />
        <Stack.Screen name="Search" component={Search} options={{headerShown:false,animationTypeForReplace:'push'}} />
        <Stack.Screen name="Message" component={Message} options={{headerShown:false,animationTypeForReplace:'push'}} />
        <Stack.Screen name="Profile" component={Profile} options={{headerShown:false,animationTypeForReplace:'push'}} />
        <Stack.Screen name="Addpost" component={Addpost} options={{headerShown:false,animationTypeForReplace:'push'}} />
      </Stack.Navigator>
    </NavigationContainer>
    
    </Provider>
  );
}

export default App;


