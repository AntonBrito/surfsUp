import React, { Component } from "react";
import { Text, View, Button } from "react-native";

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
    allData: ""
  };

  componentWillMount() {
    axios
      .get("http://magicseaweed.com/api/" + APIKEY + "/forecast/?spot_id=846")
      .then(response =>
        this.setState({
          temperature: response.data[0].condition.temperature,
          wind: response.data[0].wind,
          swell: response.data[0].swell,
          allData: response.data
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
      }
    };
    return (
      <View style={styles.mainContainer}>
        <Card height={20} bgColor="#FFFFFF">
          <Text>BeachDetail </Text>
        </Card>
        <View style={styles.subContainer}>
          <Card
            flexShrink="0"
            flexBasis="40%"
            flex="1"
            height={100}
            bgColor="#FFFFFF"
          >
            <Text> {this.state.swell.minBreakingHeight}</Text>
            <Text> {this.state.swell.maxBreakingHeight}</Text>
          </Card>
          <Card
            flexShrink="0"
            flexBasis="40%"
            flex="1"
            height={100}
            bgColor="#FFFFFF"
          >
            <Text>{this.state.temperature}</Text>
          </Card>
          <Card
            flexShrink="0"
            flexBasis="40%"
            flex="1"
            height={100}
            bgColor="#FFFFFF"
          >
            <Text>{this.state.wind.compassDirection}</Text>
            <Text>{this.state.wind.speed}</Text>
          </Card>
        </View>
        <Button
          title="Home"
          onPress={() => {
            this.props.navigation.navigate("Home");
          }}
        />{" "}
      </View>
    );
  }
}

export default BeachScreen;
