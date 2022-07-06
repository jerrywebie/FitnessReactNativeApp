// search screen
import React, {useState, useContext} from 'react';
import {View, Text, TextInput, StyleSheet, ImageBackground, Dimensions} from 'react-native';

import searchImage from '../assets/images/search.gif';
import GlobalStyle from '../utility/GlobalStyle';
import SearchedExerciseList from '../components/SearchedExerciseList';
import ExerciseContext from '../context/ExerciseContext';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Search = ({navigation}) => {
  const {exercises} = useContext(ExerciseContext);
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState([]);
 
  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      const searchedWord = text.toLowerCase();
      const newData =  exercises?.filter(
        (item) => item.name.toLowerCase().includes(searchedWord)
               || item.target.toLowerCase().includes(searchedWord)
               || item.equipment.toLowerCase().includes(searchedWord)
               || item.bodyPart.toLowerCase().includes(searchedWord),
      );
     

      setFilteredData(newData);
      setSearch(text);
    } else {
      setFilteredData([]);
      setSearch(text);
    }
  };
  
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInputStyle}
        onChangeText={(text) => searchFilterFunction(text)}
        value={search}
        underlineColorAndroid="transparent"
        placeholder="Search Here"
      />
        {filteredData.length > 0  ? 
        <Text style={[styles.searchCount,GlobalStyle.categoryTitle]}>
          {'found '}{filteredData?.length}{' exercises related to '}{`${search}`}
        </Text>: null}
        {filteredData.length > 0  ? 
        <SearchedExerciseList data={filteredData} navigation={navigation} />
        :  <ImageBackground source={searchImage} resizeMode="cover" style={styles.searchImage}/>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    backgroundColor: '#FFFFFF',
  },
  itemStyle: {
    padding: 10,
  },
  textInputStyle: {
    width: '96%',
    height: 42,
    borderWidth: 0.6,
    paddingLeft: 20,
    marginHorizontal: 16,
    marginTop: 10,
    borderColor: '#FF2400',
    borderRadius: 4,
  },
  searchCount: {
    width: '96%',
    justifyContent: 'flex-start',
    marginHorizontal: 14,
    marginVertical: 10,
  },
  searchImage: {
    width: windowWidth/1.25,
    height: windowHeight/3,
    marginTop: 20,
    opacity: 0.5
  }
});

export default Search;


