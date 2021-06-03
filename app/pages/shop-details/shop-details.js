import React, { useEffect } from 'react'
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'

import Swiper from 'react-native-swiper';
import px2em from "../../utils/px";
import Icon from "react-native-vector-icons/Ionicons";

const Parameter = () => {
    const list = [
        {
            name: '成色',
            title: '9成新',

        },
        {
            name: '购买渠道',
            title: '国行',
        },
        {
            name: '电池效率',
            title: '90%以上',
        },
        {
            name: '主板维修',
            title: '无维修',
        },

    ]
    return (
        <View style={[styles.parameterSwapper, styles.flexBase]}>
            <Text style={{ fontWeight: 'bold' }}>质检{"\n"}参数</Text>
            {
                list.map(i => <View >
                    <Icon size={20} style={{ alignSelf: 'center' }} name="heart-outline" />
                    <Text style={{ paddingVertical: px2em(10), fontWeight: 'bold', fontSize: px2em(24), textAlign: 'center' }}>{i.name}</Text>
                    <Text style={{ fontSize: px2em(24), textAlign: 'center' }}>{i.title}</Text>
                </View>)
            }
            <Text style={{ with: px2em(40), flexWrap: 'wrap', }}>查看{"\n"}质检{"\n"}报告</Text>
        </View>
    )
}
const Favorable = () => {
    return (
        <View style={[styles.FavorableSwapper, styles.flexBase]}>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontWeight: 'bold' }}>优惠</Text>
                <Text style={styles.favorableItem}>满2000减100</Text>
            </View>
            <Text style={{ fontWeight: 'bold', fontSize: px2em(30) }}>...</Text>
        </View>
    )
}
const Specification = () => {
    return (
        <View style={[styles.specificationSwapper, styles.flexBase]}>
            <View style={styles.specificationItemSwapper}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontWeight: 'bold' }}>已选</Text>
                    <Text style={{ marginLeft: px2em(30) }}>黑色【评价有礼】，128G，1个</Text>
                </View>
                <Text style={{ fontWeight: 'bold', fontSize: px2em(30) }}>...</Text>
            </View>
            <View style={styles.specificationItemSwapper}>
                <View style={{ flexDirection: 'row', flex: 1 }}>
                    <Text style={{ fontWeight: 'bold' }}>送至</Text>
                    <View style={{ marginLeft: px2em(30), flex: 1, maxWidth: px2em(600) }}>
                        <Text>北京朝阳区三环到四环之间</Text>
                        <Text style={{ marginTop: px2em(6), fontSize: px2em(24), flexDirection: 'row', flexWrap: 'wrap' }}>
                            <Text style={{ color: 'rgb(224,59,70)' }}>现货</Text>
                            <Text style={{ color: '#999999' }}> 今日16:00前完成下单，预计3月19日19:00前发货，3月22日24:00前送达</Text>
                        </Text>
                    </View>
                </View>
                <Text style={{ fontWeight: 'bold', fontSize: px2em(30), }}>...</Text>
            </View>
            <View style={styles.specificationItemSwapper}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontWeight: 'bold' }}>运费</Text>
                    <Text style={{ marginLeft: px2em(30) }}>免运费</Text>
                </View>
                <Text style={{ fontWeight: 'bold', fontSize: px2em(30) }}>...</Text>
            </View>
        </View>
    )
}
const shopDetails = (props) => {
    const { navigation: { state: { params } } } = props
    const list = [
        '', '', '', '', '', '', '', '', '', ''
    ]
    const welfare = [
        '商家发货&售后', '7天无理由退货', '特权保障', '晚必赔', '送运费险'
    ]
    const Item = () => {
        return (
            <View style={[styles.itemSwapper, styles.flexBase]}>
                <View style={styles.itemHeaderPrice}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ color: 'rgb(224,59,70)' }}>￥</Text>
                        <Text style={{ color: 'rgb(224,59,70)', fontSize: px2em(50) }}>2799.00</Text>
                    </View>
                    <View>
                        <Icon style={{ alignSelf: 'center' }} size={16} name="settings-outline" />
                        <Text>收藏</Text>
                    </View>
                </View>
                <Text >京东旗下二手交易平台</Text>
                <Text style={{ marginTop: px2em(20), marginBottom: px2em(20), fontWeight: 'bold', fontSize: px2em(34) }}>{params.title}</Text>
                <Text style={{ fontSize: px2em(24), color: '#999999' }}>【拍拍严选】 真机实拍，七天无理由，一年质保，款款精品品质保障，更多好物点击关注店铺查看 》》</Text>
            </View>
        )
    }
    useEffect(() => {
        console.log(props)
        return () => {
        }
    }, [])

    return (
        <View style={{ flex: 1 }}>
            <ScrollView >

                <Swiper
                    style={{ height: px2em(600), width: '100%' }}
                    horizontal={true}
                    autoplay={true}
                    autoplayTimeout={6}
                    paginationStyle={{ bottom: -5 }}
                    showsButtons={false}>
                    <Image style={styles.swiperImg} source={require('@/static/banner1.png')} />
                    <Image style={styles.swiperImg} source={require('@/static/banner2.jpg')} />
                </Swiper>
                <Item />

                <Parameter />
                <Favorable />
                <Specification />
                <View style={{ backgroundColor: '#f8f8f8', borderBottomLeftRadius: px2em(20), borderBottomRightRadius: px2em(20), flexDirection: 'row', paddingVertical: px2em(8), paddingHorizontal: px2em(30), justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', width: px2em(630) }}>
                        {
                            welfare.map(i => <View style={{ flexDirection: 'row', alignItems: 'center', padding: px2em(4) }}>
                                <Icon color="red" name="checkbox-outline" />
                                <Text>{i}</Text>
                            </View>)
                        }
                    </View>
                    <Text style={{ fontWeight: 'bold', fontSize: px2em(30) }}>...</Text>
                </View>
            </ScrollView>
        </View>

    )
}

export default shopDetails


const styles = StyleSheet.create({
    swiperImg: {
        width: '100%',

    },
    flexBase: {
        paddingVertical: px2em(20),
        paddingHorizontal: px2em(30),
        backgroundColor: '#fff',
    },
    itemSwapper: {


        borderBottomRightRadius: px2em(30),
        borderBottomLeftRadius: px2em(30),

    },
    parameterSwapper: {

        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: px2em(6),
        alignItems: 'center'

    },
    itemHeaderPrice: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: px2em(20)
    },
    FavorableSwapper: {
        marginTop: px2em(20),
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: px2em(30),
        alignItems: 'center'

    },
    favorableItem: {
        color: 'rgb(224,59,70)',
        borderColor: 'rgb(224,59,70)',
        marginLeft: px2em(30),
        borderWidth: 1,
        paddingHorizontal: px2em(10),
        paddingVertical: px2em(6),
        borderRadius: px2em(10)

    },
    specificationSwapper: {
        marginTop: px2em(20)
    },
    specificationItemSwapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: px2em(20),
        borderBottomWidth: 1,
        borderBottomColor: '#f8f8f8'

    }
})