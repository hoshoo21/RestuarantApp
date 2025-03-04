import React from "react";
import {View, TextInput, StyleSheet} from 'react-native';
import {Feather} from '@expo/vector-icons';

const SearchBar =(props) =>{
    return(
        <View style={styles.backGroundStyle}>
            <Feather style={styles.iconStyle} name="search" />
            <TextInput style ={styles.inputStyle} 
                placeholder="Search"
                autoCorrect={false}
                autoCapitalize="none"
                value = {props.term}
                onEndEditing={(newTerm)=>props.onTermSubmitted()}
                onChangeText={(newTerm)=>props.onSearchTerm(newTerm)}
            /> 
        </View>

    );

}

const styles = StyleSheet.create({
    backGroundStyle :{
        flexDirection:'row',
        backgroundColor:'#F0EEEE',
        marginTop:10,
        height:50,
        marginHorizontal:50,
        borderRadius:5
    },
    iconStyle :{
        fontSize:35,
        alignSelf:'center',
        marginHorizontal:15 
    },
    inputStyle :{
        fontSize:18,
        flex:1
    }
});

export default SearchBar;