import axios from 'axios';
import {Container, Content, Root} from 'native-base';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Button,
} from 'react-native';
import FooterComponent from '../components/FooterComponent';

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 40,
    marginTop: 0,
    marginBottom: 0,
    borderWidth: 1,
  },
  description: {
    width: '100%',
    fontSize: 17,
    marginBottom: 20,
  },
});

export default function SearchBySong({navigation}) {
  const [song, setSong] = useState(null);
  const [data, setData] = useState([]);

  function searchSongs() {
    async function fetchLyrics() {
      const replacedSong = song.replace(' ', '+');
      const res = await axios.get(
        `https://itunes.apple.com/search?term=${replacedSong}&entity=song`,
      );
      const onlyContainsName = res.data.results.filter(item => {
        return item.trackName.includes(song) || item.artistName.includes(song);
      });
      setData(onlyContainsName);
    }
    fetchLyrics();
    setSong('');
  }

  const clickedButton = (song, artist) => {
    navigation.navigate('Lyrics', {artist, song});
  };

  return (
    <Root>
      <Container>
        <ScrollView>
          <Content>
            <View style={{marginHorizontal: 40, marginVertical: 60}}>
              <Text
                style={{fontWeight: 'bold', fontSize: 24, marginBottom: 20}}>
                Search by Keywords
              </Text>
              <Text style={styles.description}>
                Type the keyword for the song name or the artist name to search
                the lyrics!
              </Text>
              <TextInput
                style={styles.input}
                onChangeText={text => setSong(text)}
                placeholder="Type name of the song"
              />
            </View>
            <View
              style={[
                {
                  width: '80%',
                  margin: 37,
                  backgroundColor: 'orange',
                },
              ]}>
              <Button color="white" onPress={searchSongs} title="Search" />
            </View>
            {data.map(song => {
              return (
                <View key={song.trackId}>
                  <Button
                    title={`"${song.trackName}" By ${song.artistName}`}
                    onPress={() =>
                      clickedButton(song.trackName, song.artistName)
                    }
                  />
                </View>
              );
            })}
          </Content>
        </ScrollView>
        <FooterComponent />
      </Container>
    </Root>
  );
}
