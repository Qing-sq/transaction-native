import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableHighlight, TouchableOpacity, Image,StatusBar } from 'react-native'



import px2em from "../utils/px";
const Header = () => {
    return (
        <View style={{ paddingHorizontal: px2em(30), backgroundColor: '#fff', paddingVertical: px2em(10) }}>
            <TextInput  style={{ backgroundColor: '#f8f8f8', borderRadius: px2em(60), paddingVertical: px2em(8), paddingHorizontal: px2em(40) }} placeholder="热门二手好物" />
        </View>
    )
}
const tabsShop = () => {
    const list = [
        {
            name: '热门推荐',
            children: [
                {
                    name: '手机',
                    img: require('../static/01.png')
                },
                {
                    name: '笔记本电脑',
                    img: require('../static/02.png')
                },
                {
                    name: '平板',
                    img: require('../static/03.png')
                },
                {
                    name: '台式机',
                    img: require('../static/04.png')
                },
                {
                    name: '手表',
                    img: require('../static/05.png')
                },
                {
                    name: '箱包',
                    img: require('../static/06.png')
                },
                {
                    name: '台式机',
                    img: require('../static/04.png')
                },
                {
                    name: '手表',
                    img: require('../static/05.png')
                },
                {
                    name: '箱包',
                    img: require('../static/06.png')
                },
                {
                    name: '台式机',
                    img: require('../static/04.png')
                },
                {
                    name: '手表',
                    img: require('../static/05.png')
                },
                {
                    name: '箱包',
                    img: require('../static/06.png')
                },
                {
                    name: '台式机',
                    img: require('../static/04.png')
                },
                {
                    name: '手表',
                    img: require('../static/05.png')
                },
                {
                    name: '箱包',
                    img: require('../static/06.png')
                },
                {
                    name: '台式机',
                    img: require('../static/04.png')
                },
                {
                    name: '手表',
                    img: require('../static/05.png')
                },
                {
                    name: '箱包',
                    img: require('../static/06.png')
                },
                {
                    name: '台式机',
                    img: require('../static/04.png')
                },
                {
                    name: '手表',
                    img: require('../static/05.png')
                },
                {
                    name: '箱包',
                    img: require('../static/06.png')
                },
                {
                    name: '台式机',
                    img: require('../static/04.png')
                },
                {
                    name: '手表',
                    img: require('../static/05.png')
                },
                {
                    name: '箱包',
                    img: require('../static/06.png')
                },
                {
                    name: '台式机',
                    img: require('../static/04.png')
                },
                {
                    name: '手表',
                    img: require('../static/05.png')
                },
                {
                    name: '箱包',
                    img: require('../static/06.png')
                },
                {
                    name: '台式机',
                    img: require('../static/04.png')
                },
                {
                    name: '手表',
                    img: require('../static/05.png')
                },
                {
                    name: '箱包',
                    img: require('../static/06.png')
                },
                {
                    name: '台式机',
                    img: require('../static/04.png')
                },
                {
                    name: '手表',
                    img: require('../static/05.png')
                },
                {
                    name: '箱包',
                    img: require('../static/06.png')
                },

            ]
        },
        {
            name: '手机数码',
            children: [
                {
                    name: '手机',
                    img: require('../static/01.png')
                },
                {
                    name: '笔记本电脑',
                    img: require('../static/02.png')
                },
                {
                    name: '平板',
                    img: require('../static/03.png')
                },
                {
                    name: '台式机',
                    img: require('../static/04.png')
                },
                {
                    name: '手表',
                    img: require('../static/05.png')
                },
                {
                    name: '箱包',
                    img: require('../static/06.png')
                },
            ]
        }, {
            name: '电脑办公',
            children: [
                {
                    name: '手机',
                    img: require('../static/01.png')
                },
                {
                    name: '笔记本电脑',
                    img: require('../static/02.png')
                },
                {
                    name: '平板',
                    img: require('../static/03.png')
                },
                {
                    name: '台式机',
                    img: require('../static/04.png')
                },
                {
                    name: '手表',
                    img: require('../static/05.png')
                },
                {
                    name: '箱包',
                    img: require('../static/06.png')
                },
            ]
        }, {
            name: '摄影摄像',
            children: [
                {
                    name: '手机',
                    img: require('../static/01.png')
                },
                {
                    name: '笔记本电脑',
                    img: require('../static/02.png')
                },
                {
                    name: '平板',
                    img: require('../static/03.png')
                },
                {
                    name: '台式机',
                    img: require('../static/04.png')
                },
                {
                    name: '手表',
                    img: require('../static/05.png')
                },
                {
                    name: '箱包',
                    img: require('../static/06.png')
                },
            ]
        }, {
            name: '奢品大牌',
            children: [
                {
                    name: '手机',
                    img: require('../static/01.png')
                },
                {
                    name: '笔记本电脑',
                    img: require('../static/02.png')
                },
                {
                    name: '平板',
                    img: require('../static/03.png')
                },
                {
                    name: '台式机',
                    img: require('../static/04.png')
                },
                {
                    name: '手表',
                    img: require('../static/05.png')
                },
                {
                    name: '箱包',
                    img: require('../static/06.png')
                },
            ]
        }, {
            name: '母婴用品',
            children: [
                {
                    name: '手机',
                    img: require('../static/01.png')
                },
                {
                    name: '笔记本电脑',
                    img: require('../static/02.png')
                },
                {
                    name: '平板',
                    img: require('../static/03.png')
                },
                {
                    name: '台式机',
                    img: require('../static/04.png')
                },
                {
                    name: '手表',
                    img: require('../static/05.png')
                },
                {
                    name: '箱包',
                    img: require('../static/06.png')
                },
            ]
        }, {
            name: '服装配饰',
            children: [
                {
                    name: '手机',
                    img: require('../static/01.png')
                },
                {
                    name: '笔记本电脑',
                    img: require('../static/02.png')
                },
                {
                    name: '平板',
                    img: require('../static/03.png')
                },
                {
                    name: '台式机',
                    img: require('../static/04.png')
                },
                {
                    name: '手表',
                    img: require('../static/05.png')
                },
                {
                    name: '箱包',
                    img: require('../static/06.png')
                },
            ]
        }, {
            name: '鞋靴',
            children: [
                {
                    name: '手机',
                    img: require('../static/01.png')
                },
                {
                    name: '笔记本电脑',
                    img: require('../static/02.png')
                },
                {
                    name: '平板',
                    img: require('../static/03.png')
                },
                {
                    name: '台式机',
                    img: require('../static/04.png')
                },
                {
                    name: '手表',
                    img: require('../static/05.png')
                },
                {
                    name: '箱包',
                    img: require('../static/06.png')
                },
            ]
        }, {
            name: '户外用品',
            children: [
                {
                    name: '手机',
                    img: require('../static/01.png')
                },
                {
                    name: '笔记本电脑',
                    img: require('../static/02.png')
                },
                {
                    name: '平板',
                    img: require('../static/03.png')
                },
                {
                    name: '台式机',
                    img: require('../static/04.png')
                },
                {
                    name: '手表',
                    img: require('../static/05.png')
                },
                {
                    name: '箱包',
                    img: require('../static/06.png')
                },
            ]
        },
        {
            name: '居家生活',
            children: [
                {
                    name: '手机',
                    img: require('../static/01.png')
                },
                {
                    name: '笔记本电脑',
                    img: require('../static/02.png')
                },
                {
                    name: '平板',
                    img: require('../static/03.png')
                },
                {
                    name: '台式机',
                    img: require('../static/04.png')
                },
                {
                    name: '手表',
                    img: require('../static/05.png')
                },
                {
                    name: '箱包',
                    img: require('../static/06.png')
                },
            ]
        }, {
            name: '居家生活',
            children: [
                {
                    name: '手机',
                    img: require('../static/01.png')
                },
                {
                    name: '笔记本电脑',
                    img: require('../static/02.png')
                },
                {
                    name: '平板',
                    img: require('../static/03.png')
                },
                {
                    name: '台式机',
                    img: require('../static/04.png')
                },
                {
                    name: '手表',
                    img: require('../static/05.png')
                },
                {
                    name: '箱包',
                    img: require('../static/06.png')
                },
            ]
        }, {
            name: '居家生活',
            children: [
                {
                    name: '手机',
                    img: require('../static/01.png')
                },
                {
                    name: '笔记本电脑',
                    img: require('../static/02.png')
                },
                {
                    name: '平板',
                    img: require('../static/03.png')
                },
                {
                    name: '台式机',
                    img: require('../static/04.png')
                },
                {
                    name: '手表',
                    img: require('../static/05.png')
                },
                {
                    name: '箱包',
                    img: require('../static/06.png')
                },
            ]
        }, {
            name: '居家生活',
            children: [
                {
                    name: '手机',
                    img: require('../static/01.png')
                },
                {
                    name: '笔记本电脑',
                    img: require('../static/02.png')
                },
                {
                    name: '平板',
                    img: require('../static/03.png')
                },
                {
                    name: '台式机',
                    img: require('../static/04.png')
                },
                {
                    name: '手表',
                    img: require('../static/05.png')
                },
                {
                    name: '箱包',
                    img: require('../static/06.png')
                },
            ]
        }, {
            name: '居家生活',
            children: [
                {
                    name: '手机',
                    img: require('../static/01.png')
                },
                {
                    name: '笔记本电脑',
                    img: require('../static/02.png')
                },
                {
                    name: '平板',
                    img: require('../static/03.png')
                },
                {
                    name: '台式机',
                    img: require('../static/04.png')
                },
                {
                    name: '手表',
                    img: require('../static/05.png')
                },
                {
                    name: '箱包',
                    img: require('../static/06.png')
                },
            ]
        }

    ]
    const [active, setAcitive] = useState(0)

    return (
        <View>
            {/* <StatusBar backgroundColor="#fff" barStyle="dark-content" /> */}
            <Header />
            <View style={styles.cateSwapper}>
                <View style={styles.cateLEft}>
                    <ScrollView style={{ marginBottom: px2em(200) }} showsVerticalScrollIndicator={false}>
                        {
                            list.map((item, index) => <TouchableOpacity key={index} style={[active === index ? styles.active : null, { paddingHorizontal: px2em(50), paddingVertical: px2em(35), textAlign: 'center' }]} onPress={() => setAcitive(index)} >
                                <Text style={active === index ? { color: 'rgb(0,186,115)', fontWeight: 'bold', textAlign: 'center', fontSize: px2em(26) } : { color: '#333', textAlign: 'center', fontSize: px2em(26) }}>{item.name}</Text>
                            </TouchableOpacity>)
                        }
                    </ScrollView>
                </View>

                <ScrollView showsVerticalScrollIndicator={false} style={{ marginBottom: px2em(200) }}>
                    <View style={styles.cateRight}>
                        {
                            list[active].children.map((item, index) => <View style={styles.cateItemRight} key={index}>
                                <Image style={{ width: px2em(80), height: px2em(80), alignSelf: 'center' }} source={item.img} />
                                <Text style={{ alignSelf: 'center', marginTop: px2em(30), marginBottom: px2em(30) }}>{item.name}</Text>
                            </View>)
                        }
                    </View>
                </ScrollView>
            </View>


        </View>
    )
}

export default tabsShop

const styles = StyleSheet.create({
    cateSwapper: {
        flexDirection: 'row',

    },
    cateLEft: {
        width: px2em(240),

    },
    cateRight: {
        backgroundColor: '#fff',
        flex: 1,
        padding: px2em(40),
        flexDirection: 'row',
        flexWrap: 'wrap',

    },
    cateItemRight: {
        width: '33.3%'
    },
    active: {
        backgroundColor: '#fff',
    }

})
