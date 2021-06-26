import React from "react";
import { Alert, requireNativeComponent, Text, TextInput, View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import db from "../config";
import firebase from "firebase";
export default class NoteDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      noteDetails: "",
      userId: firebase.auth().currentUser.email,
    };
  }
  render() {
    return (
      <View>
        <TextInput
          multiline={true}
          onChangeText={(txt) => {
            this.setState({
              noteDetails: txt,
            });
          }}
        />
        <TouchableOpacity
          onPress={() => {
            db.collection("notes").add({
              note_details: this.state.noteDetails,
              user_id: this.state.userId,
            });
            Alert.alert("Note saved sucessfully.");
            this.props.navigation.navigate("Notes");
          }}
        >
          <Text>Save</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
// const styles = StyleSheet.create({
  
// })
