import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, Platform, StatusBar } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from "@expo/vector-icons";

const Sports = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={25} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Sports</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <MaterialIcons name="search" size={25} color="#fff" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons name="notifications" size={25} color="#fff" style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Image source={require("../assets/img/football.png")} style={styles.iconImage} />
          <Text style={styles.buttonText}>Sports List</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image source={require("../assets/img/p2.png")} style={styles.iconImage} />
          <Text style={styles.buttonText}>Sport Staffs</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Image source={require("../assets/img/plus.png")} style={styles.iconImage} />
          <Text style={styles.buttonText}>Add Game's</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}></Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.doneButton}>
        <Text style={styles.doneButtonText}>DONE</Text>
      </TouchableOpacity>
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
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 45,
  },
  headerIcons: {
    flexDirection: "row",
  },
  icon: {
    marginLeft: 15,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: 20,
    marginTop: 25,
  },
  button: {
    height: 120,
    width: "45%",
    backgroundColor: "white",
    padding: 20,
    margin: 10,
    alignItems: "center",
    borderRadius: 18,
    justifyContent: "center",
  },
  iconImage: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
  },
  doneButton: {
    backgroundColor: "#FFA500",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 90,
    width: 160,
    alignSelf: "center",
  },
  doneButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
});

export default Sports;
