import React from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
} from 'react-native';

const url = 'http://localhost:8000';

type Item = {
  data: any; // response data;
  fetchedAt: string; // ISO string;
};

export const Fetcher = () => {
  const [list, setList] = React.useState<Item[]>([]);
  const onPressFetch = async () => {
    const now = new Date().toISOString();
    const result = await fetch(url, {}).catch(err => {
      console.error(err);
    });
    if (!result) {
      return;
    }
    setList(prev => [{data: result, fetchedAt: now}, ...prev]);
  };
  return (
    <View>
      <Button title="Fetch" onPress={onPressFetch} />
      <SafeAreaView style={styles.listContainer}>
        <FlatList
          data={list}
          keyExtractor={item => item.fetchedAt}
          renderItem={({item}) => {
            return (
              <View style={styles.row} key={item.fetchedAt}>
                <Text style={styles.rowPrimaryText}>{item.fetchedAt}</Text>
                <View style={styles.rowTextPadding} />
                <Text>{JSON.stringify(item.data)}</Text>
              </View>
            );
          }}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
  },
  row: {
    padding: 16,
    borderWidth: 1,
    borderColor: 'lightgray',
  },
  rowPrimaryText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  rowTextPadding: {
    padding: 4,
  },
});
