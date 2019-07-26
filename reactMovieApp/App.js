/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  FlatList,
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const data_json = require('./Info.json');

export default class App extends Component {
  render() {
    return (
      <View style={style.container}>
        <Text style={style.header}>Basic React Native App</Text>
        <ScrollView>
          <Text style={style.title}>Top Ten Movies of IMDB</Text>
          <View style={style.album}>
            <FlatList
              data={data_json}
              renderItem={({ item: { title, image, url } }) => {
                return (
                  <View style={style.elmContainer}>
                    <View style={style.elmHeader}>
                      <Text style={style.elmTitle}>{title}</Text>
                    </View>
                    <View style={style.elmImageContainer}>
                      <Image source={{ uri: image }} style={style.elmImage} />
                    </View>
                    <View style={style.elmFooter}>
                      <TouchableOpacity style={style.elmButton} onPress={() => Linking.openURL(url)}>
                        <Text style={style.elmButtonText}>More Info</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                );
              }}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    backgroundColor: '#C82E31',
    color: '#fff',
    marginLeft: 0,
    marginRight: 0,
    fontSize: 25,
    textAlign: 'center',
  },

  title: {
    textAlign: 'center',
    fontSize: 22,
    marginTop: 10,
    marginBottom: 10,
  },

  album: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },

  elmContainer: {
    borderRadius: 2,
    borderWidth: 1,
    borderColor: '#d6d7da',
    marginBottom: 10,
    alignSelf: 'stretch',
  },

  elmHeader: {
    borderBottomWidth: 1,
    borderColor: '#d6d7da',
  },

  elmTitle: {
    margin: 6,
    fontSize: 20,
  },

  elmImageContainer: {
    flex: 1,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    height: 330,
  },

  elmImage: {
    flex: 1,
    width: '100%',
    height: 300,
  },

  elmFooter: {
    borderTopWidth: 1,
    borderColor: '#d6d7da',
  },

  elmButton: {
    borderRadius: 30,
    borderWidth: 1,
    margin: 15,
    marginTop: 5,
    marginBottom: 5,
    borderColor: '#478dff',
    padding: 10,
  },

  elmButtonText: {
    color: '#007afa',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});