import React,{useState,useEffect} from "react";
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import Toast from "react-native-toast-message";
import SearchBar from '../components/SearchBar';
import Http from "../api/Http";
const SearchScreen = (props)=>{
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    
    useEffect(
        ()=>{search('indian')},
        []
    )

    const search =async (searchTerm)=>{
       
       try{
        const response = await  Http.get(`/filter.php?a=${term}`);
        console.log(response.data);
        setResults(response.data.meals);
       } 
       catch(err){
        setErrorMessage('Something Went Wrong');        
       }
       
    }
 
    const handleSearchTerm =(newValue )=>{
        setTerm(newValue);
    }
    const handleTermSubmited =()=>{
        search('indian');
    }
    return (
        <View style ={{flex:1}}>
            <SearchBar term={term} onTermSubmitted   ={handleTermSubmited} onSearchTerm = {handleSearchTerm} />
            
            {
                errorMessage.length<=0?
              
                <Text>We have found {  results? results.length: 0 }</Text>
                : 
                <TouchableOpacity style ={{top:'70%'}}  onPress={()=>{setErrorMessage('')}}>
                    <View style={styles.container}>
                        <Text style={styles.text}>{errorMessage}</Text>
                    </View>
                </TouchableOpacity>
            }
            
        </View>
        

    );

}

const styles = StyleSheet.create({
    container: {
         // Ensures the message stays at the bottom
        top :'80%' ,
        bottom: 30,           // Distance from the bottom of the screen
        left: "5%",           // Center horizontally
        right: "5%",          // Center horizontally
        backgroundColor: "rgba(255, 0, 0, 0.6)",
        padding: 10,
        borderRadius: 8,
        alignItems: "center",
        verticalAlign:'bottom',
        width: "90%",    
      },
      text: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
      },
});

export default SearchScreen;