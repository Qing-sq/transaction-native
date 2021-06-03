import React, { useState, useRef } from 'react'
import { StyleSheet, Dimensions, FlatList, RefreshControl, View, Image, TextInput, TouchableHighlight, Text, ScrollView,StatusBar } from 'react-native'
import renderItem from "../component/commodity";
import Swiper from 'react-native-swiper';
import px2em from "../utils/px";
const Card = () => {
    return (
        <View>

        </View>
    )
}

const deviceW = Dimensions.get('window').width
const tabsHome = (props) => {
    const [isLoading, setLoading] = useState(false)
    const [active, setActive] = useState(0)
    const scrollView = useRef()
    const headerIconList = [
        {
            name: '低价手机',
            img: ''
        },
        {
            name: '二手平板',
            img: ''
        }, {
            name: '电脑办公',
            img: ''
        }, {
            name: '数码影音',
            img: ''
        }, {
            name: '家用电器',
            img: ''
        }, {
            name: '高价回收',
            img: ''
        }, {
            name: '大牌腕表',
            img: ''
        }, {
            name: '奢品箱包',
            img: ''
        }, {
            name: '乐器文娱',
            img: ''
        }, {
            name: '拍拍严选',
            img: ''
        }
    ]
    const tabsList = [
        {
            name: '自营推荐'
        },
        {
            name: '京东备件库'
        },
        {
            name: '个人闲置'
        }
    ]
    const list = [[
        {
            title: 'Apple iPhone XR 苹果xr二手手机 黑色 【评价有礼】',
            price: 2799,
            type: '自营',
            eval: 1.6,
            evalGrid: '94%',
            img: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
        },
        {
            title: 'Apple iPhone XR 苹果xr二手手机 黑色 【评价有礼】',
            price: 2799,
            type: '自营',
            eval: 1.6,
            evalGrid: '94%',
            img: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
        },
        {
            title: 'Apple iPhone XR 苹果xr二手手机 黑色 【评价有礼】',
            price: 2799,
            type: '自营',
            eval: 1.6,
            evalGrid: '94%',
            img: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
        },
        {
            title: 'Apple iPhone XR 苹果xr二手手机 黑色 【评价有礼】',
            price: 2799,
            type: '自营',
            eval: 1.6,
            evalGrid: '94%',
            img: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
        }
    ], [
        {
            title: 'Apple iPhone XR 苹果xr二手手机 黑色 【评价有礼】',
            price: 2799,
            type: '自营',
            eval: 1.6,
            evalGrid: '94%',
            img: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
        },
        {
            title: 'Apple iPhone XR 苹果xr二手手机 黑色 【评价有礼】',
            price: 2799,
            type: '自营',
            eval: 1.6,
            evalGrid: '94%',
            img: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
        },
        {
            title: 'Apple iPhone XR 苹果xr二手手机 黑色 【评价有礼】',
            price: 2799,
            type: '自营',
            eval: 1.6,
            evalGrid: '94%',
            img: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
        },
        {
            title: 'Apple iPhone XR 苹果xr二手手机 黑色 【评价有礼】',
            price: 2799,
            type: '自营',
            eval: 1.6,
            evalGrid: '94%',
            img: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
        }
    ], [
        {
            title: 'Apple iPhone XR 苹果xr二手手机 黑色 【评价有礼】',
            price: 2799,
            type: '自营',
            eval: 1.6,
            evalGrid: '94%',
            img: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
        },
        {
            title: 'Apple iPhone XR 苹果xr二手手机 黑色 【评价有礼】',
            price: 2799,
            type: '自营',
            eval: 1.6,
            evalGrid: '94%',
            img: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
        },
        {
            title: 'Apple iPhone XR 苹果xr二手手机 黑色 【评价有礼】',
            price: 2799,
            type: '自营',
            eval: 1.6,
            evalGrid: '94%',
            img: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
        },
        {
            title: 'Apple iPhone XR 苹果xr二手手机 黑色 【评价有礼】',
            price: 2799,
            type: '自营',
            eval: 1.6,
            evalGrid: '94%',
            img: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
        }
    ]]
    const _onRefLoading = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    }
    const scrollEnd = (e) => {
        console.log(e.nativeEvent.contentOffset.x)
        console.log(1, deviceW)
        if (e.nativeEvent.contentOffset.x == 0) {
            setActive(0)
        } else {
            setActive(Math.ceil(e.nativeEvent.contentOffset.x / deviceW))
        }
    }
    const switchTabs = (e) => {
        if (e == active) return
        setActive(e)
        scrollView.current.scrollTo({ x: e * deviceW })
    }
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={styles.header}>
                <Image source={require(`../static/logo.png`)} style={{ width: px2em(100), height: px2em(60), marginRight: px2em(20) }} resizeMode="contain" />
                <TextInput style={{ backgroundColor: '#f8f8f8', flex: 1, paddingVertical: px2em(6), borderRadius: px2em(40), paddingHorizontal: px2em(40) }} placeholder="华为p40" />
            </View>
            <ScrollView refreshControl={
                <RefreshControl
                    refreshing={isLoading}
                    onRefresh={_onRefLoading}
                />
            } style={{ paddingTop: px2em(20) }}>
                <View style={{ paddingHorizontal: px2em(20) }}>
                    <Swiper
                        style={{ height: px2em(250) }}
                        horizontal={true}
                        autoplay={true}
                        autoplayTimeout={5}
                        paginationStyle={{ bottom: -5 }}
                        showsButtons={false}>
                        <Image source={require('@/static/banner1.png')} />
                        <Image source={require('@/static/banner1.png')} />
                    </Swiper>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                        {
                            headerIconList.map((item, index) => <TouchableHighlight underlayColor="rgba(1,1,1,.3)" style={{ width: '20%' }} key={index}>
                                <View style={{ alignSelf: 'center' }}>
                                    <Image source={require('../static/logo.png')} style={{ width: px2em(80), height: px2em(80), alignSelf: 'center', marginTop: px2em(10) }} resizeMode="contain" />
                                    <Text style={{ fontSize: px2em(26), marginTop: px2em(10) }}>{item.name}</Text>
                                </View>
                            </TouchableHighlight>)
                        }
                    </View>
                    <Card />
                    <View style={{ marginTop: px2em(40), flexDirection: 'row', justifyContent: 'space-evenly' }}>
                        {
                            tabsList.map((item, index) => <TouchableHighlight underlayColor="rgba(1,1,1,.1)" style={{}} onPress={() => switchTabs(index)}>
                                <View>
                                    <Text style={[active === index ? { color: 'rgb(0,186,115)', fontWeight: 'bold', } : { color: '#333' }, { fontSize: px2em(30), paddingBottom: px2em(10) }]}>{item.name}</Text>
                                    {
                                        active === index ?
                                            <View style={{ height: px2em(4), width: '20%', backgroundColor: 'rgb(0,186,115)', alignSelf: 'center' }}></View>
                                            : null
                                    }
                                </View>
                            </TouchableHighlight>)
                        }
                    </View>
                </View>
                <ScrollView ref={scrollView} onMomentumScrollEnd={scrollEnd} style={{ marginTop: px2em(20) }} pagingEnabled={true} horizontal={true} showsHorizontalScrollIndicator={false}>
                    {
                        list.map((listItem, index) => <FlatList
                            key={index}
                            keyExtractor={(_, s) => s}
                            numColumns={2} showsVerticalScrollIndicator={false} data={listItem} renderItem={(item) => renderItem(item, props)} />)
                    }
                </ScrollView>
            </ScrollView>
        </View>
    )
}

export default tabsHome
const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        paddingHorizontal: px2em(30),
        paddingVertical: px2em(6)
    },

})
