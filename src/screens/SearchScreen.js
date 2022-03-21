import React, { useState} from 'react';
import {Text,StyleSheet,ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultList from '../components/ResultList';
 const SearchScreen = ({ navigation }) =>
 {
     
     const [term,setTerm] = useState('');
     const [searchApi,results,errorMessage] = useResults(); 
     
     const filterResultByPrice = (price) => {
         return results.filter(result => {
             if(result && result.price !== undefined) {
                
                return(result.price === price)
             }
             else{
                 return(" ")
             }
            
         });
     };
     return(
         <>
             <SearchBar term={term} 
             onTermChange={setTerm}
             onTermSubmit={()=> searchApi(term)}
             />
             {errorMessage ?<Text>{errorMessage}</Text>: null}
            
             {/* this scroll view is use for scrolling vertical */}
             <ScrollView>
            <ResultList  results={filterResultByPrice('$')}title="Cost Effective" navigation={navigation}/>
            <ResultList  results={filterResultByPrice('$$')}title="Bit Pricer" navigation={navigation}/>
            <ResultList results={filterResultByPrice('$$$')}title="Big Spender" navigation={navigation}/>
            </ScrollView>
         </>
     )
 }
  const styles= StyleSheet.create({
    text:
    {
        marginBottom:5,
        marginTop:5,
    }
  });
   export default SearchScreen;