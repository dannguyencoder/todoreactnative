/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {
    Platform, StyleSheet, Text, View,
    TextInput, ScrollView,
    TouchableOpacity
} from 'react-native';

import Note from './Note';

type Props = {};
export default class Main extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            noteArray: [],
            noteText: ''
        }
        this.addNote = this.addNote.bind(this);
        this.deleteNote = this.deleteNote.bind(this);
    }

    render() {

        let notes = this.state.noteArray.map((val, key) => {
            return <Note key={key} keyval={key} val={val}
                         deleteMethod={() => this.deleteNote(key)}/>
        });

        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}> Todo app </Text>
                </View>

                <ScrollView style={styles.scrollContainer}>
                    {notes}
                </ScrollView>

                <View style={styles.footer}>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(noteText) => this.setState({noteText})}
                        value={this.state.noteText}
                        placeholder="Enter your work here..."
                        placeholderTextColor='white'
                        uderlineColorAndroid='transparent'>

                    </TextInput>
                </View>

                <TouchableOpacity onPress={ this.addNote.bind(this) } style={styles.addButton}>
                    <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity>
            </View>
        );
    }

    addNote() {
        if (this.state.noteText) {
            var d = new Date();
            this.state.noteArray.push({
                'date': d.getDate() +
                    "/" + (d.getMonth() + 1) +
                    "/" + d.getFullYear(),
                'note': this.state.noteText,
                'completed': false
            });
            this.setState({ noteArray: this.state.noteArray })
            this.setState({noteText: ''});
        }
    }

    deleteNote(key) {
        if(this.state.noteArray[key].completed == false) {
            // alert('completed: false => completed: true')
            this.state.noteArray[key].completed = true
        } else {
            // alert('completed: true => delete from array')
            this.state.noteArray.splice(key, 1);
        }
        // this.state.noteArray.splice(key, 1);
        this.setState({noteArray: this.state.noteArray})
    }
}

const styles = StyleSheet.create({
    container: {flex: 1},
    header: {
        backgroundColor: "#e9000e",
        alignItems: "center",
        justifyContent: "center",
        borderBottomWidth: 10,
        borderBottomColor: "#ddd"
    },
    headerText: {
        color: "white",
        fontSize: 18,
        padding: 20
    },
    scrollContainer: {
        flex: 1,
        marginBottom: 100
    },
    footer: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10
    },
    textInput: {
        alignSelf: "stretch",
        color: "#fff",
        padding: 20,
        backgroundColor: "#252525",
        borderTopWidth: 2,
        borderTopColor: "#ededed"
    },
    addButton: {
        position: "absolute",
        zIndex: 11,
        right: 20,
        bottom: 90,
        backgroundColor: "#e9000e",
        width: 60,
        height: 60,
        borderRadius: 59,
        alignItems: "center",
        justifyContent: "center",
        elevation: 8
    },
    addButtonText: {
        color: "#fff",
        fontSize: 24
    }
});﻿