import React,{useState} from "react";
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';

const SearchScreen = (props)=>{
    const [term, setTerm] = useState('Ple');
    const handleSearchTerm =(newValue )=>{
        setTerm(newValue);
    }
    const handleTermSubmited =()=>{
        console.log(" term was submitted");
    }
    return (
        <View>
            <SearchBar term={term} onTermSubmitted ={handleTermSubmited} onSearchTerm = {handleSearchTerm} />
            <Text>{term}</Text>
        </View>
        

    );

}

const styles = StyleSheet.create({

});

export default SearchScreen;