import React, { Component } from 'react';
import {  Picker } from 'react-native';

class BeachPicker extends Component {
    state={
        beach: '',
    }

    
    render() {
        return(

            <Picker
            selectedValue={this.state.beach}
            style={{ height: 50, width: 100 }}
            onValueChange={(itemValue, itemIndex) => this.setState({beach: itemValue})}>
        <Picker.Item label="SecondBeach" value="sb" />
        <Picker.Item label="Narragansett" value="nr" />
        </Picker>
            
        )
    }
}

export default BeachPicker;