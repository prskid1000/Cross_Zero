import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert, Button } from 'react-native';

const styles = StyleSheet.create({
    head:
        {
            color:'green',
            fontSize: 50,
            fontWeight: 'bold',
        }
});

class welcome extends React.Component
{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <view style={{position: "absolute",left:200,bottom:150}}>
                <Text style={styles.head}>Welcome To My Game</Text>
                <View style={{padding:40}}/>
                <Button color="green" title='New Game' onPress={() => this.props.navigation.navigate('Game',{'play1':0,'play2':0,})}/>
                <View style={{padding:10}}/>
            </view>
        );
    }
}

export default welcome;