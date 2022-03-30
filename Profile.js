import { View, Text,SafeAreaView,Platform,Image,TouchableOpacity,StyleSheet, ScrollView} from 'react-native'
import React from 'react'
import Users from './Users'
import { Button } from 'react-native-elements'
import Footer from './Footer'


export default function Profile() {
  return (
    <View>
      <SafeAreaView style={{backgroundColor:'#000',marginTop:Platform.OS==='android'?25:0,flexDirection:'row',justifyContent:'space-around',alignItems:'center',paddingVertical:10}}>
      <View style={{flexDirection:'row',alignItems:'center'}}><Text style={{color:'#fff',fontSize:23}}>{Users[0].names }</Text><Image source={require('../instagran/assets/downarrow.png')} style={{width:15,height:15,marginLeft:3,marginTop:5}}/></View>
      <View style={{flexDirection:'row',justifyContent:'space-between',width:'25%'}}>
        <TouchableOpacity><Image source={{uri:'https://img.icons8.com/fluency-systems-regular/60/ffffff/plus-2-math.png'}} style={{width:30,height:30}} /></TouchableOpacity>
        <TouchableOpacity><Image source={require('../instagran/assets/hambuger.png')} style={{width:30,height:30}} /></TouchableOpacity>
      </View>
      </SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
             <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-around',backgroundColor:'#000'}}>
                <Image source={{uri:Users[0].image}} style={{width:100,height:100,borderRadius:100}}/>
                <View style={{alignItems:'center'}}>
                  <Text style={{color:'#fff',fontWeight:'700',fontSize:20}}>45</Text>
                  <Text  style={{color:'#fff',fontWeight:'bold'}}>Posts</Text>
                </View>
                <View style={{alignItems:'center'}}>
                  <Text  style={{color:'#fff',fontWeight:'700',fontSize:20}}>283</Text>
                  <Text  style={{color:'#fff',fontWeight:'bold'}}>Followers</Text>
                </View>
                <View style={{alignItems:'center'}}>
                  <Text  style={{color:'#fff',fontWeight:'700',fontSize:20}}>439</Text>
                  <Text  style={{color:'#fff',fontWeight:'bold'}}>Following</Text>
                </View>
      </View>
      <View style={{backgroundColor:'#000',paddingBottom:5,paddingLeft:5}}>
        <Text style={{color:'#fff',fontWeight:'bold',fontSize:18,marginLeft:10}}>{Users[0].names}</Text>
        <Text style={{color:'#fff',fontSize:16,marginLeft:10}}>Be simple and unique</Text>
        <Text style={{color:'#fff',fontSize:16,marginLeft:10}}>Music</Text>
        <Text style={{color:'#f2f2f2',fontSize:16,marginLeft:10}}>@mahi7781</Text>
        <Text style={{color:'#fff',fontSize:16,marginLeft:10}}>cricket</Text>   
      </View>
      
      <View style={{backgroundColor:'#000',flexDirection:'row',alignItems:'center',justifyContent:'center',paddingVertical:7}}>
      <TouchableOpacity>
        <View style={{borderColor:"#f2f2f2",borderWidth:1,paddingVertical:8,paddingHorizontal:95,borderRadius:5}}><Text style={{color:'#fff',}}>Edit Profile</Text></View>
        </TouchableOpacity>
      <TouchableOpacity>
         <View style={{borderColor:'#f2f2f2',borderWidth:1,justifyContent:'center',alignItems:'center',borderRadius:4,marginLeft:20}} >
        <Image source={require('../instagran/assets/addfriend.png')} style={{width:20,height:20,margin:8,}} />
        </View>
        </TouchableOpacity>
      </View>
      <View>
        <ScrollView horizontal style={{backgroundColor:'#000'}}>
      {
            Users.map((user,index)=>{
              return(
          <TouchableOpacity key={index} style={{alignItems:'center',marginLeft:7,paddingTop:10}}>
          <Image source={{uri :user.image}} style={{width:70,height:70,borderRadius:100,borderWidth:4,borderColor:'#0091F7'}} />
          <Text style={styles.text}>{
          user.names.length>11 ? user.names.slice(0,10).toLowerCase()+'...':user.names.toLowerCase()
          }</Text> 
          </TouchableOpacity>     ) 
})    
          }
          <View style={{justifyContent:'center',alignItems:'center',marginTop:15,marginHorizontal:10}}><Image source={require('../instagran/assets/plus.png')} style={{width:65,height:65,borderRadius:70,borderColor:'#fff',borderWidth:1}}/><Text style={{color:'#fff'}}>New</Text></View>
         
          </ScrollView>
      </View>
      <View style={{backgroundColor:'#000',flexDirection:'row',justifyContent:'space-around',paddingVertical:5}}>
       <TouchableOpacity><Image source={require('../instagran/assets/grid.png')} style={{width:35,height:35}}/></TouchableOpacity>
        <TouchableOpacity><Image source={require('../instagran/assets/usertag.png')} style={{width:35,height:35}}/></TouchableOpacity>
      </View>
      
      <View style={{flexWrap:'wrap',flexDirection:'row'}}>
       
      { Users.map((user,index)=>{
            return(
            <TouchableOpacity key={index}>
        <Image source={{uri:user.postpic}} style={{width:120,height:120}} />
        </TouchableOpacity>)
})}    
      </View>
      
      </ScrollView>
      <View style={{position:'absolute',top:712,marginRight:15}}>
      <Footer />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
      backgroundColor:'black',
      
      
  },
  text:{
      color:'white'
  }
})