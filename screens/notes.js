import React from "react";
import { Text, View, TouchableOpacity, FlatList } from "react-native";
import { ListItem } from "react-native-elements";
import db from "../config";
import firebase from "firebase";
export default class NoteScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      noteDetails: [],
    };
  }
  renderItem = ({ item, index }) => {
    return (
      <ListItem
        key={index}
        title={item.note_details}
        titleStyle={{ color: "black", fontWeight: "bold" }}
        bottomDivider
      />
    );
  };
  keyExtractor = (item, index) => index.toString();
  getNoteDetails = () => {
    db.collection("notes").onSnapshot((snapshot) => {
      var notes = snapshot.docs.map((doc) => doc.data());
      this.setState({
        noteDetails: notes,
      });
    });
  };
  componentDidMount() {
    this.getNoteDetails();
  }
  render() {
    return (
      <View>
        <View>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("NoteDetails");
            }}
          >
            <Text>Add</Text>
          </TouchableOpacity>
        </View>
        <View>
          <FlatList
            data={this.state.noteDetails}
            renderItem={this.renderItem}
            keyExtractor={this.keyExtractor}
          />
        </View>
      </View>
    );
  }
}
