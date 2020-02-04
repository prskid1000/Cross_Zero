import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, Button } from 'react-native';
import { MaterialCommunityIcons }  from 'react-native-vector-icons'

const styles = StyleSheet.create({
    container: {
        flex: 2,
        flexDirection:'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    tile: {
        borderWidth: 1,
        width:100,
        height:100,
        borderColor:'green',
    },
    tileX: {
        position: 'relative',
        color: 'red',
        fontSize: 90,
        flex: 1,
        left:5,
        top:1.5,
    },
    tile0: {
        position: 'relative',
        color: 'green',
        fontSize: 81,
        flex: 1,
        left:8,
        top:5,
    },
});


class Game extends React.Component
{
    constructor(props){
        super(props);
        this.state={
            gameState:[
                [0,0,0],
                [0,0,0],
                [0,0,0]
            ],
            currentPlayer:1,
        }
        this.play1_score=0;
        this.play2_score=0;
    }

    componentDidMount(){
        this.initializeGame();
    }

    onNewGamePress=()=>
    {
        this.initializeGame();
    }
    initializeGame=()=>{
        this.setState({gameState:
                [
                    [0,0,0],
                    [0,0,0],
                    [0,0,0]
                ],
            currentPlayer:1,
        });
    }

    getWinner=()=>{

        const NUM_TILES=3;
        var arr=this.state.gameState;
        var sum;

        for(var i=0;i<NUM_TILES;i++)
        {
            sum=arr[i][0]+arr[i][1]+arr[i][2];
            if(sum==3){return 1;}
            else if(sum==3){return -1;}
        }

        for(var i=0;i<NUM_TILES;i++)
        {
            sum=arr[0][i]+arr[1][i]+arr[2][i];
            if(sum==3){return 1;}
            else if(sum==-3){return -1;}
        }

        sum=arr[0][0]+arr[1][1]+arr[2][2];
        if(sum==3){return 1;}
        else if(sum==-3){return -1;}

        sum=arr[2][0]+arr[1][1]+arr[0][2];
        if(sum==3){return 1;}
        else if(sum==-3){return -1;}

    }

    onTilePress=(row,col)=>{

        var value=this.state.gameState[row][col];
        if(value!=0){return;}

        var currentPlayer=this.state.currentPlayer
        var arr=this.state.gameState.slice();
        arr[row][col]=currentPlayer;
        this.setState({gameState:arr});

        var nextPlayer=(currentPlayer==1)?-1:1;
        this.setState({currentPlayer: nextPlayer});

        var winner=this.getWinner();
        if(winner==1){
            this.play1_score++;
            this.initializeGame();
        }else if(winner==-1){
            this.play2_score++;
            this.initializeGame();
        }

    }

    renderIcon=(row,col)=>{
        var value=this.state.gameState[row][col];
        switch(value)
        {
            case 1:return  <MaterialCommunityIcons name="close" style={styles.tileX}/>;
            case -1:return <MaterialCommunityIcons name="circle-outline" style={styles.tile0}/>;
            default:return <View/>
        }
    }

    render() {
        var play1 =  this.props.navigation.getParam('play1','0');
        var play2  = this.props.navigation.getParam('play2','0');
        return (
            <view style={{position: "absolute",left:400,top:100}}>
                <View style={styles.container}>
                    <TouchableOpacity onPress={()=>this.onTilePress(0,0)} style={styles.tile}>
                        {this.renderIcon(0,0)}
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={()=>this.onTilePress(0,1)} style={styles.tile}>
                        {this.renderIcon(0,1)}
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={()=>this.onTilePress(0,2)} style={styles.tile}>
                        {this.renderIcon(0,2)}
                    </TouchableOpacity>
                </View>
                <View style={styles.container}>
                    <TouchableOpacity  onPress={()=>this.onTilePress(1,0)} style={styles.tile}>
                        {this.renderIcon(1,0)}
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={()=>this.onTilePress(1,1)} style={styles.tile}>
                        {this.renderIcon(1,1)}
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={()=>this.onTilePress(1,2)} style={styles.tile}>
                        {this.renderIcon(1,2)}
                    </TouchableOpacity>
                </View>
                <View style={styles.container}>
                    <TouchableOpacity  onPress={()=>this.onTilePress(2,0)} style={styles.tile}>
                        {this.renderIcon(2,0)}
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={()=>this.onTilePress(2,1)} style={styles.tile}>
                        {this.renderIcon(2,1)}
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={()=>this.onTilePress(2,2)} style={styles.tile}>
                        {this.renderIcon(2,2)}
                    </TouchableOpacity>
                </View>
                <View style={{padding:10}}/>
                <Button color='green' title='Start Again' onPress={this.onNewGamePress}/>
                <View style={{padding:10}}/>
                <Button color='green' title='Calculate Score' onPress={() => this.props.navigation.navigate('Result',{'play1':this.play1_score,'play2':this.play2_score,})}/>
            </view>
        );
    }
}

export default Game