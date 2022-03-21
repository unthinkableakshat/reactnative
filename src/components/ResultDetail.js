import React from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';
 const ResultDetail = ({result}) => {
     console.log("result@@@",result.review_count);
     return (
         <View style={styles.container}>
             <Text> hi akshat</Text>
             {/* <Image style={styles.image} source={{uri: result.image_url}}/> */}
             {/* <Text style={styles.name}>{result.name}</Text> */}
             {/* <Text>{result.rating} Stars,{result.review_count} Reviews</Text> */}
         </View>
     )
 }
  const styles= StyleSheet.create({
    container: {
        marginLeft: 15,
    },  
    image:{
          width: 250,
          height: 120,
          borderRadius: 4
      },
      name: {
          fontWeight: 'bold',
      }
  });

  export default ResultDetail;