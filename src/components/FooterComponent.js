import {Footer, FooterTab, Button, Icon, Text} from 'native-base';
import React from 'react';
import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function FooterComponent() {
  const navigation = useNavigation();
  return (
    <Footer>
      <FooterTab>
        <Button
          vertival
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Icon name="musical-notes" />
          <Text>Home</Text>
        </Button>
        <Button
          vertival
          onPress={() => {
            navigation.navigate('Search By Keywords');
          }}>
          <Icon name="search" />
          <Text>Search</Text>
        </Button>
        <Button vertival onPress={() => Alert.alert('Coming soon!')}>
          <Icon name="person" />
          <Text>Personal</Text>
        </Button>
      </FooterTab>
    </Footer>
  );
}
