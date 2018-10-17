import React, { Component } from 'react'
import {Stylesheet, View, Text} from 'react-native'

export default class CadastroLembrete extends Component{
    render() {
        return (
            <View style={styles.container}>
                <Text>CadastroLembrete</Text>
            </View>
        )
    }

}

const styles = Stylesheet.create({
    container: {
        flex: 1
    }
})