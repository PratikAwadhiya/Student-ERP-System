import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Platform,
  StatusBar,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import hostel from "../assets/img/hostel.png";
import bus from "../assets/img/bus.png";

const Hostel = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Boarding</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <MaterialIcons
              name="search"
              size={24}
              color="#fff"
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons
              name="notifications"
              size={24}
              color="#fff"
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        style={styles.box}
        onPress={() => navigation.navigate("HostelDetail")}
      >
        <Image source={hostel} style={styles.image} />
        <Text style={styles.boxText}>Hostel</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.box1}
        onPress={() => navigation.navigate("Bus")}
      >
        <Image source={bus} style={styles.image} />
        <Text style={styles.boxText}>Bus</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingTop: "10%",
    paddingHorizontal: "8%",
    width: "100%",
    backgroundColor: "#585E97",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 10 : 30,
    position: "relative",
  },
  headerTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 45,
  },
  headerIcons: {
    flexDirection: "row",
  },
  icon: {
    marginLeft: 16,
  },
  box: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#B9BABB",
    margin: 20,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  box1: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#B9BABB",
    margin: 20,
    marginTop: 8,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  boxText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
});

export default Hostel;
