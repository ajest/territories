import React, { Component } from 'react';
import { Card } from 'react-native-elements';
import { Button } from 'react-native';

class NeighborhoodsList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card>
        <Button
          title="Almagro"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Balvanera"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Belgrano"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </Card>
    );
  }
}

export default NeighborhoodsList;
