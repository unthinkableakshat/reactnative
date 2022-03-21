import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ResultDetail from './ResultDetail';
const ResultList =({title, results, navigation}) => {
    return <View style={styles.container}>
        <Text style={styles.title}>{title} </Text>
        <FlatList
            horizontal
            data={results}
            keyExtractor={result => result.id}

            renderItem={({ item }) =>{
                
                return(
                <TouchableOpacity onPress={() =>navigation.navigate('ResultsShow')}>;
                <ResultDetail result={item}/>
                </TouchableOpacity>
                )
            }}
        />
    </View>
};

const styles= StyleSheet.create({
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5,
        
    },
    container:
    {
        marginBottom: 10,
    }
});
export default ResultList;