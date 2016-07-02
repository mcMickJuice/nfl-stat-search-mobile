import React, {PropTypes} from 'react'
import {View, Text,StyleSheet} from 'react-native'
import PlayerResultItem from './PlayerResultItem'
import SearchResultsPlaceholder from './SearchResultsPlaceholder'


const SearchResults = ({results, onSelect}) => {
    const resultElements = results.map(r => {
        return <PlayerResultItem key={r.playerId} 
        result={r} 
        onPress={() => onSelect(result.playerId)} />
    });

    const resultToShow = resultElements.length > 0 
    ? resultElements
    : <SearchResultsPlaceholder />

    return (<View>
        {resultToShow}
    </View>)
}

SearchResults.propTypes = {
    results: PropTypes.arrayOf(PropTypes.shape({
        playerId: PropTypes.number.isRequired,
        playerName: PropTypes.string.isRequired
    })).isRequired,
    onSelect: PropTypes.func.isRequired
}

export default SearchResults