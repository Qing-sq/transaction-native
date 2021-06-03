import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const bootScreen = () => {
    return (
        <View>
            <Text style={styles.text}>开机屏幕</Text>
        </View>
    )
}

export default bootScreen

const styles = StyleSheet.create({
    text:{
        position:'absolute',
        left:'50%',
        top:'50%',
    }
})
