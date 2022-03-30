import {View,ScrollView,StyleSheet} from 'react-native'
import  React  from 'react'

import  Post  from './Post';
import  Footer  from './Footer';
import  Status  from './Status';
import Users from './Users';
import Heading from './Heading';


  function Home(){
  return (
    <View style={styles.container}>
      <Heading />
      <Status />
    
      <ScrollView>     
       {
  Users.map((user,id)=>{
    return(
    <Post key={id} image={user.image} names={user.names} postpic={user.postpic} likes={user.likes} />)
  }
  )
} 


</ScrollView> 
      <Footer />
    </View>
  )
}


 const styles = StyleSheet.create({
    container:{
      backgroundColor:'#000',
      height:'100%',
    }
  });
  export default Home;