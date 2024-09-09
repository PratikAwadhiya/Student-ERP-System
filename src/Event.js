import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Platform,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, MaterialIcons, Entypo } from "@expo/vector-icons";
import logo from "../assets/img/logoSchool.png";
import logoEvent from "../assets/img/logo.png";
import api from "./api/api";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

const EventDetails = ({ item }) => {
  const [postedTime, setPostedTime] = useState(0);

  useEffect(() => {
    // convert into Wed Jun 12 2024 13:29:32 format
    // const dateTime = new Date(item.createTimeStamp)
    //   .toString()
    //   .split(" GMT+0530")[0];

    const givenDate = dayjs(item.createTimeStamp);
    const currentDate = dayjs();
    const timeAgo = givenDate.from(currentDate);
    setPostedTime(timeAgo);
  }, [item]);

  return (
    <View style={styles.eventDetailContainer}>
      <View style={styles.eventHeader}>
        <View style={styles.logoContainer}>
          <Image
            source={logoEvent}
            style={styles.eventLogo}
            resizeMode="contain"
          />
        </View>
        <View style={styles.eventInfo}>
          <Text style={styles.eventName}>{item.title}</Text>
          <Text style={styles.postTime}>{postedTime}</Text>
        </View>
        <TouchableOpacity>
          <Entypo name="dots-three-vertical" size={20} color="#000" />
        </TouchableOpacity>
      </View>
      <Image src="../assets/img/events.jpeg" style={styles.eventImage} />
      <Text style={styles.eventDesc}>{item.description}</Text>
    </View>
  );
};

const Events = () => {
  const navigation = useNavigation();
  const [eventData, setEventData] = useState([]);

  //get all events data
  const getEventData = async () => {
    try {
      const res = await api.get("/event/get-all");
      setEventData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEventData();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Events</Text>
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

      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.headerContent}>
          <View style={styles.mainLogoContainer}>
            <Image
              source={logoEvent}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>
          {/* <Image source={logo} style={styles.logo} resizeMode="contain" /> */}
          <Text style={styles.schoolName}>DAV School</Text>
          <Text style={styles.location}>
            <Ionicons name="location-sharp" size={18} color="red" /> 5676 Raipur
            chhattisgarh india
          </Text>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.totalEventsBtn}>
              <Text style={styles.totalEvent}>95 Events</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.eventsContainer}>
          {eventData.map((item, index) => (
            <EventDetails item={item} key={index} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingVertical: 20,
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
  headerContent: {
    alignItems: "center",
    marginBottom: 20,
    padding: 10,
    backgroundColor: "#D9D9D9",
    borderRadius: 10,
    width: "90%",
  },
  mainLogoContainer: {
    height: 90,
    width: 90,
    marginHorizontal: "auto",
    backgroundColor: "#FBF6EF",
    borderWidth: 5,
    borderColor: "#FF9D29",
    borderRadius: 50,
    textAlign: "center",
  },
  logo: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginTop: 5,
    marginHorizontal: "auto",
  },
  schoolName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  location: {
    fontSize: 12,
    color: "gray",
    marginBottom: 10,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  totalEventsBtn: {
    backgroundColor: "#F5F5F5",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  totalEvent: {
    color: "#453CAC",
    fontSize: 14,
  },
  eventsContainer: {
    paddingHorizontal: 10,
    paddingBottom: 20,
    width: "100%",
  },
  eventDetailContainer: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    marginBottom: 30,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  eventHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  logoContainer: {
    height: 45,
    width: 45,
    marginHorizontal: "auto",
    backgroundColor: "#FBF6EF",
    borderWidth: 4,
    borderColor: "#FF9D29",
    borderRadius: 50,
    textAlign: "center",
    marginRight: 4,
  },
  eventLogo: {
    width: 35,
    height: 30,
    borderRadius: 50,
    marginTop: 4,
    marginHorizontal: "auto",
  },
  eventInfo: {
    flex: 1,
    marginLeft: 2,
  },
  eventName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  postTime: {
    fontSize: 12,
    color: "gray",
  },
  eventImage: {
    width: "100%",
    height: 150,
    marginBottom: 10,
    borderRadius: 10,
  },
  eventDesc: {
    fontSize: 14,
    color: "#767BAA",
    paddingLeft: 7,
    paddingRight: 7,
  },
});

export default Events;
