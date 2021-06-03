
import React from 'react'

import { createBottomTabNavigator } from "react-navigation-tabs";
import Chat from "./pages/tabs-chat";
import My from "./pages/tabs-my";
import Shop from "./pages/tabs-shop";
import Home from "./pages/tabs-home";
import { StyleSheet,Image } from 'react-native'

const Tabbar = createBottomTabNavigator({
    home: {
        screen: Home,
        navigationOptions: {
            title: '首页',
            tabBarLabel: '首页',
            tabBarIcon: ({ focused }) => {
                const source = focused ? require('./static/home1.png') : require('./static/home0.png')
                return <Image source={source} style={style.tabBarIcon} />
            }
        }
    },
    shop: {
        screen: Shop,
        navigationOptions: {
            title: '分类',
            tabBarLabel: '分类',
            tabBarIcon: ({ focused }) => {
                const source = focused ? require('./static/comm1.png') : require('./static/comm0.png')
                return <Image source={source} style={style.tabBarIcon} />
            }
        }
    },
    chat: {
        screen: Chat,
        navigationOptions: {
            title: '消息',
            tabBarLabel: '消息',
            tabBarIcon: ({ focused }) => {
                const source = focused ? require('./static/put1.png') : require('./static/put0.png')
                return <Image source={source} style={style.tabBarIcon} />
            }
        }
    },
    my: {
        screen: My,
        navigationOptions: {
            title: '我的',
            tabBarLabel: '我的',
            tabBarIcon: ({ focused }) => {
                const source = focused ? require('./static/my1.png') : require('./static/my0.png')
                return <Image source={source} style={style.tabBarIcon} />
            }
        }
    }
}, {
    tabBarOptions: {
        activeTintColor: '#00BA73'
    }
})
const style = StyleSheet.create({
    tabBarIcon: {
        width: 21,
        height: 21
    }
})
export default Tabbar