import React from 'react';
import { Card } from 'react-native-elements';
import { Button, View, Text, SectionList } from 'react-native';

const DATA = [
  {
    title: 'Almagro',
    data: ['01 Almagro', '02 Almagro', '03 Almagro'],
  },
  {
    title: 'Balvanera',
    data: ['01 Balvanera', '02 Balvanera'],
  },
  {
    title: 'Barracas',
    data: ['01 Barracas', '02 Barracas', '03 Barracas', '04 Barracas'],
  },
  {
    title: 'Belgrano',
    data: ['01 Belgrano'],
  },
];

const Item = ({ title, props }) => (
  <View>
    <Button title={title} onPress={() => props.navigation.navigate('Home')} />
  </View>
);

export default function NeighborhoodsList(props) {
  return (
    <Card>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Item title={item} props={props} />}
        renderSectionHeader={({ section: { title } }) => <Text>{title}</Text>}
      />
    </Card>
  );
}
