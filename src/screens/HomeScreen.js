import React, { Component } from 'react';
import { Text, View, Button, Picker } from 'react-native';

import Card from '../components/Card';
import BeachPicker from '../components/BeachPicker';



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
                bgColor='#FFFFFF'
                >
               
               <BeachPicker/>

                </Card> 

                <Button
                    className="btn"
                    title="Search Beach"
                    color="#FFFFFF"
                    onPress={() => {
                        this.props.navigation.navigate('Beachscreen')
                    }}
                >
                </Button>
            
                <Text>
                    Home
                </Text>
                
            </View>
       )
   }
};

export default Homecreen;