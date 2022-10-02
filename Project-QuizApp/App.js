import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import MyStack from './navigation/index1'
import Result from './screens/result'

const App=()=>{
    return (
      <View style={styles.container}>
      <NavigationContainer>
<MyStack/>
</NavigationContainer>
      </View>
    )
}


export default App

const styles = StyleSheet.create({
container:{
  paddingTop:40,
  paddingHorizontal:16,

},


});
