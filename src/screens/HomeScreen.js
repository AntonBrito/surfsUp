import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Homecreen extends Component {
    static navigationOption = {
        title : 'Homecreen',
    }
    render() {
       return(
        <View>
            <Text>
                HomeScreen
            </Text>
        </View>
       )
   }
};

export default Homecreen;