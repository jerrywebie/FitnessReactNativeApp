// exercise list used by search screen and exercises screen
import React from 'react';
import {Text, FlatList, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';

import GlobalStyle from '../utility/GlobalStyle';

const windowWidth = Dimensions.get('window').width;

const SearchedExerciseList = ({data, navigation}) => {

  const ItemView = ({item}) => {
   const goToExerciseDetails = (exeId) => {
    navigation.navigate( 'ExerciseDetails', {exerciseId : exeId, name: item.name});
  }
    return (
    <TouchableOpacity
      style={styles.exerciseContainer}
      onPress={() => goToExerciseDetails(item?.id)}
    >
      <Text style={[styles.categoryText, GlobalStyle.searchTitle]}>
        {item.name} {', '}{item.bodyPart}{', '}{item.equipment}{', '}{item.target}
      </Text>
    </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={ItemView}
    />
  )
}

const styles = StyleSheet.create({
  exerciseContainer: {
    width: windowWidth - 20,
		alignItems: 'center',
		paddingVertical: 10,
		backgroundColor: "#fffff",
    borderWidth: 0.1,
		borderRadius: 2,
		marginHorizontal: 10,
    marginVertical: 8,
    
  },
  categoryText: {
    paddingHorizontal: 8,
    color: "#808080",
    borderRadius: 4,
  },

});

export default SearchedExerciseList;
