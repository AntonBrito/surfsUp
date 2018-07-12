import React, { Component } from 'react';
import { Text, View, Button} from 'react-native';


class LoadingScreen extends Component {
    static navigationOption = {
        title : 'Loadingcreen',
    }

    render() {

       return(
        <View>
            <Button
                title="GO to homeScreen"
                onPress={() => {
                    this.props.navigation.navigate('Home')
                }}
             >

            </Button>
            <Text>
                LoadingScreen
            </Text>
        </View>
       )
   }
};

export default LoadingScreen;