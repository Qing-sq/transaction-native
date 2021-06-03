import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

const commodity = (e, props) => {
  
    const { item } = e
    const { navigation } = props && props.navigation ? props : e
    
    const jump = () => {
        navigation.navigate('shopDetails', item)
    }

    return (

        <View>
            <TouchableOpacity onPress={jump} style={styles.selectionSwapper}>
                <View style={{ backgroundColor: '#fff', }}>
                    <Image style={{ width: '100%', height: px2em(200), borderRadius: px2em(10) }} source={{ uri: item.img }} />
                    <View style={{ paddingHorizontal: px2em(10), paddingVertical: px2em(20) }}>
                        <Text style={{ lineHeight: px2em(30) }}>{item.title}</Text>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'flex-end'
                        }}><Text style={{ fontSize: px2em(20), color: 'rgb(224,59,70)' }}>￥</Text><Text style={{ fontSize: px2em(28), color: 'rgb(224,59,70)' }}>{item.price}</Text></View>
                        <View style={{ flexDirection: 'row', marginTop: px2em(10) }}><Text style={[styles.typeColor, { color: 'rgb(224,59,70)', marginRight: px2em(10) }]}>{item.type}</Text><Text style={styles.evalClass}>{item.eval}万条评价</Text><Text style={styles.evalClass}>{item.evalGrid}好评</Text></View>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    selectionSwapper: {
        padding: px2em(10),
        width: px2em(375)

    },
    typeColor: {
        borderColor: "rgb(224,59,70)",
        borderWidth: 1,
        borderRadius: px2em(10),
        fontSize: px2em(20),
        paddingHorizontal: px2em(6),
    },
    evalClass: {
        color: '#999999',
        fontSize: px2em(20),
        marginRight: px2em(10)
    }
})

export default commodity
