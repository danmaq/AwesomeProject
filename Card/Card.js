import React from 'react';
import { View, Text } from 'react-native';

export default props => {
    const {scene} = props;
    const result =
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>You're currently on {scene && scene.sceneKey}.</Text>
        </View>;
    return result;
}