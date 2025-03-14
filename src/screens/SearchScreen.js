import React,{useState} from "react";
import {View, Text, StyleSheet, Button, TouchableOpacity, ScrollView} from 'react-native';
import Toast from "react-native-toast-message";
import SearchBar from '../components/SearchBar';
import useResults from "../hooks/useResults";
import ResultList from "../components/ResultList";
import UseResults from "../hooks/useResults";
const SearchScreen = (props)=>{
    const [search, results,errorMessage,setErrorMessage, resturantDetail, searchdetails] = useResults(); 
    const [term, setTerm] = useState('');
    const findByPrice = (price)=> results.filter((business)=> business.localized_price== price);  
    const handleSearchTerm =async (newValue )=>{
       setTerm(newValue);
       
    } 
    const handleTermSubmited = async (newTerm)=>{
         setTerm(newTerm);
        
      await search(term); 
    
    }
    const filterByCategroy= (categpry)=>{

    }
    if (results == null) 
    {
        return null;
    }
    return (
       <View style ={{flex:1}}>
               <SearchBar term={term} onTermSubmitted   ={handleTermSubmited} onSearchTerm = {handleSearchTerm} />
                    
                
                {
                        errorMessage.length<=0?
                    
                            null
                        : 
                        <TouchableOpacity style ={{top:'70%'}}  onPress={()=>{setErrorMessage('')}}>
                            <View style={styles.container}>
                                <Text style={styles.text}>{errorMessage}</Text>
                            </View>
                        </TouchableOpacity>
                }
                {results?
                <ScrollView>
                    <ResultList  title = "Cost Effective" businessResults = {findByPrice('€')} />
                    <ResultList  title = "Bit Pricies" businessResults = {findByPrice('€€')} />
                    <ResultList  title = "Big Spender" businessResults = {findByPrice('€€€')} />
                </ScrollView>:
                null
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
        fontSize: 16,
        fontWeight: "bold",
      },
});

export default SearchScreen;