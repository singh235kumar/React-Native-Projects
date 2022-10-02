import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'


const Result=({navigation,route})=>{
    const {score}=navigation.params
    const resultBanner=score>30? "https://iconscout.com/illustration/businessman-with-victory-trophy-4819004":"https://iconscout.com/illustration/payment-failure-4320184"
    return (
        <View style={styles.container}>
        <Title titleText='RESULTS'/>
        <Text style={styles.scoreText}> {score}</Text>
        <View style={styles.bannerContainer}>
            <Image source={{uri:'https://iconscout.com/lottie/victory-3959168'}}
                style={styles.banner}
                resizeMode="contain"
            />
        </View>
          <TouchableOpacity onPress={()=>navigation.navigate("Home")} style={styles.button}>
            <Text style={styles.buttonText}>Go TO Home</Text>
        </TouchableOpacity>
        </View>
    )
}



export  default Result
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
    scoreText:{
        fontSize:24,
        fontWeight:'800',
        alignSelf:'center',


    },


})
