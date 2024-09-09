import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Platform,
  StatusBar,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

function DashboardScreen() {
  const navigation = useNavigation();
  const [selectedIcon, setSelectedIcon] = useState(null);

  const handleBoxPress = (box) => {
    // console.log(`Box ${box.name} clicked`);
    setSelectedIcon(box.name);
    navigation.navigate(box.screen);
  };

  const boxesData = [
    { icon: "account-circle", name: "Attendance", screen: "Attendance" },
    { icon: "event", name: "Time Table", screen: "TimeTable" },
    { icon: "insert-drive-file", name: "Documents", screen: "Document" },
    { icon: "library-books", name: "Subjects", screen: "Subject" },
    { icon: "event-note", name: "Examination", screen: "Examination" },
    { icon: "payment", name: "Fees", screen: "Fees" },
    { icon: "assignment", name: "Online Test", screen: "OnlineTest" },
    { icon: "event", name: "Events", screen: "Event" },
    { icon: "calendar-today", name: "Leave", screen: "LeaveRequest" },
    { icon: "inventory", name: "Inventory", screen: "Inventory" },
    { icon: "business", name: "Boarding", screen: "Hostel" },
    { icon: "headset", name: "Support & Chat", screen: "Chat" },
    { icon: "campaign", name: "Announcement", screen: "Announcement" },
  ];

  const renderIcons = () => {
    return boxesData.map((box, index) => (
      <View key={index} style={styles.boxContainer}>
        <TouchableOpacity
          style={[
            styles.box,
            selectedIcon === box.name && { backgroundColor: "#585E97" },
            { marginLeft: 10, marginTop: 30 },
          ]}
          onPress={() => handleBoxPress(box)}
        >
          <Icon
            name={box.icon}
            size={34}
            color={selectedIcon === box.name ? "#fff" : "#000"}
            style={styles.icon}
          />
        </TouchableOpacity>
        <Text
          style={[
            styles.boxText,
            selectedIcon === box.name && { color: "#000" },
          ]}
        >
          {box.name}
        </Text>
      </View>
    ));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../assets/img/logo.png")} style={styles.logo} />
        <Text style={styles.headerText}>DAV School</Text>
      </View>
      <View style={styles.box2}>
        <View style={styles.box3}>
          <Image
            source={require("../assets/img/pp.png")}
            style={styles.profile}
          />
        </View>
        <Text style={styles.name}>Rashmi Sinha</Text>
        <Text style={styles.admin}>Student: 10th "B"</Text>
        <TouchableOpacity style={styles.button}></TouchableOpacity>
        <Text style={styles.service}>Services</Text>
      </View>

      <View style={styles.iconContainer}>{renderIcons()}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#D9D9D9",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "11.5%",
    backgroundColor: "#585E97",
    paddingVertical: 20,
    paddingBottom: 12,
    paddingHorizontal: 20,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 10 : 30,
  },
  logo: {
    width: 32,
    height: 32,
    resizeMode: "contain",
  },
  headerText: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "700",
    marginLeft: 10,
  },
  box2: {
    width: "100%",
    height: "10.5%",
    backgroundColor: "#fff",
  },
  box3: {
    width: "17%",
    height: "80%",
    backgroundColor: "#fff",
    marginTop: "1.5%",
    marginLeft: "3%",
    borderRadius: 50,
  },
  profile: {
    marginLeft: 5,
    width: 58,
    height: 58,
    marginTop: 5,
  },
  name: {
    fontSize: 22,
    marginTop: "-16%",
    marginLeft: "25%",
    color: "#000",
  },
  admin: {
    fontSize: 15,
    marginLeft: "25.5%",
    color: "#000",
    marginTop: 4,
  },
  service: {
    marginLeft: "6%",
    marginTop: "12%",
    fontSize: 22,
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  box: {
    width: 70,
    height: 65,
    backgroundColor: "#fff",
    alignItems: "center",
    borderRadius: 11,
    marginTop: "-2%",
  },
  icon: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 15,
  },
  boxText: {
    fontSize: 11,
    marginTop: 5,
    textAlign: "center",
    color: "#000",
    alignSelf: "center",
    fontWeight: "600",
    marginLeft: 7,
  },
  iconContainer: {
    marginTop: 50,
    paddingHorizontal: 14,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});

export default DashboardScreen;
