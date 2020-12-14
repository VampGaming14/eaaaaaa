import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

getWord=(word)=>{
        var searchKeyWord = Word.toLowerCase()
        var url ="https://rupinwhitehatjr.github.io/dictionary/%22+searchKeyword+%22.json" +searchKeyWord+".json"
        return fetch (url)
            then((data)=>{
                if(data.status===200)
                {
                    return data.json()
                }
                else
                {
                    return null
                }
                then((response)=>{
                    var responseObject = response
                    if(responseObject){
                        var wordData = responseObject.definitions[0]
                        var definition = wordData.description
                        var lexicalCategory = wordData.wordtype
                        this.setState({
                            "word":this.state.text,
                            "definition":definition,
                            "lexicalCategory":lexicalCategory
                        })
                    }
                    else
                    {
                        this.setState({
                            "word":this.state.text,
                            "definition":"Not Found"
                        })
                    }
                })
            })

        
}
return(){
    return(
        <View style={styles.detailContainer}>
            <Text style={styles.detailsContainer}>
            Word:{""}
                </Text>
                <Text style={styles.detailsContainer}>
                        {this.state.lexicalCategory}    
                </Text>
            </View>
         
    )
   
}