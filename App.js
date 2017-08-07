import React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';
import { Actions, Router, Scene } from 'react-native-router-flux';
import { Provider, connect } from 'react-redux';

import configureStore from './store/configureStore';
import Home from './Home';
import Card from './Card';

const ConnectedRouter = connect()(Router);
const store = configureStore();

const Scenes = (
    <Scene key="root">
        <Scene key="home" component={Home} title="Home Title" />
        <Scene key="card" component={Card} />
    </Scene>
);

export default class HelloWorldApp extends React.Component {
    render() {
        const result =
            <Provider store={store}>
                <ConnectedRouter>{Scenes}</ConnectedRouter>
            </Provider>
        return result;
    }
}
