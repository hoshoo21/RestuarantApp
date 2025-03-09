import React from "react";
import { Image, View, Text, StyleSheet } from 'react-native';

const ResturantDetails =(props) => {

        return (
                <View style={styles.detailContainer}>
                    <Image style={styles.imageStyle} source={{uri:props.ResturantDetail.photo_url}} />
                    <Text style={styles.nameStyle}> {props.ResturantDetail.name} </Text>
                    <Text> Stars : {props.ResturantDetail.avg_rating}, Review : {props.ResturantDetail.review_count} </Text>                   
                </View>
        );
}


const styles = StyleSheet.create({
    detailContainer :{
        marginLeft:15,
    },
    imageStyle :{
        width : 250,
        height : 120, 
        borderRadius :4,
        marginBottom:5

    },
    nameStyle :{
        fontSize : 18,
        fontWeight:'bold'
    }

});

export default ResturantDetails;