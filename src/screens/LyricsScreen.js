import axios from 'axios';
import {Container, Content, Root} from 'native-base';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  ScrollView,
  Text,
  View,
  StyleSheet,
} from 'react-native';
import FooterComponent from '../components/FooterComponent';

const styles = StyleSheet.create({
  titleText: {
    fontSize: 35,
    fontWeight: 'bold',
  },
  subTitleText: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  },
});

export default function LyricsScreen({route}) {
  const [lyrics, setLyrics] = useState({
    status: 'idle',
    data: [],
  });
  const {artist, song} = route.params;

  useEffect(() => {
    const fetchLyrics = async () => {
      setLyrics({...lyrics, status: 'searching'});
      await axios
        .get(`https://api.lyrics.ovh/v1/${artist}/${song}`)
        .then(response => {
          setLyrics({status: 'done', data: response.data.lyrics});
        })
        .catch(e => {
          console.log(e.message);
          setLyrics({status: 'error', data: []});
        });
    };
    fetchLyrics();
  }, []);

  // console.log(lyrics.status);

  return (
    <Root>
      <Container>
        <ScrollView>
          <Content>
            <View style={{marginHorizontal: 10, marginVertical: 20}}>
              {!artist || !song ? (
                <Text style={styles.subTitleText}>
                  Please go back and fill in both song title and artist name.
                </Text>
              ) : (
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    flex: 1,
                  }}>
                  <Text style={styles.titleText}>{song}</Text>
                  <Text style={styles.subTitleText}>By: {artist}</Text>
                  {lyrics.status === 'done' && lyrics.data.length ? (
                    <Text>{lyrics.data}</Text>
                  ) : lyrics.status === 'error' ? (
                    <Text>No lyrics found</Text>
                  ) : (
                    <ActivityIndicator
                      size="large"
                      color="#c1262c"
                      style={{marginBottom: 30}}
                    />
                  )}
                </View>
              )}
            </View>
          </Content>
        </ScrollView>
        <FooterComponent />
      </Container>
    </Root>
  );
}
