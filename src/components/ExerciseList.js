// exercise list used by exercises screen
import React from 'react';
import {View, FlatList} from 'react-native';

import ExerciseCard from './ExerciseCard';

const ExerciseList = ({data, navigation, isMiniCard}) => {

  const ItemView = ({item}) => {
   const goToExerciseDetails = (exeId) => {
    navigation.navigate( 'ExerciseDetails', {exerciseId : exeId, name: item.name});
  }
   
    return (
      // Flat List Item
      <ExerciseCard onPress={() => goToExerciseDetails(item?.id)} item={item} isMiniCard={isMiniCard} />
    );
  };

  return (
    <View style={{flex: 1, marginVertical: 6}}>
      <FlatList
      data={data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={ItemView}
      horizontal={isMiniCard ? true : false}
    />
    </View>
    
  )
}

export default ExerciseList;
