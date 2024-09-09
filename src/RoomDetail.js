import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Platform,
  StatusBar
} from "react-native";

const RoomDetail = ({ route, navigation }) => {
  const { hostelName } = route.params;
  const totalRooms = 30;
  const availableRooms = 5;

  const [selectedRoom, setSelectedRoom] = useState(null);

  const rooms = Array.from({ length: totalRooms }, (_, index) => ({
    id: index + 1,
    isVacant: index < availableRooms,
    students: ["Mitali Singh , 12th 'A'", "Anjali Singh , 12th 'B'", "Nisha Sahu , 12th 'B'"],
  }));

  const RoomPress = (roomId) => {
    setSelectedRoom(roomId);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Room Status</Text>
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

      <Text style={styles.hostelheader}>{hostelName}</Text>
      <View style={styles.container2}>
        <View style={styles.detailsContainer}>
          <View style={styles.direction}>
            <Text style={styles.detailsText}>Total Rooms: {totalRooms}</Text>
            <Text style={styles.detailsText}>
              Available Rooms: {availableRooms}
            </Text>
          </View>

          <View style={styles.wardenContainer}>
            <Text style={styles.wardenText}>Warden: Prakhar</Text>
          </View>
        </View>

        <FlatList
          data={rooms}
          keyExtractor={(item) => item.id.toString()}
          numColumns={6}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.room,
                item.isVacant ? styles.roomVacant : styles.roomFilled,
                selectedRoom === item.id && styles.roomSelected,
              ]}
              onPress={() => RoomPress(item.id)}
            >
              <Text style={styles.roomText}>{item.id}</Text>
            </TouchableOpacity>
          )}
          contentContainerStyle={styles.roomsContainer}
        />

        {selectedRoom && (
          <View style={styles.selectedRoomContainer}>
            <Text style={styles.selectedRoomHeading}>Room Details</Text>
            <View style={styles.selectedRoomDetails}>
              <View style={styles.roomInfo}>
                <Text style={styles.infoText}>Information</Text>
                <Text style={styles.infoText}>Room Number: {selectedRoom}</Text>
              </View>
              {rooms[selectedRoom - 1].students.map((student, index) => (
                <Text style={styles.studentText} key={index}>
                  Student {index + 1}:  {student}
                </Text>
              ))}
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
    marginLeft: 16,
  },
  hostelheader: {
    textAlign: "center",
    margin: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
  detailsContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    marginTop: 10,
    padding: 20,
    backgroundColor: "#585E97",
    borderRadius: 10,
    width: "92%",
  },
  direction: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  detailsText: {
    fontSize: 17,
    color: "white",
  },
  wardenContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  wardenText: {
    fontSize: 17,
    color: "white",
  },
  roomsContainer: {
    marginTop: 20,
  },
  room: {
    justifyContent: "center",
    alignItems: "center",
    width: 42,
    height: 42,
    margin: 5,
    borderRadius: 5,
  },
  roomVacant: {
    backgroundColor: "green",
  },
  roomFilled: {
    backgroundColor: "red",
  },
  roomSelected: {
    backgroundColor: "blue",
  },
  roomText: {
    color: "#fff",
    fontWeight: "bold",
  },
  selectedRoomContainer: {
    padding: 20,
    backgroundColor: "#757AA7",
    borderRadius: 10,
    width: "75%",
    marginTop: 10,
    marginBottom: 20,
  },
  selectedRoomHeading: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    marginBottom: 10,
  },
  selectedRoomDetails: {
    alignItems: "flex-start",
  },
  roomInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    color: "white",
  },
  infoText: {
    fontSize: 16,
    marginBottom: 10,
    color: "white",
  },
  studentText: {
    fontSize: 15,
    marginVertical: 2,
    color: "white",
  },
});

export default RoomDetail;
