import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import Title from '..components/title'

const Home=({navigation})=>{
    return (
      <View style={styles.container}>
        <Title/>
        <View style={styles.bannerContainer}>
            <Image source={{uri:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fgithub.com%2Ftopics%2Fquiz-app&psig=AOvVaw2T1hK2wKh8IAp-Tqj8N54p&ust=1664519836772000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCJChhOCxufoCFQAAAAAdAAAAABAD'}}
                style={styles.banner}
                resizeMode="contain"
            />
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate("Quiz")}
        style={styles.button}>
            <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>
      </View>
    )
}

export  default Home;

const styles = StyleSheet.create({
banner:{
    height:300,
    width:300,

},
bannerContainer:{
    justifyContent:'center',
    alignItems:'center',
    flex:1,
},
container:{
    paddingTop:40,
    paddingHorizontal:20,
    height:"100%",

},
button:{
   width:'100%',
   backgroundColor:'#1A759F',
   padding:16,
   borderRadius:16,
   alignItems:'center',
   marginBottom:30,
    
},
buttonText:{
    fontSize:24,
    fontWeight:'600',
    color:'white',
},
})
