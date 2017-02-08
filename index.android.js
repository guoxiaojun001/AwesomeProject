/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
	TextInput,
    View,
    DeviceEventEmitter,
    NativeModules,
    ToastAndroid
} from 'react-native';


import SecondProject from './out'; //通过引入布局外部，或者都写在当前文件中

export default class AwesomeProject extends Component {

    componentWillMount() {
        DeviceEventEmitter.addListener('EventName', function (msg) {

            console.log(msg);

            ToastAndroid.show("DeviceEventEmitter收到消息:" + "\n" + msg.key, ToastAndroid.SHORT)

        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}
                      onPress={this.getDeviceEventEmitterTime.bind(this)}
                >
                    RCTDeviceEventEmitter获取时间
                </Text>
                <Text style={styles.welcome}
                      onPress={this.getCallBackTime.bind(this)}
                >
                    CallBack获取时间
                </Text>
                <Text style={styles.welcome}
                      onPress={this.getPromiseTime.bind(this)}
                >
                    Promise获取时间
                </Text>
				
				
				<Text style={styles.welcome}
                      onPress={this.jumpActivity.bind(this)}
                >
                    页面跳转
                </Text>
            </View>
        );
    }

    getDeviceEventEmitterTime() {
        NativeModules.TransMissonMoudle.getTime();
    }

    getCallBackTime() {
        NativeModules.TransMissonMoudle.callBackTime("Allure",
            (msg) => {
                console.log(msg);
                ToastAndroid.show("CallBack收到消息:" + "\n" + msg, ToastAndroid.SHORT)

            }
        );

    }

    getPromiseTime() {
        NativeModules.TransMissonMoudle.sendPromiseTime("Allure").then(msg=> {
            console.log("年龄:" + msg.age + "/n" + "时间:" + msg.time);
            ToastAndroid.show("Promise收到消息:" + "\n" + "年龄:" + msg.age + "时间:" + msg.time, ToastAndroid.SHORT)

            this.setState({
                age: msg.age,
                time: msg.time,
            })
        }).catch(error=> {
            console.log(error);
        });
    }
	
	
	jumpActivity() {
        NativeModules.TransMissonMoudle.jump("xmqq");
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);


