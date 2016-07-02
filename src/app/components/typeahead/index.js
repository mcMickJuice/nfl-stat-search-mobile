import React, {Component, PropTypes} from 'react'
import {View, StyleSheet} from 'react-native'

class Typeahead extends Component {
    constructor(){
        super()
    }

    static propTypes = {
        limit: PropTypes.number,
        onSelect: PropTypes.func.isRequired
    }

    render(){
        return(<View>
            
        </View>)
    }
}

export default Typeahead