// all exercises screen by selected body part
import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';

import ExerciseList from '../components/ExerciseList';

import ExerciseContext from '../context/ExerciseContext';

 const ListBySelectedBodyPart = ({route, navigation}) => {
  const { category } = route.params;
  const {exercises} = useContext(ExerciseContext);
  const allExercisesBySelectedBodyPart = exercises.filter((exe) => exe.bodyPart === category);
   
  return (
    <View style={styles.container}>
      <ExerciseList data={allExercisesBySelectedBodyPart} navigation={navigation} isMiniCard={false} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
  },

});

export default ListBySelectedBodyPart;