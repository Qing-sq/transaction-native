import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ToastAndroid, StatusBar } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import { Input, CheckBox, Button, Header } from 'react-native-elements';
import fetchRequest from "@/utils/request"
const Login = (props) => {
    let timer

    const [params, setParams] = useState({
        phone: null,
        password: null
    })
    const [res, setRes] = useState(null)
    const [codeSrt, setCodeStr] = useState('发送验证码')
    const { navigation } = props
    const getCode = () => {
        if (codeSrt != '发送验证码') return
        let time = 60
        timer = setInterval(() => {
            if (time < 1) {
                clearInterval(timer)
                setCodeStr('发送验证码')
                return
            }
            time -= 1
            setCodeStr(`${time}S后重新发送`)
        }, 1000);
    }
    const inputChange = (val, type) => {
        console.log(val)
        if (type == 'phone') {
            setParams({
                ...params,
                phone: Number(val)
            })
        } else {
            setParams({
                ...params,
                password: val
            })
        }
    }
    useEffect(() => {
        return () => {
            clearInterval(timer)
        }
    }, [])
    const toLogin = () => {
        console.log(params, '传参')
        fetchRequest("api/v1/user/login", 'post', params).then(res => {
            console.log(res)
            ToastAndroid.show(res.message, ToastAndroid.SHORT);
            console.log(res)
            if (res.code == 200) {
                navigation.goBack()
            }
        })
    }
    return (
        <View style={{ backgroundColor: '#fff', flex: 1 }}>
            {/* <StatusBar backgroundColor="#fff" barStyle="dark-content" /> */}

            <Header backgroundColor="#fff"
                containerStyle={{
                    borderBottomWidth: 0,
                    flexDirection: 'row', alignItems: 'center'

                }}
                leftComponent={<Icon onPress={() => navigation.goBack()} name="close-outline" size={30}></Icon>}
                rightComponent={<Text style={{ fontSize: 18 }}>注册</Text>}

            />
            <View style={{ padding: px2em(30), }}>
                <Text style={{ fontSize: 24, }}>手机快捷登录</Text>
                <Text style={{ marginTop: 10 }}>未注册过的手机号将自动创建贝壳账号</Text>
                <View style={{ marginTop: 30, }}>
                    <Input
                        placeholder='请输入手机号'
                        onChangeText={(val) => inputChange(val, 'phone')}
                    />
                    <Text onPress={getCode} style={{ right: 14, top: 14, position: 'absolute', fontSize: 16 }}>{codeSrt}</Text>
                    <Input
                        style={{ marginTop: 20 }}
                        placeholder='请输入短信验证码'
                        onChangeText={(val) => inputChange(val, 'password')}
                    />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'baseline', }}>
                    <CheckBox
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                    />
                    <Text style={{ color: '#999999', flex: 1 }}>我已阅读并同意《贝壳隐私政策》及《贝壳用户服务协议》</Text>
                </View>
                <Button
                    onPress={toLogin}
                    buttonStyle={{ paddingVertical: 14, marginTop: 20, marginBottom: 20, backgroundColor: 'rgb(0,186,115)' }}
                    title="立即登录"
                />
                <Text style={{ textAlign: 'center' }}>账号密码登录</Text>
            </View>

        </View>
    )
}

export default Login;


const style = StyleSheet.create({
    header: {
        paddingHorizontal: 10,
        width: '100%',
        paddingVertical: 10,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})

