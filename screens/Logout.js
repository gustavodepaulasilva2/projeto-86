import React, { Component } from "react";
import {
    View,
    StyleSheet,
    SafeAreaView,
    Platform,
    StatusBar,
    Image,
    TextInput,
    Alert,
    TouchableOpacity,
    Text
} from "react-native";

import firebase from "firebase";

export default class Logout extends Component(){
    componentDidMount(){
        firebase.auth().singOut()
        this.props.navigation.replace("Login")
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>Sair</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});
