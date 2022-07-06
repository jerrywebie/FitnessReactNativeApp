// all equipment categories
import React, { useContext} from 'react';
import { View, StyleSheet} from 'react-native';
import EquipmentContext from '../context/EquipmentContext';

import CategoryList from '../components/CategoryList';

const Equipment = ({navigation}) => {
  const {equipments} = useContext(EquipmentContext);
  return (
    <View style={styles.container}>
      <CategoryList 
        data={equipments} 
        mainCategory={false} 
        navigation={navigation} 
        navigationScreenName="ListBySelectedEquipment" 
      />
   </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
 
});
export default Equipment;

