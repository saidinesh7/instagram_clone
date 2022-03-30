import { View,Image, SafeAreaView, TouchableOpacity,StyleSheet,Text,Platform } from 'react-native'
import { React } from 'react'
import {useNavigation} from '@react-navigation/native'


 const Heading=({navigation})=>{

      navigation=useNavigation();

  return (
    
    <SafeAreaView style={{flex:0,backgroundColor:"black",flexDirection:'row',alignContent:"center",paddingHorizontal:10,paddingTop:Platform.OS==='android'?25:0}}>
        <View style={{flexDirection:'row',justifyContent:"space-between",width:"100%",alignContent:'center'}}>
            <TouchableOpacity>
            <Image source={require('../instagran/assets/instagramlogo.png')} style={{width:100,height:30}} />
            </TouchableOpacity>
            <View style={{flexDirection:"row",justifyContent:'space-around',width:100,alignItems:'center'}}>
            <TouchableOpacity onPress={()=>navigation.navigate('Addpost')}>
                <Image source={{uri:'https://img.icons8.com/fluency-systems-regular/60/ffffff/plus-2-math.png'}} style={{width:30,height:30}} />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('Message')}>
                    <View style={styles.badge}><Text style={{color:"white",fontSize:10}}>7</Text></View>
                <Image source={{uri:'https://img.icons8.com/fluency-systems-regular/60/ffffff/facebook-messenger--v1.png'}} style={{width:30,height:30}} />
                </TouchableOpacity>
            </View>

        </View>
</SafeAreaView>
  )
}


const styles=StyleSheet.create({
    badge:{
        position:'absolute',
        backgroundColor:"red",
        width:18,
        height:18,
        borderRadius:10,
        zIndex:10,
        alignItems:'center',
        justifyContent:'center',
        left:15,
        bottom:18
    }
});

export default Heading;