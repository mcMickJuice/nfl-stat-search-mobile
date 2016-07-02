import React, {PropTypes} from 'react'
import {View, StyleSheet, Text} from 'react-native'

const PlayerResultItem = ({result, onPress}) => {
    return <View key={result.playerId} onPress={onPress}>
            <Text>{result.playerName}</Text>
        </View>
}

PlayerResultItem.propTypes = {
    result: PropTypes.shape({
        playerId: PropTypes.number.isRequired,
        playerName: PropTypes.string.isRequired
    }).isRequired,
    onPress: PropTypes.func.isRequired
}

export default PlayerResultItem