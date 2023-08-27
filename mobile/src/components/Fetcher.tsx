import React from 'react';
import {View, Text, Button} from 'react-native';

const url = 'localhost:8080';
export const Fethcer = () => {
  const [res, setRes] = React.useState<any[]>([]);
  const onPressFetch = async () => {
    const result = await fetch(url, {}).then(r => r.json());
    setRes(prev => [...prev, result]);
  };
  return (
    <View>
      <Text>Fetcher</Text>
      <Button title="Fetch" onPress={onPressFetch} />
      {res.map((r, i) => (
        <Text key={i}>{JSON.stringify(r)}</Text>
      ))}
    </View>
  );
};
