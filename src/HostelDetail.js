import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
  Platform,
  StatusBar,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import boy from "../assets/img/boy.png";
import girl from "../assets/img/girl.png";
import hostelImage from "../assets/img/hostel.png";

const HostelDetail = ({ navigation }) => {
  const [selectedSection, setSelectedSection] = useState(null);
  const [activeHostel, setActiveHostel] = useState(null);

  const boysHostels = [
    { id: "1", name: " Boys Hostel A1" },
    { id: "2", name: " Boys Hostel A2" },
    { id: "3", name: " Boys Hostel A3" },
    { id: "4", name: " Boys Hostel A4" },
    { id: "5", name: " Boys Hostel A5" },
  ];

  const girlsHostels = [
    { id: "1", name: " Girls Hostel A1" },
    { id: "2", name: " Girls Hostel A2" },
    { id: "3", name: " Girls Hostel A3" },
    { id: "4", name: " Girls Hostel A4" },
    { id: "5", name: " Girls Hostel A5" },
  ];

  const pressSection = (section) => {
    setSelectedSection(section);
    setActiveHostel(null);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Hostel</Text>
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

      <View style={styles.sectionContainer}>
        <TouchableOpacity
          style={[
            styles.section,
            selectedSection === "boys" && styles.activeSection,
          ]}
          onPress={() => pressSection("boys")}
        >
          <Image source={boy} style={styles.sectionImage} />
          <Text style={styles.sectionText}>Boy's</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.section,
            selectedSection === "girls" && styles.activeSection,
          ]}
          onPress={() => pressSection("girls")}
        >
          <Image source={girl} style={styles.sectionImage} />
          <Text style={styles.sectionText}>Girl's</Text>
        </TouchableOpacity>
      </View>

      {selectedSection && (
        <FlatList
          data={selectedSection === "boys" ? boysHostels : girlsHostels}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.hostelItem,
                activeHostel === item.id && styles.activeHostelItem,
              ]}
              onPress={() => {
                setActiveHostel(item.id);
                navigation.navigate("RoomDetail", { hostelName: item.name });
              }}
            >
              <Image source={hostelImage} style={styles.hostelItemImage} />
              <Text style={styles.hostelItemText}>{item.name}</Text>
            </TouchableOpacity>
          )}
          contentContainerStyle={styles.listContainer}
        />
      )}
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
    padding: 20,
    paddingTop: 40,
    backgroundColor: "#585E97",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    position: "relative",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 10 : 30,
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
  sectionContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 12,
    width: "100%",
    backgroundColor: "#f5f5f5",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    width: "45%",
  },
  activeSection: {
    backgroundColor: "#ADD8E6",
  },
  sectionImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  sectionText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  listContainer: {
    padding: 16,
  },
  hostelItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    marginBottom: 16,
  },
  activeHostelItem: {
    backgroundColor: "#ADD8E6",
  },
  hostelItemImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  hostelItemText: {
    fontSize: 18,
    color: "#333",
  },
});

export default HostelDetail;
