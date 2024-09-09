import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, Platform, StatusBar } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons, Fontisto } from "@expo/vector-icons";

const Sports = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={25} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Inventory</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <MaterialIcons name="search" size={25} color="#fff" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons name="notifications" size={25} color="#fff" style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Medical')}>
            <MaterialIcons name="medical-services" size={35} color="black" />
            <Text style={styles.buttonText}>Medical</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Library')}>
            <MaterialIcons name="menu-book" size={35} color="black" />
            <Text style={styles.buttonText}>Library</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Lab')}>
            <Fontisto name="laboratory" size={35} color="black" />
            <Text style={styles.buttonText}>Laboratory</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Sports')}>
            <MaterialIcons name="sports-football" size={35} color="black" />
            <Text style={styles.buttonText}>Sports</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B9B9B9",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#585E97",
    paddingHorizontal: 15,
    paddingVertical: 20,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 10 : 30,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginLeft:60,
    flex: 1,
  },
  headerIcons: {
    flexDirection: "row",
  },
  icon: {
    marginLeft: 15,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop:-80,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: 20,
    marginTop: 25,
  },
  button: {
    height: 130,
    width: "45%",
    backgroundColor: "white",
    padding: 25,
    margin: 10,
    alignItems: "center",
    borderRadius: 18,
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 18,
    paddingTop:12,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
  },
});

export default Sports;
