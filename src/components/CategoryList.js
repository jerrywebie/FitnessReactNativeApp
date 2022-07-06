// exercise list used by search screen and exercises screen
import React from 'react';
import {Text, FlatList, StyleSheet, TouchableOpacity, Image} from 'react-native';


import equipmentIcon from '../assets/icons/equipment.png';
import gymIcon from '../assets/icons/gym.png';
import targetIcon from '../assets/icons/target.png';
import bodypartIcon from '../assets/icons/body_part.png';


const CategoryList = ({data, mainCategory, navigation, navigationScreenName}) => {

  const MainCategoryItem = ({item}) => {
		const goToRelatedCategory = (screenName) => {
			navigation.navigate(screenName);
		}

    return (
      // Flat List Item
			<TouchableOpacity
				style={styles.categoryContainer}
			 	onPress={() => goToRelatedCategory(item.screenName)}
			>
        <Image source={item.icon} resizeMode="contain" style={styles.icon} />
				<Text style={styles.categoryText}>{item.totalCount}</Text>
        <Text style={styles.categoryText}>{item.name}</Text>
			</TouchableOpacity>
    );
  };

	const SubCategoryItem = ({item}) => {
    const goToRelatedExerciseList = (navigationScreenName) => {
			navigation.navigate(navigationScreenName, { category: item, name: item});
		}

    const getIcon = (navigationScreenName) => {
      return navigationScreenName === 'ListBySelectedBodyPart' ? bodypartIcon :
      navigationScreenName === 'ListBySelectedEquipment' ? equipmentIcon : 
      navigationScreenName === 'ListBySelectedTarget' ? targetIcon : gymIcon ;
    }
    return (
      <TouchableOpacity
        style={styles.categoryContainer}
        onPress={() => goToRelatedExerciseList(navigationScreenName)}>
        <Image source={getIcon(navigationScreenName)} resizeMode="contain" style={styles.icon} />
        <Text style={styles.categoryText}>{item}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => index.toString()}
			numColumns={2}
			initialNumToRender={8}
      renderItem={mainCategory ? MainCategoryItem : SubCategoryItem}
    />
  )
}

const styles = StyleSheet.create({
  categoryContainer: {
    width: 170,
		justifyContent: 'center',
		alignItems: 'center',
		paddingVertical: 30,
    paddingHorizontal: 15,
		backgroundColor: "#fff",
		borderRadius: 4,
    borderTopLeftRadius: 20, 
    borderBottomRightRadius: 20,
    borderTopLeftColor: '#FF2400',
		marginHorizontal: 16,
    marginVertical: 16,
		borderTopWidth: 2,
		borderTopColor: '#FF2400',
    elevation: 2,
    zIndex: 1,
  },
	categoryText: {
		color: "#808080",
		fontWeight: 'bold',
		textTransform: 'capitalize',
	},
  icon: {
    width: 40,
    height: 40,
    marginBottom: 16
  }
});

export default CategoryList;
