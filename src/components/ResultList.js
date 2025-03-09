import React from 'react';
import {View,Text,StyleSheet,FlatList} from 'react-native';
import ResturantDetails from './ResturantDetails';


const ResultList =(props)=>{
    return (
        <View style={styles.resultContainer}>
            <Text style={styles.titleStyle}>  {props.title} </Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data = {props.businessResults}
                keyExtractor={(business)=>business.id}
                renderItem ={({item})=>{
                    return <ResturantDetails ResturantDetail = {item} />
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