
import React from 'react';
import { Text, View } from 'react-native';



const Card = (props) => {
    const {height, bgColor, title} = props
    const styles = {
        mainContainer: {
            height,
            backgroundColor: bgColor,
            margin: 10,
            
        }
    }


    return (
        <View
        style = {styles.mainContainer} >
            <Text>
                {title}
            </Text>
        </View>
    )
}



export default Card;