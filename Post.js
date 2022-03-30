import { View, Text,TouchableOpacity,Image } from 'react-native'
import React, { useState } from 'react'


export default function Post(props){
  const [act,setAct]=useState('');
  const [save,setSave]=useState('unsaved');

  return (
    <View>
       <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',backgroundColor:'black',paddingVertical:10,borderTopColor:'gray',borderTopWidth:1}}>
            <View style={{flexDirection:'row',alignItems:'center',width:'60%'}}>
        <TouchableOpacity>
        <Image source={{uri:props.image}} style={{width:33,height:33,borderRadius:30,marginLeft:10}} />
        </TouchableOpacity>
        <TouchableOpacity>
        <Text style={{color:"#fff",fontSize:18,fontWeight:'700',marginLeft:10}}>{props.names}</Text>
        </TouchableOpacity>
        </View>
        <TouchableOpacity>
        <Image source={require('../instagran/assets/ellipsis.png')} style={{width:20,height:20,marginRight:10}}/>
        </TouchableOpacity>
        </View>

        <Image source={{uri: props.postpic}} style={{height:200,width:'100%'}} />

        <View>
    <View style={{flexDirection:'row',width:'100%',justifyContent:'space-between',alignItems:'center'}}>
      <View style={{flexDirection:'row',width:'40%',alignItems:'center',justifyContent:'space-around',marginLeft:10,paddingVertical:5}}>
     <TouchableOpacity onPress={()=>{if(act=='unliked'){setAct('liked')}else{setAct('unliked')}}}><Image source={  act=="unliked"?require('../instagran/assets/loveactivered.png'):require('../instagran/assets/lovelight.png')} style={{width:30,height:30}}/></TouchableOpacity>
      <TouchableOpacity><Image source={require('../instagran/assets/comment.png')} style={{width:30,height:30}}/></TouchableOpacity>
      <TouchableOpacity><Image source={require('../instagran/assets/send.png')} style={{width:30,height:30}}/></TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={()=>{if(save=='unsaved'){setSave('saved')}else{setSave('unsaved')}}}><Image source={save=="saved"?require('../instagran/assets/bookmarkACTIVE.png'):require('../instagran/assets/bookmark.png')} style={{width:30,height:30,marginRight:10}}/></TouchableOpacity>
      </View>
    </View>
   <Text style={{fontWeight:'700',color:'white',marginLeft:15}}>{props.likes}</Text>
    <View style={{flexDirection:'row',marginLeft:15}}><Text style={{color:'white',fontWeight:'700'}}>{props.names}</Text><Text style={{color:'white'}}>  Fullstack Developer</Text></View>
  <Text style={{color:'gray',marginLeft:15}}>view all 322 comments</Text>
  <View style={{flexDirection:'row',marginLeft:15,marginBottom:5}}><Text style={{color:'#fff',fontWeight:'700'}}>{props.names}</Text><Text style={{color:'#fff'}}>  congo....</Text></View>
    </View>
    </View>
  )
}
