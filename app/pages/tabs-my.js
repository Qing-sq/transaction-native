import React, { useEffect, useState } from 'react'

import { StyleSheet, Text, View, StatusBar, ScrollView, Image, RefreshControl } from 'react-native'
import { Avatar } from 'react-native-elements';
import Icon from "react-native-vector-icons/Ionicons";
import px2em from "../utils/px";
import Selection from "../component/commodity";
import LinearGradinet from 'react-native-linear-gradient';
const Header = ({ isScroll, navigation }) => {
    return (
        <View style={styles.header}>
            <Icon onPress={() => navigation.navigate('personal')} style={styles.headerIcon} color="#fff" name="settings-outline" size={28} />
            <Icon style={styles.headerIcon} color="#fff" name="scan-outline" size={28} />
            <Icon style={styles.headerIcon} color="#fff" name="create-outline" size={28} />
        </View>
    )
}
const HeaderCard = ({ navigation }) => {
    const isLogin = () => {
        navigation.navigate('login')
    }
    return (
        <View style={styles.headerCard}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View>
                    <Text onPress={isLogin} style={{ fontSize: 22 }}>马上登录</Text>
                    <Text style={{ marginTop: px2em(10), color: '#999999' }}>让闲置来赚钱</Text>
                </View>
                <Avatar
                    size="medium"
                    rounded
                    source={{
                        uri: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
                    }}
                />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: px2em(40) }}>
                <Text>收藏</Text>
                <Text>优惠券</Text>
                <Text>赚入</Text>
            </View>
        </View>
    )
}
const Item = (props) => {
    const { list } = props
    return (
        <View style={{ backgroundColor: '#fff', flexDirection: 'row', marginTop: px2em(20), paddingHorizontal: px2em(50), paddingVertical: px2em(30), justifyContent: 'space-between' }}>
            {
                list.map((i, indx) => {
                    return <View key={indx} >
                        {i.icon ?
                            <Icon style={{ alignSelf: 'center' }} name={i.icon} size={26} /> :
                            <Text style={{ textAlign: 'center' }}>-</Text>
                        }
                        <Text style={{ marginTop: px2em(10) }}>{i.title}</Text>
                    </View>
                })
            }
        </View>
    )
}
const Exclusive = () => {
    const exclusiveList = [
        {
            icon: 'share-outline',
            title: '我的回收'
        },
        {
            icon: 'briefcase-outline',
            title: '我的夺宝'
        },
        {
            icon: 'construct-outline',
            title: '帮助中心'
        },
        {
            icon: 'document-text-outline',
            title: '拍拍灰'
        }
    ]
    return (

        <View style={styles.exclusive}>
            <View style={styles.exclusiveText}>
                <View style={{ width: px2em(50), height: px2em(2), backgroundColor: '#999999' }}></View>
                <Text style={{ marginLeft: px2em(20), marginRight: px2em(20) }}>专属服务</Text>
                <View style={{ width: px2em(50), height: px2em(2), backgroundColor: '#999999' }}></View>
            </View>
            <Item list={exclusiveList} />
        </View>
    )
}
const tabsMy = (props) => {
    const { navigation } = props

    const nextList = [
        {

            title: '已发布'
        },
        {

            title: '已卖出'
        },
        {

            title: '已下架'
        },
        {
            icon: 'briefcase-outline',
            title: '我的闲置'
        }
    ]
    const orderList = [
        {
            icon: 'share-outline',
            title: '待付款'
        },
        {
            icon: 'briefcase-outline',
            title: '待收货'
        },
        {
            icon: 'construct-outline',
            title: '售后/维修'
        },
        {
            icon: 'document-text-outline',
            title: '我的订单'
        }
    ]
    const selectionList = [
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
    ]
    useEffect(() => {
        const router =  navigation.addListener('didFocus',(obj)=>{
            StatusBar.setBackgroundColor('rgb(0,186,115)')
        })
        return () => {
            router.remove()
        }
    },[])
    const [isLoading, setLoading] = useState(false)

    const _onRefLoading = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    }
    return (
        <View>
            <StatusBar backgroundColor="rgb(0,186,115)" barStyle="dark-content" />
            <Header {...props} />
            <ScrollView refreshControl={
                <RefreshControl
                    refreshing={isLoading}
                    onRefresh={_onRefLoading}
                />
            }
                showsVerticalScrollIndicator={false} >
                <View style={styles.headerBottomBox}></View>
                <HeaderCard  {...props} />
                <Item list={orderList}></Item>
                <Item list={nextList}></Item>
                <Exclusive />
                <Text style={{ textAlign: 'center', marginTop: px2em(30), fontSize: px2em(28) }}>精选筛选</Text>
                <View style={{ flexDirection: 'row', width: '100%', flexWrap: 'wrap', paddingTop: px2em(30), paddingBottom: px2em(80) }}>
                    {
                        selectionList.map((i, index) => <Selection item={i} key={index} {...props} />)
                    }
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        backgroundColor: 'rgb(0,186,115)',
        paddingTop: px2em(10),
        paddingBottom: px2em(10),
    },
    headerBottomBox: {
        width: '100%', height: px2em(150), position: 'absolute', backgroundColor: 'rgb(0,186,115)',
        top: 0,
    },
    headerIcon: {
        marginLeft: px2em(30)
    },
    headerCard: {
        backgroundColor: '#fff',
        marginHorizontal: px2em(20),
        paddingVertical: px2em(40),
        paddingHorizontal: px2em(40),
        elevation: 1,
        marginTop: px2em(20)
    },
    exclusive: {
        backgroundColor: '#fff',
        marginTop: px2em(20),
    },
    exclusiveText: {
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: px2em(20),
        fontSize: px2em(22),
    },
    selectionSwapper: {
        padding: px2em(10),
        width: '50%',
    },

})

export default tabsMy