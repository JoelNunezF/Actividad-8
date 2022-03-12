import React,{useEffect, useState} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {
  const [data, setData] = useState([]);

  const getPosts = async() =>{
    const url = "https://jsonplaceholder.typicode.com/posts";

    //traer datos
    const response = await fetch(url);
    //Convertirlos a json
    const json = await response.json();
    setData(json);
  } 

  useEffect(()=>{
    getPosts();
  })


  return (
    <View style={styles.container}>
      <FlatList data= {data}
      keyExtractor = {({id},index) => id}
      renderItem ={
        ({item}) =>(
          <Text>{item.title}</Text>
        )
      }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
