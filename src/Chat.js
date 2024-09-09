import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
  TextInput,
  Platform,
  StatusBar,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const ChatList = ({ navigation }) => {
  const [searchText, setSearchText] = useState("");

  const chats = [
    {
      id: "1",
      name: "Akshay Sinha",
      lastMessage: "Bye.",
      online: true,
      profilePic: require("../assets/img/ic.png"),
    },
    {
      id: "2",
      name: "Ayushi Jaiswal",
      lastMessage: "See you later.",
      online: false,
      profilePic: require("../assets/img/ic.png"),
    },
    {
      id: "3",
      name: "Nandini Pathak",
      lastMessage: "okay.",
      online: true,
      profilePic: require("../assets/img/ic.png"),
    },
    {
      id: "4",
      name: "Roshni Singh",
      lastMessage: "Thank you.",
      online: false,
      profilePic: require("../assets/img/ic.png"),
    },
    {
      id: "5",
      name: "Divya Salame",
      lastMessage: "Have a nice day",
      online: false,
      profilePic: require("../assets/img/ic.png"),
    },
  ];

  const renderChatItem = ({ item }) => (
    <TouchableOpacity
      style={styles.chatItem}
      onPress={() => navigation.navigate("Message", { chatName: item.name })}
    >
      <Image source={item.profilePic} style={styles.chatProfilePic} />
      <View style={styles.chatDetails}>
        <View style={styles.direc}>
          <Text style={styles.chatName}>{item.name}</Text>
          <View
            style={[
              styles.statusIndicator,
              { backgroundColor: item.online ? "green" : "red" },
            ]}
          />
        </View>
        <View style={styles.statusContainer}>
          <Text style={styles.lastMessage}>{item.lastMessage}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Chat</Text>
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
      <View style={styles.container2}>
        <View style={styles.chatHeader}>
          <Image
            source={require("../assets/img/profile.png")}
            style={styles.profilePic}
          />
          <Text style={styles.chatHeaderTitle}>Chats</Text>
          <View style={styles.chatHeaderIcons}>
            <TouchableOpacity>
              <MaterialIcons
                name="camera-alt"
                size={24}
                color="#333"
                style={styles.icon}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <MaterialIcons
                name="edit"
                size={24}
                color="#333"
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.searchContainer}>
          <MaterialIcons name="search" size={24} color="#333" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>

        <FlatList
          data={chats}
          keyExtractor={(item) => item.id}
          renderItem={renderChatItem}
          contentContainerStyle={styles.chatList}
        />
      </View>
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
  container2: {
    marginTop: -10,
  },
  headerIcons: {
    flexDirection: "row",
  },
  icon: {
    marginLeft: 16,
  },
  chatHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 20,
  },
  chatHeaderTitle: {
    fontSize: 20,
    marginRight: 100,
    fontWeight: "bold",
  },
  direc: {
    flexDirection: "row",
  },
  chatHeaderIcons: {
    flexDirection: "row",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginBottom: 10,
    width: "85%",
    alignSelf: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: -5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  searchInput: {
    marginLeft: 10,
    fontSize: 16,
    flex: 1,
  },
  chatList: {
    width: "90%",
    paddingHorizontal: 20,
    borderRadius: 8,
    alignSelf: "center",
    backgroundColor: "#FFFFFF",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: -5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  chatItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: "grey",
  },
  chatProfilePic: {
    width: 40,
    height: 40,
    borderRadius: 25,
  },
  chatDetails: {
    marginLeft: 10,
    flex: 1,
  },
  chatName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  statusIndicator: {
    width: 8,
    height: 8,
    marginLeft: 8,
    marginTop: 8,
    borderRadius: 5,
    marginRight: 5,
  },
  lastMessage: {
    fontSize: 12,
    color: "#666",
  },
});

export default ChatList;
