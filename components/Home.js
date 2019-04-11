<<<<<<< HEAD
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ImageBackground
} from 'react-native';


let signH ='';

export default class Home extends React.Component {


    constructor(props){
        super(props);
        this.state = {
            city: "",
            weather:"",
            temperature:"",
            backgroundImage: require('./src/background.png'),
            dailyhoroscope:"",
            articles:"",
        }
    }

    componentDidMount(){
        this.fetchCurrentLocationThenRequestWeatherData();
        this.fetchAllHoroscope();
        this.fetchNews();
    }



    render() {
        return (
            <View style={styles.container}>
                <View style={styles.box} >
                    <Text style={styles.welcome}>Ville = {this.state.city}</Text>
                    <Text style={styles.welcome}>Temperature = {this.state.temperature} °C</Text>
                    <Text style={styles.welcome}>Condition = {this.state.weather}</Text>
                </View>
                <View style={styles.box} >
                    <Text style={styles.welcome}>Horoscope = {this.state.dailyhoroscope}</Text>
                </View>
                <View style={styles.box} >
                    <Text style={styles.welcome}>Actualités = {this.state.articles}</Text>
                </View>
=======
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
>>>>>>> up
            </View>
        );
    }


    fetchCurrentLocationThenRequestWeatherData() {
        navigator.geolocation.getCurrentPosition(
            currentPosition => {
                console.log(currentPosition);
                let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${currentPosition.coords.latitude}&lon=${currentPosition.coords.longitude}&units=metric&appid=8141258b2a3700a00bf80c9102f7bf20`

                fetch(apiUrl)
                    .then(response => response.json())
                    .then(responseJson => {
                        console.log(responseJson);

                        this.setState({
                            city: responseJson.name,
                            weather: responseJson.weather[0].description,
                            temperature: responseJson.main.temp
                        });
                    });
            },
            error => {
                console.log(error);
            },
            { timeout: 20000, maximumAge: 1000 }
        );
    }


    fetchAllHoroscope() {

        signH = 'Taurus';
        let apiUrlHoroscope = "https://www.horoscopes-and-astrology.com/json";
        fetch(apiUrlHoroscope)
            .then(response => response.json())
            .then(responseJson => {
                console.log(responseJson);
                console.log(responseJson.dailyhoroscope)
                this.setState({
                    dailyhoroscope: responseJson.dailyhoroscope[signH]
                });
            });
    }

    fetchNews(){
        var url = 'https://newsapi.org/v2/top-headlines?' +
            'country=fr&' +
            'apiKey=3068346aa29c4bc5af886f4f064ec22a';
        var req = new Request(url);
        fetch(req)
            /*.then(function(response) {
                console.log(response.json());
            })*/
            .then(response => response.json())
            .then(responseJson => {
                console.log(responseJson);
                console.log(responseJson.articles);
                this.setState({
                    articles: responseJson.articles[0].title + ' ' + responseJson.articles[0].content
                });
            });
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
        flexDirection: 'column',
        alignItems: 'stretch',
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
    box: {
        height: 200,
        backgroundColor: 'lightgray',
        borderRadius : 20,
        margin: 1,
    }
});

