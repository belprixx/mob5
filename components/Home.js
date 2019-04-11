import React from 'react';
import {StyleSheet, Button, View, Text} from 'react-native';
import firebase from 'firebase';

export default class Home extends React.Component {

    componentDidMount() {
        let config = {
            apiKey: "AIzaSyA9KPdzf2uOpM3pAWcN9FUi-ZI4dAAjGAQ",
            authDomain: "mob5-etna.firebaseapp.com",
            databaseURL: "https://mob5-etna.firebaseio.com",
            projectId: "mob5-etna",
            storageBucket: "mob5-etna.appspot.com",
            messagingSenderId: "425996438729"
        };
        firebase.initializeApp(config);
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true })
            } else {
                this.setState({ loggedIn: false })
            }
        })
    }


    renderComponent() {
        if (this.state.loggedIn) {
            return (<Button
                title="Sign out"
                onPress={() => firebase.auth().signOut()} />)
        } else {
            return (
                <Text>Coucou c'est la home</Text>
            )
        }
    }
    render() {
        return (
            <View>
                <Header title='Authenticator' />
                {this.renderComponent()}
            </View>
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