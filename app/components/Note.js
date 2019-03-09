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
    StyleSheet, Text, View,
    TextInput,
    TouchableOpacity
} from 'react-native';

type Props = {};
export default class Note extends Component<Props> {
    render() {
        if (this.props.val.completed == false) {
            return (
                <View key={this.props.keyval} style={styles.note}>
                    <Text style={styles.noteText}>{this.props.val.date}</Text>
                    <Text style={styles.noteText}>{this.props.val.note}</Text>
                    <TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteDelete}>
                        <Text style={styles.noteDeleteText}>I've done this !</Text>
                    </TouchableOpacity>
                </View>
            );
        } else {
            return (
                <View key={this.props.keyval} style={styles.note}>
                    <Text style={styles.noteText}>{this.props.val.date}</Text>
                    <Text style={styles.completedTask}>{this.props.val.note}</Text>
                    <TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteDelete}>
                        <Text style={styles.noteDeleteText}>Delete this !</Text>
                    </TouchableOpacity>
                </View>
            );
        }

    }
}

const styles = StyleSheet.create({
    note: {
        position: 'relative',
        padding: 20,
        paddingRight: 100,
        borderBottomWidth: 2,
        borderBottomColor: '#ededed',
    },
    noteText: {
        paddingLeft: 20,
        borderLeftWidth: 5,
        borderLeftColor: '#e9000e',
    },
    noteDelete: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e9000e',
        paddingLeft: 10,
        paddingRight: 10,
        top: 10,
        bottom: 10,
        right: 10,
    },
    noteDeleteText: {
        color: 'white',
    },
    completedTask : {
        paddingLeft: 20,
        borderLeftWidth: 5,
        borderLeftColor: '#e9000e',
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid'
    }
});﻿