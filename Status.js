import { StyleSheet,
   Text,
   View,
   Image,
   TouchableOpacity,
   ScrollView } from 'react-native'
import { React } from 'react'
import Users  from './Users.js';

export default function Status (){
  return (
    
    <View style={styles.container}>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
      <View style={{flexDirection:"row",paddingVertical:15}}>
          <TouchableOpacity style={{alignItems:'center',paddingTop:10}}>
          <Image source={{uri :'https://img.icons8.com/external-linector-lineal-color-linector/344/external-avatar-man-avatar-linector-lineal-color-linector-4.png'}} style={{width:70,height:70,borderRadius:100,borderColor:'orange',borderWidth:4}} />
          <Text style={styles.text}>saidinesh</Text>
          <View><Image source={require('../instagran/assets/plus.png')} style={{width:20,height:20,position:'absolute',height:20,width:20,backgroundColor:'#0091F7',borderRadius:100,bottom:20,left:12}}/></View>
          </TouchableOpacity>
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
      </View>
      </ScrollView>
  
  
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