import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Agenda} from  'react-native-calendars';

export default class Calendar extends React.Component {

    render() {
        return (
           <Agenda/>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});