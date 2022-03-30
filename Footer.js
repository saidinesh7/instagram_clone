import { View,Image, TouchableOpacity } from 'react-native'
import {React, useState } from 'react'
import Users  from './Users.js';
import {useNavigation} from '@react-navigation/native'

const Footer=({ navigation })=>{
      const [active,setActive]=useState('Home');
      navigation=useNavigation();
  return (
    <View style={{flexDirection:'row',width:'100%',justifyContent:'space-around',paddingVertical:7,alignItems:'center',backgroundColor:'#000'}}>
      <TouchableOpacity onPress={()=>{setActive('Home');navigation.navigate('Home');}}><Image source={active=="Home"?require('../instagran/assets/homelight.png'):require('../instagran/assets/homedark.png')} style={{width:30,height:30}}/></TouchableOpacity>
      <TouchableOpacity onPress={()=>{setActive('Search');navigation.navigate('Search');}}><Image source={ active=="Search"?require('../instagran/assets/searchlight.png'):require('../instagran/assets/searchdark.png')} style={{width:30,height:30}}/></TouchableOpacity>
      <TouchableOpacity onPress={()=>setActive('Reels')}><Image source={active=="Reels"?require('../instagran/assets/reeldark.png'):require('../instagran/assets/reellight.png')} style={{width:30,height:30}}/></TouchableOpacity>
      <TouchableOpacity onPress={()=>setActive('Love')}><Image source={active=="Love"?require('../instagran/assets/loveactivewhite.png'):require('../instagran/assets/lovelight.png')} style={{width:30,height:30}}/></TouchableOpacity>
      <TouchableOpacity onPress={()=>{navigation.navigate('Profile')}}><Image source={{uri:Users[0].image}} style={{width:30,height:30,borderRadius:30,borderWidth:1}}/></TouchableOpacity>
    </View>
  )
}
export default Footer;
