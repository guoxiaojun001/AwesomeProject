# AwesomeProject
reactnative 入门第二天

搭建好环境后，执行以下

创建项目
进入你的工作目录，运行

react-native init MyProject
并耐心等待数（或数十）分钟。

运行packager
react-native start

可以用浏览器访问http://localhost:8081/index.android.bundle?platform=android

react-native run-android


2.新建的Activity，可以将布局文件都写在index.android.js中，并且采用AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);注册上，
或者根据实际业务来区分，将布局文件写在其他js文件中，
然后在需要的地方引入 （如 import SecondProject from './out'; //通过引入布局外部，或者都写在当前文件中）


React-Native 与原生的3种交互通信（Android）

大致分为2种情况：
•	Android主动向JS端传递事件、数据
•	JS端被动向Android询问获取事件、数据
方式	优点	缺点
事件方式：RCTDeviceEventEmitter	可任意时刻传递，Native主导控制	个人觉得此种方式缺点小
CallBack回调方式	JS调用一次，Native返回一次	CallBack为异步操作，返回时机不确定
Promises 方式	JS调用一次，Native返回一次	每次使用需要JS调用一次



1.在工程根目录下执行打包命令，比如
生成bundle包，需要执行以下
react-native bundle --entry-file index.android.js --bundle-output ./bundle/index.android.bundle --platform android --assets-dest ./bundle --dev false

2.增量升级的话不要把图片资源直接打包到res中，脚本如下：
react-native bundle --entry-file index.android.js --bundle-output ./bundle/index.android.bundle

3.保证MainActivity.java中的 setBundleAssetName与你的jsbundle文件名一致，比如.setBundleAssetName(“index.android.jsbundle”)就与我生成的资源名一致

