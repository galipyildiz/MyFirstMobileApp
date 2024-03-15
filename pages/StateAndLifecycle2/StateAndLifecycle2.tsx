import React, {useState} from 'react';
import styles from './StateAndLifecycle2.style';
import {FlatList, Switch, Text, View} from 'react-native';

const data = [
  {
    id: 0,
    name: 'cafe.exe',
    isFavorite: true,
  },
  {
    id: 1,
    name: 'cafe_1.exe',
    isFavorite: false,
  },
  {
    id: 2,
    name: 'cafe_2.exe',
    isFavorite: false,
  },
  {
    id: 3,
    name: 'cafe_3.exe',
    isFavorite: false,
  },
  {
    id: 4,
    name: 'cafe_4.exe',
    isFavorite: false,
  },
  {
    id: 5,
    name: 'cafe_5.exe',
    isFavorite: false,
  },
  {
    id: 6,
    name: 'cafe_6.exe',
    isFavorite: false,
  },
  {
    id: 7,
    name: 'cafe_7.exe',
    isFavorite: false,
  },
  {
    id: 8,
    name: 'cafe_8.exe',
    isFavorite: false,
  },
  {
    id: 9,
    name: 'cafe_9.exe',
    isFavorite: false,
  },
];

const StateAndLifecycle2 = () => {
  const [cafeList, setCafeList] = useState(data);
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);

  const renderItem = (renderData: any): React.JSX.Element => {
    return <Text style={styles.text}>{renderData.item.name}</Text>;
  };

  const onFavoritesChanged = (isFavoriteSelected: boolean): void => {
    setShowOnlyFavorites(isFavoriteSelected);
    if (isFavoriteSelected) {
      setCafeList(cafeList.filter(cafe => cafe.isFavorite));
    } else {
      setCafeList(data);
    }
  };

  return (
    <View style={styles.container}>
      <Switch value={showOnlyFavorites} onValueChange={onFavoritesChanged} />
      <FlatList data={cafeList} renderItem={renderItem} />
    </View>
  );
};

export default StateAndLifecycle2;
