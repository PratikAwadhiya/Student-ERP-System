import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
  FlatList,
  Platform,
  StatusBar,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const MessagePage = ({ route, navigation }) => {
  const { chatName } = route.params || { chatName: "Support" };

  const [messages, setMessages] = useState([
    { id: "1", text: "Hello! How can I help you?", sender: "bot" },
    { id: "2", text: "I need some information.", sender: "user" },
    { id: "3", text: "Sure! What do you need to know?", sender: "bot" },
  ]);
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    if (message.trim().length > 0) {
      setMessages([
        ...messages,
        { id: `${messages.length + 1}`, text: message, sender: "user" },
      ]);
      setMessage("");
    }
  };

  const renderItem = ({ item }) => (
    <View
      style={[
        styles.messageContainer,
        item.sender === "user" ? styles.userMessage : styles.botMessage,
      ]}
    >
      <Text style={styles.messageText}>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{chatName}</Text>
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

        <FlatList
          data={messages}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={styles.messageList}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type a message"
          value={message}
          onChangeText={setMessage}
        />
        <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
          <MaterialIcons name="send" size={24} color="#fff" />
        </TouchableOpacity>
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
  container2: {
    marginTop: -10,
  },
  headerIcons: {
    flexDirection: "row",
  },
  icon: {
    marginLeft: 16,
  },
  container2: {
    flex: 1,
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
  messageList: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  messageContainer: {
    maxWidth: "80%",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  userMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#E6E8DE",
  },
  botMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#98D5C3",
    borderColor: "#ddd",
    borderWidth: 1,
  },
  messageText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  input: {
    flex: 1,
    fontSize: 16,
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 25,
  },
  sendButton: {
    marginLeft: 10,
    backgroundColor: "#595f97",
    padding: 10,
    borderRadius: 25,
  },
});

export default MessagePage;
