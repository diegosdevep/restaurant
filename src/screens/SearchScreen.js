import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SearchBar, ListItem, Avatar, Icon } from 'react-native-elements';
import Loading from '../components/shared/loading/Loading';
import {
  query,
  collection,
  orderBy,
  startAt,
  endAt,
  limit,
  getDocs,
} from 'firebase/firestore';
import { db } from '../firebase/firebase';
import { ScrollView } from 'react-native';
import { size, map } from 'lodash';
import { useNavigation } from '@react-navigation/native';
import { screenName } from '../utils/screenName';

const SearchScreen = () => {
  const [searchResult, setSearchResult] = useState(null);
  const [searchText, setSearchText] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const q = query(
        collection(db, 'restaurants'),
        orderBy('name'),
        startAt(searchText),
        endAt(`${searchText}\uf8ff`),
        limit(20)
      );
      const querySnapshot = await getDocs(q);
      setSearchResult(querySnapshot.docs);
    })();
  }, [searchText]);

  const goToRestaurant = (idRestaurant) => {
    navigation.navigate(screenName.restaurant.tab, {
      screen: screenName.restaurant.restaurant,
      params: {
        id: idRestaurant,
      },
    });
  };

  return (
    <>
      <SearchBar
        placeholder='Search your restaurant'
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
      />
      {!searchResult && <Loading show text='Loading....' />}
      <ScrollView>
        {size(searchResult) === 0 ? (
          <View style={{ alignItems: 'center', marginTop: 20 }}>
            <Text>Not found result</Text>
          </View>
        ) : (
          map(searchResult, (item) => {
            const data = item.data();

            return (
              <ListItem
                key={data.id}
                bottomDivider
                onPress={() => goToRestaurant(data.id)}
              >
                <Avatar source={{ uri: data.images[0] }} rounded />
                <ListItem.Content>
                  <ListItem.Title>{data.name}</ListItem.Title>
                </ListItem.Content>
                <Icon type='material-community' name='chevron-right' />
              </ListItem>
            );
          })
        )}
      </ScrollView>
    </>
  );
};

export default SearchScreen;
