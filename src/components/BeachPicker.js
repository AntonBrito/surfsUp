import React, { Component } from "react";
import { Picker } from "react-native";

class BeachPicker extends Component {
  state = {
    beach: ""
  };

  render() {
    return (
      <Picker
        selectedValue={this.state.beach}
        style={{ height: 400, width: 300 }}
        onValueChange={(itemValue, itemIndex) =>
          this.setState({ beach: itemValue })
        }
      >
        <Picker.Item
          // style={styles.beachPicker}
          label="SecondBeach"
          value="sb"
        />
        <Picker.Item label="Narragansett" value="nr" />
        <Picker.Item label="Ruggles" value="sb" />
        <Picker.Item label="PointJudit" value="nr" />
        <Picker.Item label="BlockIsland" value="sb" />
      </Picker>
    );
  }
}

export default BeachPicker;
