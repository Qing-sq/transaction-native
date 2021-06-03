import React from 'react'
import { createAppContainer, } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Tabbar from './tabbar'
import Login from "./pages/login/index";
import Personal from "./pages/personal/personal";
import ShopDetails from "./pages/shop-details/shop-details";
import { TransitionPresets } from 'react-navigation-stack';


const Root = createStackNavigator({
    tabbar: {
        screen: Tabbar,
        navigationOptions: {
            headerShown: false
        }
    },
    login: {
        screen: Login,
        navigationOptions: {
            headerShown: false
        }
    },
    shopDetails: {
        navigationOptions:({navigation})=>({
            title:navigation.state.params.title
        }),
        screen: ShopDetails,
    },
    personal:{
        screen: Personal,
        navigationOptions:{
            title:'个人设置'
        }
    }
}, {
    defaultNavigationOptions: {
        ...TransitionPresets.SlideFromRightIOS
    },
})
const defaultGetStateForAction = Root.router.getStateForAction;
Root.router.getStateForAction = (action, state) => {
    if (action.routeName == 'my') {
        console.log(defaultGetStateForAction(action, state))
    }
    return defaultGetStateForAction(action, state)
};
export default createAppContainer(Root)



