// all exercises screen by selected equipment
import React, {useContext} from 'react';
import { View, StyleSheet} from 'react-native';

import ExerciseList from '../components/ExerciseList';

import ExerciseContext from '../context/ExerciseContext';

const ListBySelectedEquipment = ({route, navigation}) => {
  const { category } = route.params;
  const {exercises} = useContext(ExerciseContext);
  const allExercisesBySelectedEquipment = exercises.filter((exe) => exe.equipment === category);
   
  return (
    <View style={styles.container}>
      <ExerciseList data={allExercisesBySelectedEquipment} navigation={navigation} isMiniCard={false}  />
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

export default ListBySelectedEquipment;