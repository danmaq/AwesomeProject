import React from 'react';
import { Text, View } from 'react-native';

export default props => {
    const { count, scene, incrementCount, decrementCount, incrementCountThunk, handleCard } =
        props;
    const result =
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontSize: 28 }}>You're currently on {scene && scene.sceneKey}.</Text>
            <Text style={{ fontSize: 28 }}>Count: {count}</Text>
            <Text style={{ fontSize: 28 }} onPress={() => incrementCount()}>Increment Count</Text>
            <Text style={{ fontSize: 28 }} onPress={() => incrementCountThunk()}>Increment Count Thunk</Text>
            <Text style={{ fontSize: 28 }} onPress={() => decrementCount()}>Decrement Count</Text>
            <Text style={{ fontSize: 28 }} onPress={() => handleCard()}>Push new card scene.</Text>
        </View>;
    return result;
};