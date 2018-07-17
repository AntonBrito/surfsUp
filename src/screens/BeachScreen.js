import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

import Card from '../components/Card';

class BeachScreen extends Component {
    static navigationOption = {
        title : ' Beachscreen',
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
            <Text>
                BeachDetail
            </Text>

             <Card 
                title="BeacheName"
                height={20}
                bgColor='#FFFFFF'
            />

             <Card 
                title="Swell"
                height={100}
                bgColor='#FFFFFF'
            />

             <Card 
                title="Weather"
                height={100}
                bgColor='#FFFFFF'
            />

             <Card 
                title="Wind"
                height={100}
                bgColor='#FFFFFF'
            />

            <Button
            title="Home"
            onPress={() => {
                this.props.navigation.navigate('Home')
            }}
            >
            </Button>
        </View>
       )
   }
};

export default BeachScreen;