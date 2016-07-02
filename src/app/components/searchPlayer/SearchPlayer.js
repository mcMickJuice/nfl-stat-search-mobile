import React, {Component, PropTypes} from 'react'
import {View, StyleSheet, Text, TextInput, Dimensions} from 'react-native'
import Button from 'apsl-react-native-button'

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: { flexDirection: 'row' },
    input: { width: width * 0.8 },
    button: { width: width * 0.18 }
})

class SearchPlayer extends Component {
    constructor() {
        super()

        this.onTextChange = this.onTextChange.bind(this);
        this.onSearchSubmit = this.onSearchSubmit.bind(this);

        this.state = {
            searchText: ''
        }
    }

    static propTypes = {
        onSearchSubmit: PropTypes.func.isRequired,
    }

    onTextChange(text) {
        this.setState({
            searchText: text
        })
    }

    onSearchSubmit() {
        const {searchText} = this.state;
        this.props.onSearchSubmit(searchText);
    }

    render() {
        const {searchText} = this.state;
        const isSearchDisabled = searchText.length <= 3;

        return (<View style={styles.container}>
            <TextInput style={styles.input} onChangeText={this.onTextChange} value={searchText}/>
            <Button style={styles.button}
                onPress={this.onSearchSubmit}
                isDisabled={isSearchDisabled}
                >
                Search
            </Button>
        </View>)
    }
}

export default SearchPlayer