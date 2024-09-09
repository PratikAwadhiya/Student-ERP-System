import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
  Platform
  ,StatusBar
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const Announcement = ({ navigation }) => {
  const announcements = [
    {
      id: "1",
      heading: "Heading Announcement 1",
      date: "2024-06-06",
      notice:
        "Lorem ipsum dolor sit amet. Eum consectetur commodi cum dicta expedita ea natus perferendis est .",
    },
    {
      id: "2",
      heading: "Heading Announcement 2",
      date: "2024-06-05",
      notice:
        "Lorem ipsum dolor sit amet. Eum consectetur commodi cum dicta expedita ea natus perferendis est .",
    },
    {
      id: "3",
      heading: "Heading Announcement 3",
      date: "2024-06-04",
      notice:
        "Lorem ipsum dolor sit amet. Eum consectetur commodi cum dicta expedita ea natus perferendis est .",
    },
    {
      id: "4",
      heading: "Heading Announcement 4",
      date: "2024-06-03",
      notice:
        "Lorem ipsum dolor sit amet. Eum consectetur commodi cum dicta expedita ea natus perferendis est .",
    },
    {
      id: "5",
      heading: "Heading Announcement 5",
      date: "2024-06-03",
      notice:
        "Lorem ipsum dolor sit amet. Eum consectetur commodi cum dicta expedita ea natus perferendis est .",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons
            name="arrow-back"
            size={Dimensions.get("window").height * 0.035}
            color="#fff"
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Announcement</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <MaterialIcons
              name="search"
              size={Dimensions.get("window").height * 0.035}
              color="#fff"
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons
              name="notifications"
              size={Dimensions.get("window").height * 0.035}
              color="#fff"
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.announcementContainer}>
        {announcements.map((item) => (
          <View key={item.id} style={styles.announcementItem}>
            <Text style={styles.heading}>{item.heading}</Text>
            <Text style={styles.date}>Date: {item.date}</Text>
            <Text style={styles.notice}>Notice: {item.notice}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FBF6EF",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingTop:"10%",
    paddingHorizontal: "8%",
    width:'100%',
    backgroundColor: "#585E97",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    position: "relative",
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 10 : 30,
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
    marginLeft: Dimensions.get("window").height * 0.012,
  },
  announcementContainer: {
    padding: Dimensions.get("window").height * 0.02,
  },
  announcementItem: {
    backgroundColor: "#FFF",
    padding: Dimensions.get("window").height * 0.015,
    marginBottom: Dimensions.get("window").height * 0.025,
    borderRadius: Dimensions.get("window").height * 0.008,
    borderColor: "gray",
    borderWidth: 1,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  heading: {
    fontSize: Dimensions.get("window").height * 0.022,
    fontWeight: "bold",
  },
  date: {
    fontSize: Dimensions.get("window").height * 0.018,
    color: "grey",
    marginVertical: Dimensions.get("window").height * 0.004,
    fontWeight: "bold",
  },
  notice: {
    fontSize: Dimensions.get("window").height * 0.02,
    marginTop: Dimensions.get("window").height * 0.004,
    fontWeight: "bold",
  },
});

export default Announcement;
