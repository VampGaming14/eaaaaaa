import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import HomeScreen from './screens/HomeScreen';

export default class App extends Component{
  render(){
    return(
      <View style={{flex:1}}>
        <TextInput
          style = {StyleSheet.inputBox}
          onChangeText={text => {
            this.setSate({
              text:text,
              isSearchedPressed:false,
              word:"Loading...",
              lexicalCategory:'',
              examples : [],
              defination:""
            });
          }}
          value = {this.state.text}
        />
        <TouchableOpacity styles={styles.searchButton}
          onPress={()=>{
            this.setState({isSearchedPressed:true});
            this.getWord(this.state.text)
          }}
          >

        </TouchableOpacity>
        <HomeScreen />
      </View>
    )
  }
}
