import React, {PropTypes, Component} from 'react'
import {View, StyleSheet} from 'react-native'
import SearchResults from './SearchResults'
import {searchPlayer} from '../../data/statWebService'
import SearchPlayerElement from './SearchPlayer'



class SearchPlayer extends Component {
    constructor() {
        super()

        this.onSearchSubmit = this.onSearchSubmit.bind(this);

        this.state = {
            results: [],
            hasSearched: false
        }
    }

    onSearchSubmit(searchText) {
        searchPlayer({
            playerName: searchText
        })
            .then(results => {
                this.setState({
                    results,
                    hasSearched: true
                })
            })
            .catch(err => {
                console.warn(err)
            })
    }


    render() {
        const {results} = this.state;

        return (<View>
            <SearchPlayerElement onSearchSubmit={this.onSearchSubmit} />
            <SearchResults results={results} onSelect={id => console.warn('Search result clicked', id) }/>
        </View>)
    }
}

SearchPlayer.propTypes = {}

export default SearchPlayer