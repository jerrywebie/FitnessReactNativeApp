// exercises group by all categories screen
import React, {useContext} from 'react';
import {View, StyleSheet, Image, Dimensions} from 'react-native';
import CategoryList from '../components/CategoryList';
import exerciseBanner from '../assets/images/exercise_banner.jpg';
import equipmentIcon from '../assets/icons/equipment.png';
import gymIcon from '../assets/icons/gym.png';
import targetIcon from '../assets/icons/target.png';
import bodypartIcon from '../assets/icons/body_part.png';

import ExerciseContext from '../context/ExerciseContext';
import BodyPartContext from '../context/BodyPartContext';
import EquipmentContext from '../context/EquipmentContext';
import TargetContext from '../context/TargetContext'; 

const windowWidth = Dimensions.get('window').width;

const Exercises = ({ navigation}) => {
   const {exercises} = useContext(ExerciseContext);
   const {bodyParts} = useContext(BodyPartContext);
   const {equipments} = useContext(EquipmentContext);
   const {targets} = useContext(TargetContext);

   const categories = [
    { totalCount: exercises.length, name: "all exercises", screenName: "All", icon: gymIcon},
    { totalCount: bodyParts.length, name: "body parts", screenName: "BodyPart", icon: bodypartIcon},
    { totalCount: equipments.length, name: "equipments", screenName: "Equipment", icon: equipmentIcon},
    { totalCount: targets.length, name: "targets", screenName: "Target", icon: targetIcon},
   ]
  
  return (
   <View style={styles.container}>
      <Image source={exerciseBanner} resizeMode="cover" style={styles.bannerImage}/>
      <CategoryList 
        data={categories} 
        mainCategory={true} 
        navigation={navigation}
        navigationScreenName={''}
      />
   </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bannerImage : {
    flex: 2,
    width: windowWidth,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
});

export default Exercises;