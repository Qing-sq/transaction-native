import React, { useState, useEffect } from 'react'
// import { Provider } from "mobx-react";
// import store from "./mobx/index";
import Context from "./store/context";
import { StyleSheet, View, StatusBar } from 'react-native'
import BootScreen from "./pages/boot-screen";
import Root from "./root";
// import { Observer, useLocalObservable } from "mobx-react";
// import './utils/global'

const App = () => {
    const [state, setstate] = useState(false)
    const [barColor, setBarColor] = useState('#fff')
    useEffect(() => {

        let timer = setTimeout(() => {
            setstate(true)
        }, 1000);
        return () => {
            clearTimeout(timer)
        }
    }, [])
    return (
        <View style={{ flex: 1 }}>
            {state ?
                // value={{barColor,setBarColor}}
                <Context.Provider value={{ barColor }}>
                    <StatusBar backgroundColor="#fff" barStyle="dark-content" />
                    <Root />
                </Context.Provider>
                : <BootScreen />}
        </View>
    )

}

export default App

const styles = StyleSheet.create({})
