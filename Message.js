import { View, Text,SafeAreaView,Platform,Image, ScrollView,TouchableNativeFeedback, TouchableOpacity } from 'react-native'
import React from 'react'
import Users from './Users'
import { Searchbar } from 'react-native-paper'
import {useNavigation} from '@react-navigation/native'


export default function Message({navigation}) {
 
  navigation=useNavigation();

  return (
    <View>
<SafeAreaView style={{flex:0,backgroundColor:"#000",flexDirection:'row',alignContent:"center",paddingHorizontal:10,justifyContent:'space-between',paddingVertical:10,marginTop:Platform.OS==='android'?25:0}}>
      
       <TouchableOpacity onPress={()=>navigation.navigate('Home')}><Image source={require('../instagran/assets/leftarrow.png')} style={{width:30,height:30}}/></TouchableOpacity>
        <Text style={{color:'#fff',fontSize:20,fontWeight:'700'}}>{Users[0].names.length>10?Users[0].names.toLowerCase()+'...':Users[0].names.toLowerCase()}</Text>
        <TouchableOpacity><Image source={require('../instagran/assets/camerarecord.png')} style={{width:30,height:30}} /></TouchableOpacity>
        <TouchableOpacity><Image source={require('../instagran/assets/plus.png')} style={{width:30,height:30}} /></TouchableOpacity>
      </SafeAreaView>
      <ScrollView>
      <View style={{backgroundColor:'#000',alignItems:'center'}}>
        <Searchbar placeholder='Search' placeholderTextColor='#f2f2f2' iconColor='#f2f2f2' style={{marginHorizontal:16,height:35,marginVertical:10,borderRadius:10,backgroundColor:'#2a2b2c'}}/>
      </View>
      <View style={{ flexDirection:'row',justifyContent:'space-between',backgroundColor:'#000',paddingVertical:7}}>
        <Text style={{color:"#fff",fontWeight:'700',marginLeft:10}}>Messages</Text>
        <Text style={{color:"#2DADFC",fontWeight:'700',marginRight:10}}>Requests</Text>
      </View>


    {Users.map((user,index)=>{return(
      <TouchableNativeFeedback key={index}>
       <View  style={{backgroundColor:"#000",flexDirection:'row',justifyContent:'space-around',alignItems:'center',paddingVertical:10,borderBottomColor:'#f2f2f2'}}>
         <View style={{flexDirection:'row',alignItems:'center',justifyContent:'flex-start',width:'70%'}}>
        <Image source={{uri:user.image}} style={{height:60,width:60,borderRadius:60}}/>
        <View style={{marginLeft:20}}>
          <Text style={{color:"#fff",fontWeight:'700',fontSize:16}}>{user.names}</Text>
          <Text style={{color:'#f2f2f2'}}>Shared a post 3h ago</Text>
        </View>
        </View>
        <TouchableOpacity>
        <Image source={require('../instagran/assets/camera.png')} style={{width:30,height:30}}/>
        </TouchableOpacity>
                </View> 
                </TouchableNativeFeedback>)})}
      </ScrollView>
    </View>
  )
}