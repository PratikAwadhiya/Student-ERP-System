import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Platform,
  StatusBar
} from "react-native";
import { MaterialIcons , FontAwesome } from "@expo/vector-icons";
import Vector from '../assets/img/Vector.png';

const Result = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigator.goBack()}>
          <MaterialIcons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Result</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <MaterialIcons name="search" size={24} color="#fff" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons name="notifications" size={24} color="#fff" style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.resultsContainer}>
  <View style={styles.logoWrapper}>
    <Image source={Vector} style={styles.logoSmall} />
    <Text style={styles.resultsText}>Results</Text>
  </View>
  
</View>

      <ScrollView style={styles.listContainer}>
        {["Class 10th", "Class 9th", "Class 8th"].map((item, index) => (
          <View key={index} style={styles.listItem}>
            <Text style={styles.listText}>{item}</Text>
            <View style={styles.listIcons}>
              <TouchableOpacity>
                <FontAwesome
                  name="eye"
                  size={24}
                  color="black"
                  style={styles.icon}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <FontAwesome name="download" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#B9B9B9',
      },
      header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20,
        paddingTop: 40,
        backgroundColor: '#585E97',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        position: 'relative',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 10 : 30,
      },
      headerTitle: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        paddingLeft: 45,
      },
      headerIcons: {
        flexDirection: 'row',
      },
      icon: {
        marginLeft: 16,
      },
      resultsContainer: {
        alignItems: "center",
        marginVertical: 35,
        marginHorizontal:40,
        position: "relative",
        padding:20,
        borderRadius: 20,
        backgroundColor: "#D9D9D9", 
      },
      logoWrapper: {
        backgroundColor: "#fff", 
        padding: 10,
        paddingHorizontal:50,
        borderRadius: 25,
        borderWidth:1,
        borderColor:'grey',
      },
      logoSmall: {
        width: 80,
        height: 80,
      },
      
  resultsText: {
    fontSize: 20,
    textAlign:'center',
    fontWeight: "bold",
    marginTop: 20,
  },
  listContainer: {
    paddingHorizontal: 12,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 18,
    backgroundColor: "#FFFFFF",
    marginBottom: 14,
    borderRadius: 5,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: -7,
    elevation: 5,
  },
  listText: {
    fontSize: 16,
  },
  listIcons: {
    gap:18,
    flexDirection: "row",
  },
});

export default Result;
