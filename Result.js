import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert, Button } from 'react-native';

const styles = StyleSheet.create({
    head:
        {
            color:'green',
            fontSize: 50,
            fontWeight: 'bold',
            borderWidth:1,
            padding:10,
            borderColor:'green',
        }
});

class Result extends React.Component
{
    constructor(props){
        super(props);
    }

    render() {
        var play1 =  this.props.navigation.getParam('play1','0');
        var play2  = this.props.navigation.getParam('play2','0');
        return (
            <view style={{position: "absolute",left:300,bottom:200}}>
                <View><Text style={styles.head}>Player 1 Score: {play1}</Text></View>
                <View style={{padding:10}}/>
                <View><Text style={styles.head}>Player 2 Score: {play2}</Text></View>
                <View style={{padding:10}}/>
                <View style={{float:'left'}}>
                <Button color='green' title='Continue Playing' onPress={()=>this.props.navigation.navigate('Game',{'play1':play1,'play2':play2,})}/>
                </View>
                <view style={{float:'right'}}>
                <Button color='green' title='Return to Main Menu' onPress={() => this.props.navigation.navigate('Home')}/>
                </view>
            </view>
        );
    }
}

export default Result;