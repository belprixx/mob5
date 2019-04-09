import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ScrollView,
    ImageBackground,
    WebView,
    FlatList
} from 'react-native';
import MyWebView from 'react-native-webview-autoheight';
import {  Button, Card, Divider } from 'react-native-elements';
import HTML from 'react-native-render-html';

import Article from './src/Article';


//const customStyle = "<style>* {max-width: 100%;} body {font-family: sans-serif;} h1 {color: red;}</style>";
//const htmlContent = "<h1>This is title</h1><p>Throw your entire HTML here</p>";


let signH ='';
let htmlContent;

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
            <ScrollView contentContainerStyle={styles.container}>
                <Card style={styles.boxes} >
                    <Text style={styles.welcome}>{this.state.city}</Text>
                    <Text style={styles.welcome}>Temperature = {this.state.temperature} °C</Text>
                    <Text style={styles.welcome}>Condition = {this.state.weather}</Text>
                </Card>
                <Card style={styles.boxes} >
                    <Text>Horoscope</Text>
                    <HTML html={htmlContent} />
                </Card>


                <FlatList
                    style={styles.listNews}
                    data={this.state.articles}
                    renderItem={({ item }) => <Article article={item} />}
                    keyExtractor={item => item.url}
                />


            </ScrollView>


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
                console.log(responseJson.dailyhoroscope);
                this.setState({
                    dailyhoroscope: responseJson.dailyhoroscope[signH]
                });
                htmlContent = `<div>` + responseJson.dailyhoroscope[signH] + `</div>`;
                console.log(htmlContent);
            });
    }


    fetchNews(){

        var url = 'https://newsapi.org/v2/top-headlines?' +
            'country=fr&' +
            'apiKey=3068346aa29c4bc5af886f4f064ec22a';
        var req = new Request(url);
        fetch(req)
            .then(response => response.json())
            .then(responseJson => {
                console.log(responseJson);
                console.log(responseJson.articles);
                this.setState({
                    articles: responseJson.articles
                });
            });

    }






    /*fetchNews(){
        var url = 'https://newsapi.org/v2/top-headlines?' +
            'country=fr&' +
            'apiKey=3068346aa29c4bc5af886f4f064ec22a';
        var req = new Request(url);
        fetch(req)
            .then(response => response.json())
            .then(responseJson => {
                console.log(responseJson);
                console.log(responseJson.articles);
                this.setState({
                    articles: responseJson.articles[0].title + ' ' + responseJson.articles[0].content
                });
            });
    }*/
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
        flexDirection: 'column',
        alignItems: 'stretch',
        marginTop: 25,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    htmlHorscope: {
        backgroundColor: 'lightgray',
        borderRadius : 20,
        margin: 1,
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
    },
    boxes: {
        height: 200,
        backgroundColor: '#ffffff',
        borderRadius : 20,
        margin: 1,
    },
    listNews:{
        marginTop:10,
    }
});

