import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

export default function LinksScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <AntDesign name="star" size={24} color="black" />
      <OptionButton
        label="Trial the Project Management Software Package"
        onPress={() => WebBrowser.openBrowserAsync('http://18.237.105.72/')}
      />
      <AntDesign name="star" size={24} color="black" />
      <OptionButton
        label="A Guide to Project Management"
        onPress={() => WebBrowser.openBrowserAsync('https://www.pmi.org/about/learn-about-pmi/what-is-project-management')}
      />
      <AntDesign name="star" size={24} color="black" />
      <OptionButton
        label="Here is an Overview of How to Use a Gantt Chart"
        onPress={() => WebBrowser.openBrowserAsync('https://www.gantt.com/')}
      />
      <AntDesign name="star" size={24} color="black" />
      <OptionButton
        label="Contact the Developer to Register for a Project Management Platform"
        onPress={() => WebBrowser.openBrowserAsync("https://sites.google.com/view/lannstoirme/home")}
        isLastOption
      />
      </ScrollView>
  );
}

function OptionButton({ icon, label, onPress, isLastOption }) {
  return (
    <RectButton style={[styles.option, isLastOption && styles.lastOption]} onPress={onPress}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.optionIconContainer}>
        <AntDesign name="star" size={24} color="black" />
        </View>
        <View style={styles.optionTextContainer}>
          <Text style={styles.optionText}>{label}</Text>
        </View>
      </View>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#134A89',
  },
  contentContainer: {
    paddingTop: 15,
  },
  optionIconContainer: {
    marginRight: 12,
  },
  option: {
    backgroundColor: '#E1EEFD',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
});
