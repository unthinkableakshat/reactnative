import React from 'react';
import {View,StyleSheet, TextInput} from 'react-native';
import {Feather} from '@expo/vector-icons';
 const SearchBar = ({term,onTermChange, onTermSubmit}) =>
 {
     return (
         <View style={styles.backgroundStyle} >
             <Feather name="search" style={styles.iconStyle}/>
            <TextInput 
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.inputStyle} placeholder='search'
            value={term}
            onChangeText={newTerm => onTermChange(newTerm)}
            onEndEditing={()=> onTermSubmit()}
            />
         </View>
     )
 }
  const styles= StyleSheet.create({
    backgroundStyle:
    {
        backgroundColor: '#F0EEEE',
        height: 40,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginBottom:10
    },
    inputStyle:{
        borderColor: 'black',
        borderWidth: 1,
        flex: 1
    },
    iconStyle:{
        fontSize: 40,
        alignSelf:'center',
        marginHorizontal:15
    }
  });
   export default SearchBar;