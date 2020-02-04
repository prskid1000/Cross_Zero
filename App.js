import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Game from "./Game";
import welcome from "./Home"
import Result from "./Result"

const RootStack = createStackNavigator(
    {
        Home: welcome,
        Game: Game,
        Result: Result,
    },
    {
        initialRouteName: 'Home',
    }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
    render() {
        return <AppContainer />;
    }
}