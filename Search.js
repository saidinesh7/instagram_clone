import { View,Image, StyleSheet,Platform,TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import  Users  from './Users';
import Footer from './Footer'
import { Searchbar } from 'react-native-paper';



export default function Search(){
  return (
    <View>
        <SafeAreaView style={styles.topbar}>
      <View style={{bottom:15}}>
          <Searchbar placeholder='Search' placeholderTextColor='#d3d3d3' iconColor='#fff'  icon={require('../instagran/assets/searchlight.png')} style={styles.search}  />
               </View>
      </SafeAreaView>
    <View style={styles.grid}>
        { Users.map((user,index)=>{
            return(
            <TouchableOpacity key={index}>
        <Image source={{uri:user.postpic}} style={styles.image} />
        </TouchableOpacity>)
})}    
</View>
<View style={{position:'absolute',top:712,marginRight:15,backgroundColor:'#000'}}>
    <Footer />
</View>
    </View>
  )
}



const styles=StyleSheet.create({
    topbar:{
        marginTop:Platform.OS === 'android'?25:0,
        backgroundColor:'#000',
        justifyContent:'center',
        
    },
    search:{
        color:'white',
       backgroundColor:'#2a2b2c',
       fontSize:15,
       height:35,
       marginHorizontal:10,
       borderRadius:10,
    },
    image:{
        width:120,
        height:120
    },
    grid:{
        flexDirection:'row',
        flexWrap:'wrap',
         }
})