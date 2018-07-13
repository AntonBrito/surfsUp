import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

import Card from '../components/Card';

class Homecreen extends Component {
    static navigationOption = {
        title : 'Homecreen',
    }
    render() {

        const styles = {
            mainContainer : {
                flex: 1,
                backgroundColor: '#00c0ff',
            }
        }
       return(
            <View style={styles.mainContainer}>
                <Card 
                title="Beaches"
                height={550}
                bgColor='#FFFFFF'/>

                <Button
                    className="btn"
                    title="Search Beach"
                    onPress={() => {
                        this.props.navigation.navigate('Beaches')
                    }}
                >
                </Button>
            
                <Text>
                    HomeScreen
                </Text>
            </View>
       )
   }
};

export default Homecreen;