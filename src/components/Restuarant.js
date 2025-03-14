import React, {useEffect, useState} from "react";

import {View,Text,FlatList, Image, StyleSheet} from 'react-native';
import { useRoute } from "@react-navigation/native";
import  useResults from '../hooks/useResults';
import axios from "axios";
const Restuarant = (props)=> {
    const route = useRoute();
    const {alias} = route.params|| {};
    const [resturantDetail, setResturantDetail] = useState([]);

    const [aliasItem, setAliasItem] = useState("");
    const searchdetails = async (alias) => {
        try {
            const options = {
                method: 'GET',
                url: 'https://yelp-business-api.p.rapidapi.com/each',
                params: {
                  business_url: `https://www.yelp.com/biz/${alias}`
                },
                headers: {
                    'x-rapidapi-key': 'f3b42c2104msh54c12c7c4069439p1741bejsn8259d0c58f76',
                    'x-rapidapi-host': 'yelp-business-api.p.rapidapi.com',
                    'Content-Type': 'application/json'
               
               
                }
              };
            const response = await axios.request(options); 
            setResturantDetail(response.data.business_details);
        
        } catch (error) {
            console.log("error from searchdetails");
            console.error(error);
        }
    };
    
    useEffect(() => {

    }, [resturantDetail]);
    useEffect(() => {
        if (alias) {
            getRestuarantDetails();
        }
    }, [alias]);
    const getRestuarantDetails =async()=>{
            if (alias){
            await searchdetails(alias);
        }
    }
    
    return (
        <View>
            <Text>  {resturantDetail.name} </Text>
            <FlatList 
                data = {resturantDetail.photos}
                keyExtractor={(photo)=> photo.id}
                renderItem={({item})=> {
                    console.log(item.url_prefix)
                    return <Image style={styles.imageStyle}  source={{uri:item.url_prefix+"o.jpg"} }/>
                }}
            />
        </View>
    );

}

const styles = StyleSheet.create({  
    imageStyle : {
        width : 300,
        height : 200,
    }

});
export default Restuarant;