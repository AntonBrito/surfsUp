import React, { Component } from "react";
import { Text, View, Button, Picker } from "react-native";

import Card from "../components/Card";
import BeachPicker from "../components/BeachPicker";
import axios from "axios";
import APIKEY from "../../keys";
import BeachScreen from "./BeachScreen";

class Homecreen extends Component {
  static navigationOption = {
    title: "Homecreen"
  };
  state = {
    temperature: "",
    pressure: "",
    response: ""
  };

  componentWillMount() {
    axios
      .get("http://magicseaweed.com/api/" + APIKEY + "/forecast/?spot_id=846")
      .then(response =>
        this.setState({
          temperature: response.data[0].condition.temperature,
          pressure: response.data[0].condition.pressure,
          response: response.data
        })
      );
  }

  renderBeach() {
    return this.state.beachs.map(beach => (
      <BeachScreen key={beach.title} beach={beach} />
    ));
  }

  render() {
    const styles = {
      mainContainer: {
        flex: 1,
        backgroundColor: "#00c0ff"
      }
    };
    return (
      <View style={styles.mainContainer}>
        <Card title="Beaches" height={550} bgColor="#FFFFFF">
          <BeachPicker />
          <Text> {this.state.temperature} </Text>
        </Card>

        <Button
          className="btn"
          title="Search Beach"
          color="#FFFFFF"
          onPress={() => {
            {
              this.props.navigation.navigate("Beachscreen");
            }
          }}
        />

        <Text>Home </Text>
      </View>
    );
  }
}

export default Homecreen;
