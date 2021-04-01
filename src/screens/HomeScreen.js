import FooterComponent from '../components/FooterComponent';
import React, {useState} from 'react';

import {
  ScrollView,
  Text,
  View,
  TextInput,
  Image,
  StyleSheet,
  Button,
} from 'react-native';
import {Root, Container, Content} from 'native-base';

const styles = StyleSheet.create({
  input: {
    width: '80%',
    height: 40,
    marginTop: 0,
    marginBottom: 10,
    marginLeft: 40,
    borderWidth: 1,
  },
  description: {
    width: '80%',
    fontSize: 17,
    marginBottom: 20,
    marginLeft: 40,
  },
});

export default function HomeScreen({navigation}) {
  const [artist, setArtist] = useState(null);
  const [song, setSong] = useState(null);

  return (
    <Root>
      <Container>
        <Content>
          <View style={{marginHorizontal: 40, marginVertical: 60}}>
            <Text style={{fontWeight: 'bold', fontSize: 24, marginBottom: 30}}>
              Karaoke Lyrics App
            </Text>
            <Image
              source={{
                uri:
                  'https://images.unsplash.com/photo-1598805538557-c09c3390f5e6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1054&q=80',
              }}
              style={{width: '100%', height: 160}}
            />
          </View>

          <Text style={styles.description}>
            Type the artist name and the song name to search the lyrics!
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setArtist(text)}
            placeholder="Type name of the artist"
            defaultValue={artist}
          />
          <TextInput
            style={styles.input}
            onChangeText={text => setSong(text)}
            placeholder="Type name of the song"
            defaultValue={song}
          />
          <Button
            title="Forgot either the song name or artist name"
            onPress={() => {
              navigation.navigate('Search By Keywords');
            }}></Button>
          <View
            style={[
              {
                width: '80%',
                marginTop: 10,
                marginLeft: 37,
                backgroundColor: 'orange',
              },
            ]}>
            <Button
              color="white"
              onPress={() => {
                navigation.navigate('Lyrics', {artist, song});
                setSong(null);
                setArtist(null);
              }}
              title="Search"
            />
          </View>
        </Content>
        <FooterComponent />
      </Container>
    </Root>
  );
}
