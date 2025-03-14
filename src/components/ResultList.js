import React from 'react';
import {View,Text,StyleSheet,FlatList, TouchableOpacity} from 'react-native';
import ResturantDetails from './ResturantDetails';
import {useNavigation} from '@react-navigation/native';

const ResultList =(props)=>{
    const navigation = useNavigation();
    if (props.businessResults.length ==0)
        return null
    return (
        <View style={styles.resultContainer}>
            <Text style={styles.titleStyle}>  {props.title} </Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data = {props.businessResults}
                keyExtractor={(business)=>business.id}
                renderItem ={({item})=>{
                    return( 
                        <TouchableOpacity onPress={()=> {navigation.navigate("RestaruantDetails",{alias: item.alias})}}>
                            <ResturantDetails ResturantDetail = {item} />
                       </TouchableOpacity>
                    )
                }}
            />

        </View>
    );

}


const styles = StyleSheet.create({
    resultContainer :{
        marginLeft:15,
        marginBottom:30,
    },
    titleStyle :{
        fontSize:18,
        fontWeight:'bold',
        marginBottom:5
    }

})

export default ResultList;