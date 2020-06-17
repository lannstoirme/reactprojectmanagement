import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { MonoText } from '../components/StyledText';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.welcomeContainer}>
          <Image
            source={
                require('../assets/images/pm.png')
              }
            style={styles.welcomeImage}
          />
       

        

          <Text style={styles.getStartedText}>Project Management is a field of discipline where</Text>
          <Text style={styles.getStartedText}>
           large goals and accomplishments can be broken down into bite size pieces, minified
           into smaller tasks, and resources, costs and people involved can be delegated
           and easily managed. 
          </Text>
          <Text style={styles.getStartedText}>The simplest way to think about project Management
          is to think about a recipe you are cooking, and all of the ingredients and tasks
          that need to be accomplished and considered in order to create your recipe.</Text>
          <Text style={styles.getStartedText}>You can look at the project management software
          example through this application, via the resources tab, and also have a look at
          our brief introduction to Project Management.</Text>
        </View>

        
      </ScrollView>
      </View>

      
  );
}

HomeScreen.navigationOptions = {
  header: null,
};





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E1EEFD',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 300,
    height: 200,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
