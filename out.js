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
    Image,
    Button,
    Switch,
    TouchableOpacity,
    ToastAndroid
} from 'react-native';



class SecondProject extends Component {
    constructor(props) {
        super(props);
        //可以定义多个文本输入框接收值
        this.state = { txtValue: '', txtValue2: '' };
    }

    render() {
        return <View>
            <Text>测试，我是写在out.js中文布局</Text>
            <TextInput
                style={{height: 50}}
                placeholder="Type here to translate!"
                
                onChangeText={(text) => this.setState({ txtValue: text})}
                value={this.state.txtValue}
            />


            <TextInput
                style={styles.style_user_input}
                placeholder='QQ号/手机号/邮箱'
                numberOfLines={1}
                autoFocus={true}
                underlineColorAndroid={'transparent'}
                textAlign='center'

                onChangeText={(text) => this.setState({ txtValue2: text})}
                value={this.state.txtValue2}
            />
            <View
                style={{height:1,backgroundColor:'#f4f4f4'}}
            />


            <TextInput
                style={styles.style_pwd_input}
                placeholder='密码'
                numberOfLines={1}
                underlineColorAndroid={'transparent'}
                secureTextEntry={true}
                textAlign='center'
            />

            <Switch
                onValueChange={(value) => this.setState({falseSwitchIsOn: value})}
                style={{marginBottom:10,marginTop:10,alignSelf:'center'}}
                value={this.state.falseSwitchIsOn} />



            <TouchableOpacity onPress={this.imageTouch}>
                <Image source={require('./common_image/apply_fail.png')}
                       style={styles.style_image}

                       onPress={this.imageTouch.bind(this)}
                />
            </TouchableOpacity>

            <Button
                onPress={this.onPressLearnMore.bind(this)}
                title="Learn More"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />


        </View>;
    }


    //获取文本框输入内容
    getText() {
        return this.state.txtValue
        //ToastAndroid.show("文本内容:" + this.state.txtValue, ToastAndroid.SHORT)
    }

    //响应图片点击事件
    imageTouch() {
        ToastAndroid.show("图片被点击了:", ToastAndroid.SHORT)
    }

    //响应点击事件
    onPressLearnMore() {
        ToastAndroid.show("我被点击了:" + this.state.txtValue2, ToastAndroid.SHORT)
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

    style_image:{
        borderRadius:35,
        height:70,
        width:70,
        marginTop:40,
        alignSelf:'center',
    },
    style_user_input:{
        backgroundColor:'#fff',
        marginTop:10,
        height:40,
    },
    style_pwd_input:{
        backgroundColor:'#fff',
        height:40,
    },
    style_view_commit:{
        marginTop:15,
        marginLeft:10,
        marginRight:10,
        backgroundColor:'#63B8FF',
        height:40,
        borderRadius:5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    style_view_unlogin:{
        fontSize:12,
        color:'#63B8FF',
        marginLeft:10,
    },
    style_view_register:{
        fontSize:12,
        color:'#63B8FF',
        marginRight:10,
        alignItems:'flex-end',
        flex:1,
        flexDirection:'row',
        textAlign:'right',
    }
});

AppRegistry.registerComponent('SecondProject', () => SecondProject);

