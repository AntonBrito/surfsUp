import React, { Component } from "react";
import { Text, Image, View, Button } from "react-native";

import APIKEY from "../../keys";

import axios from "axios";

import Card from "../components/Card";

class BeachScreen extends Component {
  static navigationOption = {
    title: " Beachscreen"
  };

  state = {
    temperature: "",
    wind: "",
    swell: "",
    charts: "",
    allData: "",
    response: ""
  };

  componentWillMount() {
    axios
      .get(
        "http://magicseaweed.com/api/e2dce743c26c923c9291b06fab8561f1/forecast/?spot_id=846"
      )
      .then(response =>
        this.setState({
          temperature: response.data[0].condition.temperature,
          unit: response.data[0].condition.unit,
          weather: response.data[0].condition.weather,
          wind: response.data[0].wind,
          swell: response.data[0].swell,
          allData: response.data,
          charts: response.data[0].charts.swell
        })
      );
  }
  render() {
    const styles = {
      mainContainer: {
        flex: 1,
        backgroundColor: "#00c0ff"
      },
      subContainer: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap"
      },
      beachDetail: {
        fontSize: 30,
        justifyContent: "center"
      },
      chartsContainer: {
        height: 25
      },
      beachDetailSwellMax: {
        fontSize: 30
      },
      beachDetailSwellMin: {
        fontSize: 25
      },
      beachDetailTemp: {
        fontSize: 20
      },
      beachDetailTemperature: {
        fontSize: 15
      },
      beachDetailWeather: {
        fontSize: 30
      },
      beachDetailWind: {
        fontSize: 20
      },
      beachDetailSpeed: {
        fontSize: 20
      },
      beachDetailWindSpeed: {
        fontSize: 25
      }
    };
    return (
      <View style={styles.mainContainer}>
        <Card height={30} bgColor="#FFFFFF" jusrtify-content="space-around">
          <Text style={styles.beachDetail}>Narraganset</Text>
        </Card>
        <View style={styles.subContainer}>
          <Card
            flexShrink="0"
            flexBasis="40%"
            // flex="1"
            height={100}
            bgColor="#FFFFFF"
          >
            <Text>Swell</Text>
            <Text style={styles.beachDetailSwellMax}>
              {this.state.swell.maxBreakingHeight}
              {this.state.swell.unit}
              {/* <View
                style={{
                  width: 20,
                  height: 20,
                  url: "https://hist-2.msw.ms/wave/750/20-1532498400-1.gif"
                }}
              /> */}

              {/* {this.state.charts.swell{
                url:
                "https://hist-2.msw.ms/wave/750/20-1532498400-1.gif",
              }} */}
              {/* <Image
                src={{
                  url:
                    "http://cdn.magicseaweed.com/wave/750/1-1366902000-1.gif",
                  width: 30,
                  height: 30
                }}
              /> */}
            </Text>

            <Text style={styles.beachDetailSwellMin}>
              {this.state.swell.minBreakingHeight}
              {this.state.swell.unit}
            </Text>
          </Card>
          <Card
            flexShrink="0"
            flexBasis="40%"
            // flex="1"
            height={100}
            bgColor="#FFFFFF"
          >
            <Text style={styles.beachDetailTemperature}>Temp</Text>
            <Text style={styles.beachDetailTemp}>{this.state.temperature}</Text>
            <Text />
          </Card>
          <Card
            flexShrink="0"
            flexBasis="40%"
            // flex="1"
            height={100}
            bgColor="#FFFFFF"
          >
            <Text style={styles.beachDetailWind}>
              Wind - {this.state.wind.compassDirection}
            </Text>
            <Text style={styles.beachDetailWindSpeed}>
              {this.state.wind.speed}-{this.state.wind.unit}
            </Text>
          </Card>
          <Card
            flexShrink="0"
            flexBasis="40%"
            // flex="1"
            height={100}
            bgColor="#FFFFFF"
          >
            <Text style={styles.beachDetailWeather}>{this.state.weather}</Text>
            <Image
              source={{
                uri: "http://cdnimages.magicseaweed.com/30x30/34.png",

                width: 40,
                height: 40
              }}
            />
          </Card>
          {/* <Card style={styles.chartsContainer}>{this.state.chart.swell}</Card> */}
        </View>
        <Button
          title="Home"
          onPress={() => {
            this.props.navigation.navigate("Home");
          }}
        />
      </View>
    );
  }
}

export default BeachScreen;
