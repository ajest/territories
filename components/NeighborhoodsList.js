import React from 'react';
import { Card } from 'react-native-elements';
import { Button, View, Text, SectionList } from 'react-native';
import { territories } from '../database/territories-old';

const Item = ({ title, props }) => (
  <View>
    <Button title={title} onPress={() => props.navigation.navigate('Home')} />
  </View>
);

export default function NeighborhoodsList(props) {
  return (
    <View>
      <Button title="Reload"></Button>
      <Card>
        <SectionList
          sections={territories}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => <Item title={item} props={props} />}
          renderSectionHeader={({ section: { title } }) => <Text>{title}</Text>}
        />
      </Card>
    </View>
  );
}
