import  {useEffect, useState} from 'react';
import Http from "../api/Http";
import axios from 'axios';


export default ()=>{
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [categories, setCategories] = useState([]);   
    
     useEffect(
         ()=>{search("Coffee")},
         []
     );
    const search = async (searchTerm) => {
        try {
            console.log(searchTerm);
            let config = {
                method: 'get',
                url:`https://yelp-business-api.p.rapidapi.com/search?location=rome&search_term=${searchTerm}&limit=20&offset=0&business_details_type=basic`,
                headers: { 
                  'x-rapidapi-key': 'd755c0b509msh3d7fac84b1a61f3p1c63d1jsn4d312e4dcf62', 
                  'x-rapidapi-host': 'yelp-business-api.p.rapidapi.com',
                 'Content-Type': 'application/json'
                }
              };
            const response = await axios.request(config); 
            setResults( response.data.business_search_result);
            console.log(results);             
        
        } catch (error) {
            console.log("error from search");
            console.error(error);
        }
    };
    return [search, results,errorMessage,setErrorMessage];  
}

