import { StatusBar } from 'expo-status-bar';
import { ScrollView, FlatList, StyleSheet, Text, View } from 'react-native';

import { names } from "./name";

export default function App() {
  // names = ['Haris', 'Ali']
  const namesAsObjects = names.map((item)=>{
    return { name: item};
  });
  // namesAsObjects = [{name: 'Haris'}, {name: 'Ali'}]

  // item = {name: 'Haris'}
  // item.name
  // "Haris"
  const renderName = ({ item }) => {
    return <Text>{item.name}</Text>;
  };
 
  return <FlatList data={namesAsObjects} renderItem={renderName}  keyExtractor={(item) => item.name}/>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
